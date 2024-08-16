import { useEffect, useRef, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Paper from './components/Paper'
import { useReactToPrint } from 'react-to-print';
import { IoMdPrint } from "react-icons/io";

function App() {

  const [personal,setPersonal] = useState({
    name:'Khabib Nurmagomedov',
    email:'khabib@gmail.com',
    phone:'9433813947',
    github:'github.com/Khabib'
  });

  const [education,setEducation] = useState([]);

  const [experience,setExperience] = useState([]);

  const [projects,setProjects] = useState([]);

  const [skills, setSkills] = useState('');

  const [certificates, setCertificates] = useState([]);

  const [showEducation, setShowEducation] = useState(true);

  const [showExperience, setShowExperience] = useState(true);

  const [showSkills, setShowSkills] = useState(true);

  const [showProjects, setShowProjects] = useState(true);

  const [showCertificates, setShowCertificates] = useState(true);

  const paperRef = useRef(null);

  const handlePersonalChange = (e)=>{
    setPersonal({...personal, [e.target.name]: e.target.value})
  }

  const props = {
    personal,
    education,
    skills,
    experience,
    projects,
    certificates,
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
  }

    const handlePrint = useReactToPrint({
      content: () => paperRef.current,
    });
  

  return (
    <div className='container'>

      <Sidebar {...props} />
      <div title='Print to pdf' id='print' onClick={handlePrint}><IoMdPrint /></div>
      <Paper 
        ref={paperRef}
        personal={personal} 
        education={education} 
        skills={skills} 
        experience={experience} 
        projects={projects} 
        certificates={certificates}
        showEducation={showEducation}
        showExperience={showExperience}
        showSkills={showSkills}
        showProjects={showProjects}
        showCertificates={showCertificates}
      />
    </div>
  )
}

export default App

