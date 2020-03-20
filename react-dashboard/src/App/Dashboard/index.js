import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import CV from './CV';
import UserNotFound from './UserNotFound';
import { formattedName } from '../../utils';

import './styles.scss';

const Dashboard = () => {
  const [personalInfo, setPersonalInfo] = useState(undefined);
  const { user } = useParams();

  useEffect(() => {
    const fetchPersonalInfo = async() => {
      const response = await fetch(`http://localhost:8080/personal-info/${formattedName(user)}`);
      const data = await response.json();

      setPersonalInfo(data);
    };
    fetchPersonalInfo();
  }, []);
  return personalInfo ? personalInfo.name ? <main id="dashboard-container">
    <section id="side-bar">
      <ProfileInfo 
        name={personalInfo.name}
        nickname={personalInfo.nickname}
        username={personalInfo.username}
        age={personalInfo.age}
        birthdate={personalInfo.birthdate}
        origin={personalInfo.origin} 
      />
    </section>
    <section id="cv">
      <CV
        studies={personalInfo.studies}
        work={personalInfo.work}
        hobbies={personalInfo.hobbies}
      />
    </section>
    <section id="contacts">

    </section>
  </main> : <UserNotFound /> : null;
};

export default Dashboard;