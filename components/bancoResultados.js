export default function bancoResultados() {
    return (
        function carregarResultados() {

            const arrayJogo = text.split(',');

            let base = [
                "	1	11/03/1996	41	5	4	52	30	33	",
                "	2	18/03/1996	9	39	37	49	43	41	",
                "	3	25/03/1996	36	30	10	11	29	47	",
                "	4	01/04/1996	6	59	42	27	1	5	",
                "	5	08/04/1996	1	19	46	6	16	2	",
                "	6	15/04/1996	19	40	7	13	22	47	",
                "	7	22/04/1996	56	38	21	20	3	5	",
                "	8	29/04/1996	53	17	38	4	47	37	",
                "	9	06/05/1996	55	43	56	54	8	60	",
                "	10	13/05/1996	25	4	18	57	21	38	",
            ];
            
            for (let jogo of base) {
                let concurso = jogo[1]
                let date = jogo[2]
                let dezenas = []

                for (let index = 3; index <= 9; index++) {
                    if (index == 9) {
                        dezenas += arrayJogo[index]
                        break
                    }
                    dezenas += arrayJogo[index] + ",";
                }

                console.log(concurso),
                console.log(date),
                console.log(dezenas)
            }

        }
    )

}