import { useRef, useState } from "react"
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

export default function Personal({personal, handlePersonalChange}){

    const detail = useRef(null);
    const toggleButton = useRef(null);
    const [toggleState, setToggleState] = useState(true);

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

    return(
        <div className="card">
            <div className="flexHorizontal">
                <div>
                    <p className="h2">Personal</p>
                </div>
                <div className="flexHorizontal" ref={toggleButton} onClick={toggle}>
                    { toggleState && <CiCircleChevDown className="drop"  /> }
                    { !(toggleState) && <CiCircleChevUp className="drop"  /> }
                </div>
            </div>
            <form action="" ref={detail} className="detail">
                <div>
                    <input type="text" name="name" value={personal.name} onChange={handlePersonalChange} />
                </div>
                <div>
                    <input type="email" name="email" value={personal.email} onChange={handlePersonalChange}/>
                </div>
                <div>
                    <input type="tel" name="phone" value={personal.phone} onChange={handlePersonalChange}/>
                </div>
                <div>
                    <input type="text" name="github" value={personal.github} onChange={handlePersonalChange}/>
                </div>
            </form>
        </div>
    )
}