import jsonData from "@/data/data.json"
import { useEffect, useState } from "react"

export default function Intro() {
    const [profileInfo, setProfileInfo] = useState({})
    useEffect(() => {
        setProfileInfo(JSON.parse(JSON.stringify(jsonData.intro)))
    }, [])

    return (
        <div className="min-h-screen bg-gray-500 pt-0 md:pt-[120px] lg:pt-0 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row px-6 sm:px-10 xl:w-3/4 px-auto">
                <img
                    className="aspect-square object-cover rounded-xl m-auto lg:mr-10 w-3/4 sm:w-1/2 xl:w-1/3"
                    src={profileInfo.imageLink}
                ></img>
                <div className="lg:my-auto mt-5 space-y-4">
                    <p className="text-4xl font-semibold">
                        {profileInfo.name}
                    </p>
                    <p className="text-sm sm:text-base lg:text-xl">
                        {profileInfo.description}
                    </p>
                </div>
            </div>
        </div>
    )
}