import { useRef } from "react";
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";

export default function AddEducation({education, setEducation, isReady, setReady, add, tapButton}){

    const university = useRef(null);
    const completedOn = useRef(null);
    const degree = useRef(null);
    const spec = useRef(null);
    const grade = useRef(null);
    const gradingSystem = useRef(null);
    
    function handleSave(){

        const nextEducation = education.slice();
        const key = education.length;

        const temp = {
            id: key+1,
            university:university.current.value,
            completedOn:completedOn.current.value,
            degree: degree.current.value,
            spec: spec.current.value,
            grade: grade.current.value,
            gradingSystem: gradingSystem.current.value
        }

        add.current.style.display= "block";
        tapButton.current.style.display= "flex";

        nextEducation.push(temp);
        setEducation(nextEducation);
        setReady(false);
    }

    function handleCancel(){
        add.current.style.display= "block";
        tapButton.current.style.display= "flex";
        setReady(false);
    }

    return(
            <form action="" >
                <div>
                    <input ref={university} type="text" name="university" placeholder="University of Mumbai"  />
                </div>
                <div>
                    <input ref={completedOn} type="text" name="completedOn" placeholder="May 2024"/>
                </div>
                <div>
                    <input ref={degree} type="text" name="degree" placeholder="Bachelor of Engineering" />
                </div>
                <div>
                    <input ref={spec} type="text" name="spec" placeholder="Computer Engineering" />
                </div>
                <div>
                    <input ref={grade} type="text" name="grade" placeholder="9.43" />
                </div>
                <div>
                    <input ref={gradingSystem} type="text" name="std" placeholder="CGPA" />
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