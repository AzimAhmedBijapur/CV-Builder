import { useRef } from "react";
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";

export default function AddExperience({experience,setExperience, isReady, setReady, add, tapButton}){

    const role = useRef(null);
    const company = useRef(null);
    const from = useRef(null);
    const to = useRef(null);
    const desc = useRef(null);
    
    function handleSave(){

        const nextExperience = experience.slice();
        const key = experience.length;

        const temp = {
            id: key+1,
            role:role.current.value,
            company:company.current.value,
            from:from.current.value,
            to:to.current.value,
            desc:desc.current.value,
        }

        add.current.style.display= "block";
        tapButton.current.style.display= "flex";

        nextExperience.push(temp);
        setExperience(nextExperience);
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
                    <input ref={role} type="text" name="role" placeholder="Front End Developer"  />
                </div>
                <div>
                    <input ref={company} type="text" name="company" placeholder="Company name"  />
                </div>
                <div>
                    <input ref={from} type="text" name="from" placeholder="Start date"  />
                </div>
                <div>
                    <input ref={to} type="text" name="to" placeholder="End Date"  />
                </div>
                <div>
                    <textarea ref={desc} type="text" name="desc" placeholder="Decribe your work..."  />
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

