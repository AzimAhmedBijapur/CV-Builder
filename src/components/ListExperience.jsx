import { MdCancelPresentation } from "react-icons/md";
import AddExperience from "./AddExperience";

export default function ListExperience({experience, setExperience, isReady, setReady, add, tapButton}){

    function removeExperience(key){
        const nextExperience = experience.filter(ed => ed.id !== key);
        setExperience(nextExperience);
    }
    const listExperience = experience.map((ed)=>{
        return(
            <li className="no-bullet-list sidebar-list-item" key={ed.id}>
                <div className="h3 shortlistitem">{ed.role} 
                </div>
                <div className="remove-button" onClick={()=> removeExperience(ed.id)}><MdCancelPresentation /></div>
            </li>
        )
    });

    return(
        <ul className="">
            {listExperience}
        </ul>
    )
}