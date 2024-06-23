import { useEffect } from "react";
import { useState } from "react";
import jsonData from "@/data/data.json"

export default function Skills() {
    const [skills, setSkills] = useState()

    useEffect(() => {
        setSkills(JSON.parse(JSON.stringify(jsonData)))
    }, [])

    return (
        <div>
            {balls}
        </div>
    )
}