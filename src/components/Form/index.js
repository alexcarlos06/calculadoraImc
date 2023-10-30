import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'

import { ResultImc } from './ResultImc'

export function Form() {
   // Declaração de estados iniciais
   const [height, setHeight] = useState(null) // Altura
   const [weight, setWeight] = useState(null) // Peso
   const [messageImc, setMessageImc] = useState('Preencha o peso e altura') // Mensagem de estado
   const [imc, setImc] = useState(null) // Valor do IMC
   const [textButton, setTextButton] = useState('Calcular') // Texto do botão

   // Função para calcular o IMC
   function imcCalculator() {
       return setImc((weight / (height * height)).toFixed(2))
   }

   // Função para validar e atualizar o IMC
   function validationImc() {
       if (weight != null && height != null) {
           imcCalculator()
           setHeight(null) // Redefine a altura para nulo
           setWeight(null) // Redefine o peso para nulo
           setMessageImc('Seu IMC é igual: ')
           setTextButton('Calcular Novamente')
           return
       }
       setImc(null) // Redefine o IMC para nulo
       setTextButton('Calcular')
       setMessageImc('Preencha o peso e altura')
   }

   return (
       <View>
           <View>
               <Text>Altura</Text>
               <TextInput
                   onChangeText={setHeight}
                   placeholder='Ex. 1.75'
                   keyboardType='numeric'
                   value={height}
               />
               <Text>Peso</Text>
               <TextInput
                   onChangeText={setWeight}
                   placeholder='Ex. 75.365'
                   keyboardType='numeric'
                   value={weight}
               />
               <Button
                   title={textButton}
                   onPress={() => validationImc()}
               />
           </View>
           <ResultImc resultImc={imc} messageResultImc={messageImc} />
       </View>
   )
}
