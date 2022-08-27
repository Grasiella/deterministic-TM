export type Operacao = [leitura: string, escrita: string, lado: string, estado: string]

export interface Maquina {
    estados: string[],
    alfabeto: string[],
    branco: string,
    transicoes: Record<string, Operacao[]>,
    aceitacao: string,
    palavra: string
}
