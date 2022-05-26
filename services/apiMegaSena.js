const getLastMega = () => {
    return fetch('https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest')
      .then((response) => response.json())
      .then((json) => {
        return json.resultado;
      })
      .catch((error) => {
        console.error(error);
      });
}

export default getLastMega;


