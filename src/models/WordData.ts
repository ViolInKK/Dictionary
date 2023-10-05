import { Meaning } from "./Meaning"
import { Phonetic } from "./Phonetic"

export interface WordData{
    word: string
    phonetic: string
    phonetics: Phonetic[]
    meanings: Meaning[]
    sourceUrls: string[]
}