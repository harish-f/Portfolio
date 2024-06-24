import { useEffect } from "react";
import { useState } from "react";
import jsonData from "@/data/data.json"
import SkillCard from "../SkillCard";

export default function Skills() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        setSkills(JSON.parse(JSON.stringify(jsonData)).skills)
    }, [])

    return (
        <div className="bg-gray-200 py-10">
            <p className="text-5xl text-center font-semibold mb-5 underline">
                Skills
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => <SkillCard image={skill.image} name={skill.name} />)}
            </div>
        </div>
    )
}