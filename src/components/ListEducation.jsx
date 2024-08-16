import { MdCancelPresentation } from "react-icons/md";

export default function ListEducation({education, setEducation}){

    function removeEducation(key){
        const nextEducation = education.filter(ed => ed.id !== key);
        setEducation(nextEducation);
    }
    const listEducation = education.map((ed)=>{
        return(
            <li className="no-bullet-list sidebar-list-item" key={ed.id}>
                <div className="h3 shortlistitem">{ed.university} 
                </div>
                <div className="remove-button" onClick={()=> removeEducation(ed.id)}><MdCancelPresentation /></div>
            </li>
        )
    });

    return(
        <ul className="">
            {listEducation}
        </ul>
    )
}