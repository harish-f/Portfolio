export default function AchievementTag({ tag: {award, colour, shadow} }) {
    return (
        <p className={`bg-[${colour}] font-bold text-white h-min px-2 rounded-full absolute bottom-3 right-3`}>
            {award}
        </p>
    )
}