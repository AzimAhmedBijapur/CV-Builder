import { useRef, useState } from "react"
import AddCertificates from "./AddCertificates";
import ListCertificates from "./ListCertificates";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";


export default function Certificates({certificates, setCertificates, showCertificates, setShowCertificates}){

    const [isReady, setReady] = useState(false);
    const detail = useRef(null);
    const toggleButton = useRef(null);
    const tapButton = useRef(null);
    const [toggleState, setToggleState] = useState(true);
    let add = useRef(null);
    let content;

    if(isReady){
        content = < AddCertificates
            certificates={certificates}
            add={add}
            isReady = {isReady}
            setReady = {setReady}
            setCertificates = {setCertificates}  
            tapButton={tapButton}
        />
    }
    else{
        content = <ListCertificates
        certificates={certificates} 
        setCertificates={setCertificates}
        />
    }

    function handleAdd(){
        setReady(true);
        add.current.style.display = "none";
        tapButton.current.style.display = "none";
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
        if(showCertificates){
            setShowCertificates(false);
            tapButton.current.style.backgroundColor = "lightgrey";
            tapButton.current.style.justifyContent = "flex-start";
        }
        else{
            setShowCertificates(true);
            tapButton.current.style.backgroundColor = "lightgreen";
            tapButton.current.style.justifyContent = "flex-end";
        }
    }

    return(
        <div className="card" >
            <div className="flexHorizontalNoWrap">
                <div>
                    <p className="h2">Certificates</p>
                </div>
                <div className="flexHorizontalNoWrap" ref={toggleButton} onClick={toggle}>
                    { toggleState && <CiCircleChevDown className="drop"  /> }
                    { !(toggleState) && <CiCircleChevUp className="drop"  /> }
                </div>
            </div>
            <div className="detail" ref={detail} >
                {content}
                <div className="button-group flex" >
                        <div className="toggle" ref={tapButton} onClick={tap}>
                            <div className="toggle-switch"></div>
                        </div>
                        <button className="add" ref={add} onClick={handleAdd} ><IoIosAddCircleOutline /></button>
                </div>
            </div>
        </div>
    )
}