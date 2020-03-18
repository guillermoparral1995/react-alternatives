import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const { user } = useParams();

  useEffect(() => {
    const fetchPersonalInfo = async() => {
      const response = await fetch(`http://localhost:8080/personal-info/${user}`);
      const data = await response.json();

      setPersonalInfo(data);
    };
    fetchPersonalInfo();
  }, []);
  
  return <main>
    <section id="side-bar">
      <SideBar 
        name={personalInfo.name}
        nickname={personalInfo.nickname}
        age={personalInfo.age}
        birthdate={personalInfo.birthdate}
        origin={personalInfo.origin} 
      />
    </section>
  </main>;
};

export default Dashboard;