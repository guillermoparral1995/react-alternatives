import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formattedName } from '../../utils';
import Dashboard from '../Common/Dashboard';

const DashboardPage = () => {
  const [personalInfo, setPersonalInfo] = useState(undefined);
  const { user } = useParams();

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      const response = await fetch(
        `http://localhost:8082/personal-info/${formattedName(user)}`
      );
      const data = await response.json();

      setPersonalInfo(data);
    };
    fetchPersonalInfo();
  }, [user]);

  return <Dashboard personalInfo={personalInfo} showContacts={true} />;
}

export default DashboardPage;