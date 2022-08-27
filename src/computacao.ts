import { maquina } from "./entrada"
import { Maquina } from "./types"

const estados = maquina.estados
const alfabeto = maquina.alfabeto
const branco = maquina.branco
const transicoes = maquina.transicoes
const aceitacao = maquina.aceitacao
const palavra = maquina.palavra
let fita = palavra.split("")
fita.push(branco)
let check = true
let loop = true

const computar = () => {
    let estado = estados[0]
    let cabecote = 0
    

    while (loop) {
        console.log("computando " + fita[cabecote] + " no estado " + estado)
        console.log("posição do cabeçalho - " + cabecote)
        console.log("fita - " + fita)
        console.log("transicoes -", transicoes[estado])
        console.log("\n")

        transicoes[estado].forEach(element => {
            if (element[0] == fita[cabecote] && check) {
                fita[cabecote] = element[1]
                cabecote = element[2] == "D" ? (cabecote + 1) : (cabecote == 0 ? 0 : cabecote - 1)
                if ( element[3] == aceitacao ) {
                    console.log("Palavra aceita!")
                    loop = false
                } else {
                    estado = element[3]
                }
                check = false
            }
        });
        if (check) {
            console.log("Palavra rejeitada!")
            break
        }
        check = true
    }
}

// checando os símbolos da palavra inicial,
// caso algum não pertença ao alfabeto, não ocorre a computação

for (var i = 0; i < palavra.length; i++){
    if (!alfabeto.includes(palavra[i])) {
        if (palavra[i] != maquina.branco) {
            console.log(palavra[i] + " não pertence ao alfabeto da linguagem!")
            check = false
            break
        }
    }
}

if (check) {
    computar()
}

