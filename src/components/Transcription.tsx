import { FC } from "react"
import { Phonetic } from "../models/Phonetic"

interface TranscriptionProprs{
    word: string
    phonetic: string
    phonetics: Phonetic[]

}

const Transcription: FC<TranscriptionProprs> = ({word, phonetic, phonetics}) => {

    var audio: HTMLAudioElement | null = null

    phonetics.map((phonetic) => {
        if(phonetic.audio){
            audio = new Audio(phonetic.audio)
        }
    })
    
    function start(){
        audio!.play()
    }
    
  return (
    <div className='transcription'>
          <div className='wordContainer'>
            <div className='word'>{word}</div>
            <div className='phonetic'>{phonetic}</div>
          </div>
          {audio ? <button onClick={start} className='playAudioBtn'><svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50"/>
            <path d="M73 49.5L39.25 64.6554L39.25 34.3446L73 49.5Z" fill="#A847F5"/>
            </svg>
        </button> : null}

        </div>
  )
}

export default Transcription