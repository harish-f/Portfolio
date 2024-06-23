import AchievementTag from "./AchievementTag";

export default function AchievementCard({achievement}) {
    return (
        <div className=" bg-gray-200 w-full sm:w-2/3 lg:w-3/8 h-[15vh] flex flex-row rounded-3xl mb-4 md:mb-10 p-4 gap-x-4 gap-y-4 relative mx-auto shadow-lg">
            <img src={achievement.image} className="rounded-2xl"/>
            <p className="my-auto text-sm sm:text-base md:text-lg">{achievement.title}</p>
            <AchievementTag tag={achievement.tag} />
        </div>
    )
}