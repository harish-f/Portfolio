import { useState } from "react"
import { useEffect } from "react"
import jsonData from "@/data/data.json"
import AchievementCard from "../AchievementCard"

export default function Achievements() {
    const [achievementsList, setAchievementsList] = useState([])

    useEffect(() => {
        setAchievementsList(JSON.parse(JSON.stringify(jsonData)).achievements)
    }, [])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10 py-32 bg-gray-500">
            {
                achievementsList.map((achievement) => AchievementCard({achievement}))
            }
        </div>
    )
}