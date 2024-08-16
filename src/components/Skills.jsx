import { useRef, useState } from "react"
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Skills({skills, setSkills, showSkills, setShowSkills}){
    const skillsInput = useRef(null);
    const detail = useRef(null);
    const toggleButton = useRef(null);
    const tapButton = useRef(null);
    const [toggleState, setToggleState] = useState(true);

    function handleAdd(){
        let stringOfSkills = skillsInput.current.value;
        setSkills(stringOfSkills);
    }

    function toggle(){
        if(detail.current.style.display == 'none' || detail.current.style.display==""){
            detail.current.style.display = 'block';
            setToggleState(false);
        }
        else{
            detail.current.style.display = 'none';
            setToggleState(true);
        }
    }

    function tap(){
        if(showSkills){
            setShowSkills(false);
            tapButton.current.style.backgroundColor = "lightgrey";
            tapButton.current.style.justifyContent = "flex-start";
        }
        else{
            setShowSkills(true);
            tapButton.current.style.backgroundColor = "lightgreen";
            tapButton.current.style.justifyContent = "flex-end";
        }
    }

    return(
        <div className="card" >
            <div className="flexHorizontalNoWrap">
                <div>
                    <p className="h2">Skills</p>
                </div>
                <div className="flexHorizontalNoWrap" ref={toggleButton} onClick={toggle}>
                    { toggleState && <CiCircleChevDown className="drop"  /> }
                    { !(toggleState) && <CiCircleChevUp className="drop"  /> }
                </div>
            </div>
            <div className="education-content-sidebar">
            <form action="" ref={detail} className="detail"  >
                <div>
                    <input ref={skillsInput} type="text" name="skills" placeholder="Html, CSS, Js, React"
                    onChange={()=>handleAdd()}
                    />
                </div>
                <div className="button-group flex" >
                        <div className="toggle" ref={tapButton} onClick={tap}>
                            <div className="toggle-switch"></div>
                        </div>
                </div>
            </form>

            </div>
        </div>
    )
}