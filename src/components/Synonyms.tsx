import { FC } from "react"

interface SynonymsProps{
    synonyms: string[]
}

const Synonyms: FC<SynonymsProps> = ({synonyms}) => {
    return(
        <div className="synonyms">Synonyms
        {synonyms.map((synonym, index) => (<span key={index}>{synonym}</span>))}
        </div>
    )
}

export default Synonyms