# Máquina de Turing Determinística 

> Sistema para estruturar uma Máquina de Turing determinística de uma fita e reconhecer palavras.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você tem a versão mais recente instalada de `NodeJS`
* Você tem uma máquina `Windows / Linux / Mac`.

## 🚀 Instalando as Dependências

Para começar a utilizar a Máquina, siga estas etapas:

Abra o terminal e realize o Git Clone com o seguinte comando
```
git clone https://github.com/Grasiella/deterministic-TM.git
```
Esse comando criará um diretório chamado `deterministic-TM`

Ainda no terminal, acesse o diretório e execute o comando
```
yarn
```

Para compilar, use o comando
```
yarn build
```

Para executar o programa, use
```
yarn start
```

## ☕ Estruturando sua Máquina 

Para usar o projeto, siga estas etapas:


No diretório `deterministic-TM` haverá um diretório chamado `src`,
dentro dele estarão todos os arquivos que fazem o sistema funcionar.

No arquivo `entrada.ts` você irá estruturar sua Máquina de Turing no seguinte formato:

```
export const maquina: Maquina = {
    // liste todos os estados possíveis da máquina
    estados: ["q0", "q1", "q2", "q3"],
    
    // liste todos o alfabeto (todos os símbolos que podem ser computados)
    alfabeto: ["a", "b"],
    
    // especifique o símbolo do branco (espaço vazio da fita)
    branco: "_",
    
    // defina todas as transições possíveis neste Array de transições
    transicoes:{
        // "estado": [["leitura da fita", "escrita na fita", "direção do cabeçote", "estado subsequente"]]
        "q0": [["a", "A", "D", "q1"],
               ["B", "B", "D", "qACEITA"]],
        "q1": [["a", "a", "D", "q1"],
               ["b", "b", "D", "q1"],
               ["B", "B", "E", "q2"],
               ["_", "_", "E", "q2"]],
        "q2": [["b", "B", "E", "q3"]],
        "q3": [["a", "a", "E", "q3"],
               ["b", "b", "E", "q3"],
               ["A", "A", "D", "q0"]]
    },
    
    // especifique o estado de aceitação da máquina
    aceitacao: "qACEITA",
    
    // palavra inicial para computação
    palavra: "aabb"
}
```
A saída do programa será todas as transições que a máquina fizer e a frase <strong>Palavra aceita!</strong> caso seja aceita,
e a frase <strong>Palavra rejeitada!</strong> caso não seja possível computar tal palavra na máquina.


<h3>Tenha um bom uso! ✨<h3> 

