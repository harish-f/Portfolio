import { useEffect } from "react"
import { useState } from "react"

export default function AchievementTag({ tag: {award, colour, shadow} }) {
    const [tagClass, setTagClass] = useState("")

    useEffect( () => {
        setTagClass(`bg-[${colour}] font-bold text-white h-min px-2 rounded-full absolute bottom-3 right-3`)
    }, [])

    console.log(tagClass)
    return (
        <p className={tagClass}>
            {award}
        </p>
    )
}