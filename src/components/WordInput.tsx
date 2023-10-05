import { FC, useState } from "react"

interface WordInputProps{
    setFetchWord: (fetchWord: string) => void
}

const WordInput: FC<WordInputProps> = ({setFetchWord}) => {

    const [word, setWord] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(word === ''){
          return
        }
        setFetchWord(word)
        setWord('')
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setWord(e.target.value.trimStart())
    }

  return (
    <form onSubmit={handleSubmit}>
        <input value={word} onChange={handleChange}></input>
    </form>
  )
}

export default WordInput
