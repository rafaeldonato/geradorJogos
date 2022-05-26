import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, SafeAreaView as ScroollView, FlatList, Button, Alert } from "react-native";
import email from 'react-native-email'
import Jogo from "../services/Jogo";
import styles from "./styles";

export default function Conferencia() {

    var text = "1	11/03/1996	41	5	4	52	30	33	";
    const myArray = text.split(" ");
    let concurso = myArray[0]
    let date = myArray[1];
    let dezenas = myArray[2,3,4,5,6,7]

 return (
    console.log(concurso),
    console.log(date),
    console.log(dezenas)
 );
 }

/*
const Conferencia = () => {
    

    
    );

};

   
     /*
    "INSERT INTO resultados (concurso, data, nums_sorteados) values (?, ?, ?);",

    "INSERT INTO resultados (concurso) values (?);",
    "INSERT INTO resultados (data) values (?);",
    "INSERT INTO resultados (nums_sorteados) values (?);",


    

    const concursos = [

        "	1	11/03/1996	41	5	4	52	30	33	",
        "	2	18/03/1996	9	39	37	49	43	41	",
        "	3	25/03/1996	36	30	10	11	29	47	",
        "	4	01/04/1996	6	59	42	27	1	5	",
        "	5	08/04/1996	1	19	46	6	16	2	",

        

    ];




    //VAR QUE DEFINE A QTDE DE JOGOS QUE SERAO GERADOS
    const [qtdeJogos, setQtdeJogos] = useState('');

    //VAR QUE DEFINE ONDE SERAO ARMAZENADOS OS JOGOS GERADOS
    const [jogosGerados, setJogosGerados] = useState([]);

    //VAR QUE DEFINE O DESTINATARIO DE EMAIL
    const [destinatario, setdestinatario] = useState('');

    //ARRAY QUE ARMAZENA TODOS OS JOGOS GERADOS
    const [arrayPrincipal] = useState([]);


    //ARRAY QUE ARMAZENA TEMPORARIAMENTE CADA JOGO GERADO
    var arrayTemp = [];

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

            // GRAVA NO BANCO DE DADOS SQ LITE O JOGO  

        for (let jogo of arrayPrincipal) {
            Jogo.create({ nums: jogo })
                .then(id => console.log('Jogo created with id: ' + id))
                .catch(err => console.log(err))
        }

        /*
        OUTRA FORMA
         arrayPrincipal.map((item, key) => (
         Jogo.create({ nums: item })
            . then(id => console.log('Jogo created with id: ' + id))
         .catch(err => console.log(err)))
         )
         

    }
      
    


    //MOSTRA TODOS OS JOGOS ARMAZENADOS NO BANCO 
    {
        const printJogo = (jogo) => {
            console.log(`id:${jogo.id}, nums:${jogo.nums}`)
        }

        Jogo.all()
            .then(
                Jogos => Jogos.forEach(c => printJogo(c))
            )
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


    //INTERFACE DO USUARIO
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.titulo}>GERADOR DE JOGOS DA MEGA-SENA</Text>
            <Text style={styles.titulo}>Informe a quantidade de jogos</Text>

            <TextInput
                style={styles.textInputJogos}
                onChangeText={setQtdeJogos}
                value={String(qtdeJogos)}
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.button}
                //onPress={(e) => GerarJogos(qtdeJogos)}
                onPress={(e) => Jogar()}
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


        </ScrollView>

    );



};

export default Conferencia;

*/

