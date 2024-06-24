export default function SkillCard({image, name}) {
    return (
        <div className="flex flex-col m-10 h-fit mx-auto">
            <img src={image} className="h-[15vh]"/>
            <p className="text-center font-medium text-lg">{name}</p>
        </div>
    )
}