import React, { useState } from 'react'
import { 
    TextInput, 
    View, 
    Text, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
 } from 'react-native'

import { ResultImc } from './ResultImc'
import styles from './style'

export function Form() {
   // Declaração de estados iniciais
   const [height, setHeight] = useState(null) // Altura
   const [weight, setWeight] = useState(null) // Peso
   const [messageImc, setMessageImc] = useState('Preencha o peso e altura') // Mensagem de estado
   const [imc, setImc] = useState(null) // Valor do IMC
   const [textButton, setTextButton] = useState('Calcular') // Texto do botão
   const [errorMessageHeight, setErrorMessageHeight] = useState(null)
   const [errorMessageWeight, setErrorMessageWeight] = useState(null) 

   function verificationImc(){
    if(height == null){
        Vibration.vibrate();
        setErrorMessageHeight('campo obrigatório*')
    } if(weight == null){
        Vibration.vibrate();
        setErrorMessageWeight('campo obrigatório*')

    }
   }

   // Função para calcular o IMC
   function imcCalculator() {
       let formatedWeight = weight.replace(',', '.')
       let formatedHeight = height.replace(',', '.')
       return setImc((formatedWeight / (formatedHeight * formatedHeight)).toFixed(2))
   }

   // Função para validar e atualizar o IMC
   function validationImc() {
       if (weight != null && height != null) {
           imcCalculator()
           setHeight(null) // Redefine a altura para nulo
           setWeight(null) // Redefine o peso para nulo
           setMessageImc('Seu IMC é igual: ')
           setTextButton('Calcular Novamente')
           setErrorMessageHeight(null)
           setErrorMessageWeight(null)
           Keyboard.dismiss()
       }
       else{
        setErrorMessageHeight(null)
        setErrorMessageWeight(null)
        setImc(null) // Redefine o IMC para nulo      
        verificationImc()
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura')
       }       
   }

   return (
           <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
               <Text style={styles.formLabel}>Altura</Text>
               <Text style={styles.errorMessage}>{errorMessageHeight}</Text>
               <TextInput
                   style={styles.input}
                   onChangeText={setHeight}
                   placeholder='Ex. 1.75'
                   keyboardType='numeric'
                   value={height}
               />
               <Text style={styles.formLabel}>Peso</Text>
               <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
               <TextInput
                   style={styles.input}
                   onChangeText={setWeight}
                   placeholder='Ex. 75.365'
                   keyboardType='numeric'
                   value={weight}
               />
                <TouchableOpacity
                   style={styles.buttonCalculator}
                   onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity> 
            </Pressable>
            :  
            <View style={styles.exibitionResultImc}>
                <ResultImc resultImc={imc} messageResultImc={messageImc} />
                <TouchableOpacity
                   style={styles.buttonCalculator}
                   onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity> 
            </View>
           }
           </View>
   )
}
