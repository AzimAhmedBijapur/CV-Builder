import { MdCancelPresentation } from "react-icons/md";

export default function ListProjects({projects, setProjects}){

    function removeProjects(key){
        const nextProjects = projects.filter(p => p.id !== key);
        setProjects(nextProjects);
    }
    const listProjects = projects.map((p)=>{
        return(
            <li className="no-bullet-list sidebar-list-item" key={p.id}>
                <div className="h3 shortlistitem">{p.title} 
                </div>
                <div className="remove-button" onClick={()=> removeProjects(p.id)}><MdCancelPresentation /></div>
            </li>
        )
    });

    return(
        <ul className="">
            {listProjects}
        </ul>
    )
}