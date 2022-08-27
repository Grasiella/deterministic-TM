import { Maquina } from "./types";

export const maquina: Maquina = {
    estados: ["q0", "q1", "q2", "q3"],
    alfabeto: ["a", "b"],
    branco: "_",
    transicoes:{
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
    aceitacao: "qACEITA",
    palavra: "aabb"
}