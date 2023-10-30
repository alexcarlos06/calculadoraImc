# Calculadora de IMC em React Native

Este é um aplicativo de calculadora de Índice de Massa Corporal (IMC) desenvolvido com React Native. O IMC é uma medida que ajuda a avaliar a relação entre peso e altura de uma pessoa.

## Funcionalidades

- Permite que o usuário insira sua altura e peso.
- Calcula o IMC com base nos valores fornecidos.
- Exibe o resultado do IMC com uma mensagem correspondente.
- Possui um botão para reiniciar o cálculo.

## Como Usar

Certifique-se de ter o ambiente de desenvolvimento React Native configurado.

1. Navegue até o diretório do projeto:
    bash
        cd react-native-imc-calculator

2. Instale as dependências:
    bash
        npm install

3. Execute o aplicativo em um emulador ou dispositivo físico:
    bash
    npx react-native run-android
    # ou
    npx react-native run-ios

4. Use o aplicativo para calcular seu IMC.


Estrutura do Código
O código React Native está organizado da seguinte maneira:

O componente Form é responsável pela interface do usuário e lida com a entrada de dados e cálculos.

O componente ResultImc é responsável por exibir o resultado do IMC.
Aqui está uma explicação mais detalhada do código do componente Form:

    * height e weight são estados que armazenam a altura e o peso inseridos pelo usuário.
    * messageImc é um estado que exibe uma mensagem de orientação ou resultado.
    * imc é um estado que armazena o valor do IMC calculado.
    * textButton é um estado que controla o texto exibido no botão.
    * imcCalculator é uma função que calcula o IMC com base na altura e peso inseridos.
    * validationImc é uma função que valida os valores inseridos e atualiza o resultado do IMC.

Contribuições
Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para criar pull requests ou relatar problemas.

Licença
Este projeto está sob a licença MIT.
