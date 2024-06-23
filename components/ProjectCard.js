import ProjectLinkIcon from "./ProjectLinkIcon";

export default function ProjectCard({ project, index }) {
  return (
    <div className="grid lg:grid-cols-2 rounded-3xl bg-gray-200 p-5 xl:p-8 gap-x-2 mx-auto xl:w-3/4 xl:my-[4%]">
      <img src={project.imageLink} className="rounded-xl my-auto" />
      <div className="flex flex-col h-full justify-center px-3 py-5 xl:p-5">
        <p className="text-2xl mb-3">{project.title}</p>
        <p className="text-sm md:text-base xl:text-lg">{project.description}</p>
        <div className="flex flex-row justify-start space-x-5">
          {project.links.map((link) => ProjectLinkIcon({link:link.redirect, image:link.icon}) )}
        </div>
      </div>
    </div>
  )
}