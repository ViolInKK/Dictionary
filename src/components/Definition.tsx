import { FC } from "react"
import { Definition } from "../models/Definition"
import Synonyms from "./Synonyms"

interface DefinitionProps{
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
}

const Definition: FC<DefinitionProps> = ({partOfSpeech, definitions, synonyms}) => {

  return (
    <div className="definition">
      <div className="definitionPartOfSpeech">
        <span>{partOfSpeech}</span>
        <div className="line"></div>  
      </div>
      <ul>
        <span>Meaning</span>
        {definitions.map((definition, index) => (
          <li key={index}>{definition.definition}{definition.example ? <div className="example">"{definition.example}"</div> : null}</li>
        ))}
      </ul>
      {synonyms.length ? <Synonyms synonyms={synonyms} /> : null}
    </div>
  )
}

export default Definition