import '../App.scss'
import Definition from '../components/Definition'
import Header from '../components/Header'
import { useFetchDefinitionQuery } from '../features/dictionary/dictionaryApiSlice'
import WordInput from '../components/WordInput'
import Transcription from '../components/Transcription'
import { useState } from 'react'
import Loader from '../components/Loader'
import Source from '../components/Source'
import { useAppSelector } from '../app/hooks'

function App() {

  const [fetchWord, setFetchWord] = useState('dictionary')
  const {data, isFetching} = useFetchDefinitionQuery(fetchWord)

  const isLightTheme = useAppSelector(state => state.styleSettings.isThemeLight)

  return (
    <div className='App' id={isLightTheme ? `light` : `dark`}>
        {isFetching ? 
        <Loader/> : 
        <div className='contentContainer'>
        <Header/>
        <WordInput setFetchWord={setFetchWord}/>
        <Transcription word={data![0].word} phonetic={data![0].phonetic} phonetics={data![0].phonetics}/>
        <div className='definitionContainer'>
          {data![0].meanings.map((meaning, index) => (
            <Definition key={index} partOfSpeech={meaning.partOfSpeech} definitions={meaning.definitions} synonyms={meaning.synonyms}></Definition>
          ))}
        </div>
        {data![0].sourceUrls.length ? <Source sourceUrls={data![0].sourceUrls}/> : null}
        </div>
      }
    </div>
  )
}

export default App


