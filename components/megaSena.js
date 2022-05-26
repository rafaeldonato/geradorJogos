import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput, ScrollView, SafeAreaView as ScroollView, FlatList, Button, Alert } from "react-native";
import email from 'react-native-email'
import Jogo from "../services/Jogo";
import styles from "./styles";


const MegaSena = () => {

    //VAR QUE DEFINE A QTDE DE JOGOS QUE SERAO GERADOS
    const [qtdeJogos, setQtdeJogos] = useState('');
    const [concurso, setConcurso] = useState('');

    //VAR QUE DEFINE ONDE SERAO ARMAZENADOS OS JOGOS GERADOS
    const [jogosGerados, setJogosGerados] = useState([]);

    //VAR QUE DEFINE O DESTINATARIO DE EMAIL
    const [destinatario, setdestinatario] = useState('');

    //ARRAY QUE ARMAZENA TODOS OS JOGOS GERADOS
    const [arrayPrincipal] = useState([]);

    const [arrayBanco, setArraybanco] = useState([]);

    //ARRAY QUE ARMAZENA TEMPORARIAMENTE CADA JOGO GERADO
    var arrayTemp = [];

    //VAR QUE DEFINE AS DEZENAS SORTEADAS INSERIDAS PELO USUÁRIO
    const [dezena1, setDezena1] = useState('');
    const [dezena2, setDezena2] = useState('');
    const [dezena3, setDezena3] = useState('');
    const [dezena4, setDezena4] = useState('');
    const [dezena5, setDezena5] = useState('');
    const [dezena6, setDezena6] = useState('');


    //VAR DE VALIDAÇÃO DE CAMPOS
    const [erroConc, setErroConc] = useState(null)
    const [erroQtdeJog, setErroQtdeJog] = useState(null)

    const validar =  () => {
        //let error = false
        //if(concurso == null){
            setErroConc("Informe um concurso")
      //      error = true
       // }
      //  if(qtdeJogos == null){
          //  setErroQtdeJog("Informe uma quantidade de jogos")
        //}

        return false
        //return !error
    }

    const salvar = () => {
        if(validar()){
            console.log("Salvou")
        }
    }


    //FUNCAO QUE ENVIA O E-MAIL COM OS JOGOS
    function EnviarEmail() {
        // var texto = arrayPrincipal.toString()
        var bodyTexto = ''
        for (let jogo of arrayPrincipal) {
            bodyTexto += jogo.toString() + "\n"
        }
        // texto = splitString(texto, ',')

        const to = [destinatario] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            subject: 'Jogos da Mega-Sena gerados',
            body: "Olá, seguem os jogos gerados no App MegaSena : \n " + bodyTexto,
        }).catch(console.error)
    }

    // FUNCAO QUE MOSTRA O JOGO DESTACADO NA TELA
    function MostrarJogoSelect(item) {

        Alert.alert(item);
    }

    //FUNCAO QUE GERA OS JOGOS
    function GerarJogos(qtdeJogos) {

        //CRIA UM ARRAY TEMPORARIO PARA ARMAZENAR UM JOGO
        for (var i = 0; i < qtdeJogos; i++) {

            //SE HOUVER DUPLICIDADE NO ARRAY PRINCIPAL ELE FICARÁ NO LAÇO ATÉ QUE NÃO EXISTA MAIS
            do {
                while (arrayTemp.length < 6) {
                    var aleatorio = Math.floor(Math.random() * 60 + 1);

                    if (arrayTemp.indexOf(aleatorio) == -1) {
                        arrayTemp.push(aleatorio);
                    }

                }

            } while (verificarDuplicidade() == false);

            //SE NAO, GRAVAR O ARRAY TEMP NO GERAL
            arrayPrincipal.push(arrayTemp.toString());

            //MONTA A LISTA DE JOGOS NA VARIAVEL JOGOS GERADOS
            setJogosGerados(arrayPrincipal.toString())

            //ZERAR O ARRAY TEMP
            LimparArray(arrayTemp);

        }

        gravarBanco();
        //popularArrayRes(); 
        mostrarTodos();

    }



    function gravarBanco() {
        Jogo.dropTable();
        Jogo.createTable();


        for (let jogo of arrayPrincipal) {
            Jogo.create({ nums: jogo })
                .then(id => console.log('Jogo created with id: ' + id))
                .catch(err => console.log(err))
        }
    }


    //MOSTRA TODOS OS JOGOS ARMAZENADOS NO BANCO 
    function mostrarTodos() {
        {
            const printJogo = (jogo) => {
                console.log(`id:${jogo.id}, nums:${jogo.nums}`)
            }

            Jogo.all()
                .then(
                    Jogos => Jogos.forEach(c => printJogo(c))
                )
        }
    }

    function popularArrayRes() {
        {
            const printJogo = (jogo) => {
                arrayPrincipal.push(`nums:${jogo.nums}`)
            }

            Jogo.all()
                .then(
                    Jogos => Jogos.forEach(j => printJogo(j))
                )
        }
    }

    // FUNCAO QUE VALIDA SE EXISTE JOGO REPETIDO NA LISTA DE JOGOS GERADOS
    function verificarDuplicidade() {

        arrayTemp.forEach((item, posicao, array) => {

            //console.log('Posicao do array : ', posicao)
            //VERIFICAR SE O ITEM 0 DO TEMP ESTÁ CONTIDO NO PRINCIPAL
            if (arrayPrincipal.includes(item) == false) {
                return true;
            }

            //VERIFICAR SE O ULTIMO ITEM DO ARRAY TBM ESTA CONTIDO, SE SIM RETORNE FALSE    
            if (posicao == 5 && arrayPrincipal.includes(item)) {
                return false;
            }

        })

    };

    // FUNCAO QUE LIMPA O ARRAY TEMPORARIO
    function LimparArray(arrayList) {
        while (arrayList.length) {
            arrayList.pop();
        }
    };



    // FUNCAO QUE CHAMA AS DEMAIS ROTINAS NO ON PRESS DO BOTAO GERAR JOGO
    function Jogar() {
        LimparArray(arrayPrincipal);
        GerarJogos(qtdeJogos);
    };



    function carregarResultados() {

        let base = [
            "1 11/03/1996 41 5 4 52 30 33",
        ];

        let jogo = []
        let array = []

        for (jogo of base) {
            array = jogo.split(" ");
            let concurso = array[0]
            let date = array[1]
            let dezenas = []

            for (let index = 2; index <= 7; index++) {
                if (index == 7) {
                    dezenas += array[index]
                    break
                }
                dezenas += array[index] + ",";
            }

            console.log("Concurso :", concurso),
                console.log("Data: ", date),
                console.log("Dezenas : ", dezenas)
        }

    }


    // FUNCAO QUE LIMPA AS DEZENAS
    function limparDezenas() {
        setDezena1 = useState('');
    };



    //INTERFACE DO USUARIO
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.tituloMain}>GERADOR DE JOGOS DA MEGA-SENA</Text>

            <Text style={styles.titulo}>Informe a quantidade de jogos</Text>

            <TextInput
                //TEXT INPUT QUE RECEBE A QTDE DE JOGOS

                style={styles.textInputJogos}
                onChangeText={setQtdeJogos}
                value={String(qtdeJogos)}
                keyboardType="numeric"
                placeholder="Informe a quantidade de jogos"
                errorMessage={erroQtdeJog}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={ processo => {
                    salvar()
                    Jogar()
                    
                }}

                //onPress={(e) => Jogar()}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>GERAR JOGO</Text>
            </TouchableOpacity>

            <ScrollView style={styles.svResult}>
                {arrayPrincipal.map((item, key) => (
                    <Text key={key} style={styles.text} onPress={MostrarJogoSelect.bind(this, item)}> {item} </Text>)
                )}
            </ScrollView>

            <Text style={styles.titulo}>Informe um e-mail para envio dos jogos:</Text>
            <TextInput style={styles.textInputEmail}
                onChangeText={setdestinatario}
                value={String(destinatario)}
                placeholder="e-mail"
            /> 


        <TouchableOpacity
                style={styles.buttonEmail}
                onPress={(e) => EnviarEmail()}

            >
                <Text style={{ color: 'white', fontSize: 12, }}>Enviar jogos por e-mail</Text>
            </TouchableOpacity>

            <Text style={styles.tituloMain}>CONFERÊNCIA DE RESULTADOS</Text>
            <Text style={styles.titulo}>Informe as dezenas sorteadas</Text>




            <View style={styles.containerResultado}>

                <TextInput
                    //TEXT INPUT QUE RECEBE AS DEZENAS SORTEADAS
                    style={styles.textInputDezenas}
                    onChangeText={setDezena1}
                    value={String(dezena1)}
                    keyboardType="numeric"
                />
                <TextInput

                    style={styles.textInputDezenas}
                    onChangeText={setDezena2}
                    value={String(dezena2)}
                    keyboardType="numeric"
                />
                <TextInput

                    style={styles.textInputDezenas}
                    onChangeText={setDezena3}
                    value={String(dezena3)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.textInputDezenas}
                    onChangeText={setDezena4}
                    value={String(dezena4)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.textInputDezenas}
                    onChangeText={setDezena5}
                    value={String(dezena5)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.textInputDezenas}
                    onChangeText={setDezena6}
                    value={String(dezena6)}
                    keyboardType="numeric"
                />

            </View>

            <TouchableOpacity
                style={styles.buttonEmail}
                onPress={(e) => limparDezenas(dezena1, dezena2)}

            >
                <Text style={{ color: 'white', fontSize: 12, }}>Limpar jogo</Text>
            </TouchableOpacity>

        </ScrollView>

    );

};

export default MegaSena;

