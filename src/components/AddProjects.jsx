import { useRef } from "react";
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";

export default function AddProjects({projects, setProjects, isReady, setReady, add, tapButton}){

    const title = useRef(null);
    const skills = useRef(null);
    const description = useRef(null);
    
    function handleSave(){

        const nextProjects = projects.slice();
        const key = projects.length;

        const temp = {
            id: key+1,
            title:title.current.value,
            skills:skills.current.value,
            description:description.current.value,
        }

        add.current.style.display= "block";
        tapButton.current.style.display= "flex";

        nextProjects.push(temp);
        setProjects(nextProjects);
        setReady(false);
    }

    function handleCancel(){
        tapButton.current.style.display= "flex";
        add.current.style.display= "block";
        setReady(false);
    }

    return(
            <form action="" >
                <div>
                    <input ref={title} type="text" name="title" placeholder="Exercise Tracker"  />
                </div>
                <div>
                    <input ref={skills} type="text" name="skills" placeholder="React.js, Next.js"  />
                </div>
                <div>
                    <textarea ref={description} type="text" name="description" placeholder="Decribe your work..."  />
                </div>

                <div className="button-group">
                    <button className="save" onClick={(e)=>{
                        e.preventDefault();
                        handleSave()}}><BiSave /></button>
                    <button className="cancel" onClick={(e)=>{
                        e.preventDefault();
                        handleCancel()}}><MdCancelPresentation /></button>
                </div>
                
            </form>
    )
}

