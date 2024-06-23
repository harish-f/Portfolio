import { useEffect } from "react"
import { useState } from "react"

export default function AchievementTag({ tag: { award, colour, shadow } }) {
    if (award === "") {
        return (<></>)
    } else {
        return (
            <p
                className={"font-bold text-white h-min px-3 py-1 rounded-full absolute bottom-3 right-3"}
                style={{ backgroundColor: colour }}
            >
                {award}
            </p>
        )
    }
}