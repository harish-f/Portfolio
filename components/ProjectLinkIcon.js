export default function ProjectLinkIcon({ link, image }) {
        return (
            <a target="_blank" href={link}>
                <img className="rounded-full object-cover aspect-square w-14 mt-3" src={image} />
            </a>
        )
}