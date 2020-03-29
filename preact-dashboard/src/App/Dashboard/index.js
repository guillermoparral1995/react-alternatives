import React, { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { formattedName } from "../../utils";
import Loading from "../Common/Loading";
import ErrorPage from "../Common/ErrorPage";
import "./styles.scss";

const ProfileInfo = lazy(() => import(/* webpackChunkName: "ProfileInfo" */ "./ProfileInfo"));
const CV = lazy(() => import(/* webpackChunkName: "CV" */ "./CV"));
const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ "./Contact"));

const Dashboard = () => {
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
  return personalInfo ? (
    personalInfo.name ? (
      <Suspense fallback={<Loading />}>
        <main id="dashboard-container">
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
            <h3>Contactos</h3>
            {personalInfo.contacts.map((contact, idx) => (
              <Contact key={idx} {...contact}></Contact>
            ))}
          </section>
        </main>
      </Suspense>
    ) : (
      <ErrorPage message={"Ups! No pudimos encontrar este usuario"} />
    )
  ) : (
    <Loading />
  );
};

export default Dashboard;
