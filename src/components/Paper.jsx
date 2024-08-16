import { forwardRef } from "react";

const Paper =  forwardRef(function Paper(
        {personal, 
        education, 
        skills, 
        experience, 
        projects, 
        certificates, 
        showEducation,
        showExperience,
        showSkills,
        showProjects,
        showCertificates},
        paperRef
    ) {

    const listEducation = education.map((ed)=>{
        return(
            <li className="no-bullet-list" style={{marginTop:"18px"}} key={ed.id}>
                <div className="flex">
                    <div className="h3 bold">{ed.university}</div>
                    <div>{ed.degree} in {ed.spec}, {ed.completedOn}</div>
                </div>
                <div style={{marginTop:"8px"}}>{ed.gradingSystem}: {ed.grade}</div>
            </li>
        )
    });

    const listExperience = experience.map((ex)=>{
        return(
            <li className="no-bullet-list flex" style={{marginTop:"18px"}} key={ex.id}>
                <div className="flexHorizontal">
                    <div className="h3 bold">{ex.company} |</div>
                    <div>{ex.role} |</div>
                    <div>{ex.from} -</div>
                    <div>{ex.to}</div>
                </div> 
                <div className="" style={{textAlign:"justify"}}>
                    {ex.desc}
                </div>
                
            </li>
        )
    });

    const listProjects = projects.map((p)=>{
        return(
            <li className="no-bullet-list flex" style={{marginTop:"18px"}} key={p.id}>
                <div className="flexHorizontal">
                    <div className="h3 bold">{p.title} |</div>
                    <div>{p.skills}</div>
                </div>
                <div className="" style={{textAlign:"justify"}}>
                    {p.description}
                </div>
                
            </li>
        )
    });

    const listCertificates = certificates.map((c)=>{
        return(
            <li className="no-bullet-list flex" style={{marginTop:"18px"}} key={c.id}>
                <div className="flexHorizontal">
                    <div className="h3 bold">{c.title}</div>
                    <div>by {c.by}</div>
                </div>
            </li>
        )
    });

    return (
        <main id="paper" className="paper" >
            <div id="resume"  ref={paperRef}>
                <div><p className="h1">{personal.name}</p></div>

                <div id="contact">
                    <div>{personal.phone} | </div>
                    <div><a href={"mailto:"+personal.email} target="_blank">{personal.email} | </a></div>
                    <div><a href={"https://"+personal.github} target="_blank">{personal.github}</a></div>
                </div>

                {showEducation && <div className="section">
                    <div><p className="h2"> EDUCATION</p></div>
                    <hr />
                    <ul>
                        {listEducation}
                    </ul>
                </div>}

                {showSkills && (
                <div className="section">
                    <div><p className="h2"> SKILLS</p></div>
                    <hr />
                    <div 
                    style={{
                        paddingLeft: "1rem", 
                        marginTop: "18px", 
                        display: "flex", 
                        flexWrap: "wrap", 
                    }}
                    >
                    {skills}
                    </div>
                </div>
                )}


                {showExperience && <div className="section">
                    <div><p className="h2"> EXPERIENCE</p></div>
                    <hr />
                    <ul>
                        {listExperience}
                    </ul>
                </div>}

                {showProjects && <div className="section">
                    <div><p className="h2"> PROJECTS</p></div>
                    <hr />
                    <ul>
                        {listProjects}
                    </ul>
                </div>}

                {showCertificates && <div className="section">
                    <div><p className="h2"> CERTIFICATIONS </p></div>
                    <hr />
                    <ul>
                        {listCertificates}
                    </ul>
                </div>}
            </div>
        </main>
    )
});

export default Paper;
