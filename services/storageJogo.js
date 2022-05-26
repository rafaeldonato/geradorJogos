import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import Jogo from './Jogo';

const printJogo = (jogo) => {
  console.log(`id:${jogo.id}, nums:${jogo.nums}`)
}

export default function storageJogo(id, numeros) {

  //create
  Jogo.create( {nums: numeros} )
  .then( id => console.log('Jogo created with id: '+ id) )
  .catch( err => console.log(err) )

  //find id
  Jogo.find(id) 
  .then( jogo => printJogo(jogo) )
  .catch( err => console.log(err) )

  //find numeros
  Jogo.findBynums( numeros ) 
    .then( Jogos => console.log(Jogos) )
    .catch( err => console.log(err) )

  //update
  Jogo.update( id, {nums: numeros} )
    .then( updated => console.log('Jogos updated: '+ updated) )
    .catch( err => console.log(err) )
  
  //all
  Jogo.all()
    .then( 
      Jogos => Jogos.forEach( c => printJogo(c) )
    )

  //delete
  Jogo.remove(id)
    .then( updated => console.log('Jogos removed: '+ updated) )
    .catch( err => console.log(err) )
  
  
}