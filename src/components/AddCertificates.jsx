import { useRef } from "react";
import { BiSave } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";

export default function AddCertificates({certificates, setCertificates, isReady, setReady, add, tapButton}){

    const title = useRef(null);
    const by = useRef(null);
    
    function handleSave(){

        const nextCertificates = certificates.slice();
        const key = certificates.length;

        const temp = {
            id: key+1,
            title:title.current.value,
            by:by.current.value,
        }

        add.current.style.display= "block";
        tapButton.current.style.display= "flex";

        nextCertificates.push(temp);
        setCertificates(nextCertificates);
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
                    <input ref={title} type="text" name="title" placeholder="Azure Fundamentals"  />
                </div>
                <div>
                    <input ref={by} type="text" name="by" placeholder="Microsoft"  />
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

