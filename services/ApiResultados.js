import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default ApiResultados = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getResultados = async () => {
     try {
      const response = await fetch('https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest');
      const json = await response.json();
      setData(json.resultados);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getResultados();
  }, []);

  return (
    <View style={{ flex: 2, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.concurso}, {item.data}</Text>
          )}
        />
      )}
    </View>
  );
};

