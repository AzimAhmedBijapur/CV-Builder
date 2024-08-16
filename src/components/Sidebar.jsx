import Personal from "./Personal"
import Education from "./Education"
import Skills from "./Skills"
import Experience from "./Experience"
import Projects from "./Projects"
import Certificates from "./Certificates"

export default function Sidebar(
    {
        // states
        personal, 
        education, 
        skills,
        experience,
        projects,
        certificates,
        // functions
        showEducation,
        showExperience,
        showSkills,
        showProjects,
        showCertificates,
        handlePersonalChange, 
        setEducation,
        setSkills,
        setExperience,
        setProjects,
        setCertificates,
        setShowEducation,
        setShowCertificates,
        setShowExperience,
        setShowSkills,
        setShowProjects
    }) {
    return(
        <aside>
            <Personal 
                personal={personal} 
                handlePersonalChange={handlePersonalChange} 
            />
            <Education 
                education={education} 
                setEducation={setEducation} 
                setShowEducation={setShowEducation} 
                showEducation={showEducation} 
            />
            <Skills 
                skills={skills} 
                setSkills={setSkills} 
                showSkills={showSkills} 
                setShowSkills={setShowSkills}
            />
            <Experience 
                experience={experience} 
                setExperience={setExperience} 
                showExperience={showExperience} 
                setShowExperience={setShowExperience} 
            />
            <Projects 
                projects={projects} 
                setProjects={setProjects} 
                showProjects={showProjects} 
                setShowProjects={setShowProjects} 
            />
            <Certificates 
                certificates={certificates} 
                setCertificates={setCertificates} 
                showCertificates={showCertificates} 
                setShowCertificates={setShowCertificates} 
            />
        </aside>
    )
}