import { useEffect, useState } from "react";
import jsonData from "@/data/data.json"
import ProjectCard from "../ProjectCard";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(JSON.parse(JSON.stringify(jsonData)).projects);
    }, []);

    return (
        <div className="bg-gray-400 min-h-screen space-y-10 p-10">
            {projects.map((project, key) => (
                <ProjectCard project={project} key={key} index={key} />
            ))}
        </div>
    )
}