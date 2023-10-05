import { FC } from "react"

interface SourceProps {
    sourceUrls: string[]
}

const Source: FC<SourceProps> = ({sourceUrls}) => {
    return (
        <div className="source">
            Source
            {sourceUrls.map((sourceUrl, index) => (
                <a key={index} href={sourceUrl} target="_blank">{sourceUrl}</a>
            ))}

        </div>
    )
}

export default Source