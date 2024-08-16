import { MdCancelPresentation } from "react-icons/md";

export default function ListCertificates({certificates, setCertificates}){

    function removeCertificates(key){
        const nextCertificates = certificates.filter(c => c.id !== key);
        setCertificates(nextCertificates);
    }

    const listCertificates = certificates.map((c)=>{
        return(
            <li className="no-bullet-list sidebar-list-item" key={c.id}>
                <div className="h3 shortlistitem">{c.title} 
                </div>
                <div className="remove-button" onClick={()=> removeCertificates(c.id)}><MdCancelPresentation /></div>
            </li>
        )
    });

    return(
        <ul className="">
            {listCertificates}
        </ul>
    )
}
