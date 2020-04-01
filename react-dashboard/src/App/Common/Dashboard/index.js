import React, { useState, useEffect, Suspense, lazy } from "react";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import { withI18n } from "../../I18n";
import "./styles.scss";

const ProfileInfo = lazy(() => import(/* webpackChunkName: "ProfileInfo" */ "./ProfileInfo"));
const CV = lazy(() => import(/* webpackChunkName: "CV" */ "./CV"));
const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ "./Contact"));

const Dashboard = ({ personalInfo, showContacts, i18n: { getText, lang } }) => {
  return personalInfo ? (
    personalInfo.name ? (
      <Suspense fallback={<Loading />}>
        <main className="dashboard-container">
          <section className="side-bar">
            <ProfileInfo
              name={personalInfo.name}
              nickname={personalInfo.nickname}
              username={personalInfo.username}
              age={personalInfo.age}
              birthdate={personalInfo.birthdate}
              origin={personalInfo.origin}
              showReturn={showContacts}
            />
          </section>
          <section className="cv">
            <CV
              studies={personalInfo.studies}
              work={personalInfo.work}
              hobbies={personalInfo.hobbies}
            />
          </section>
          {
            showContacts ? <section className="contacts">
              <h2>{getText('dashboard_contacts_title', lang)}</h2>
              {personalInfo.contacts.length ? personalInfo.contacts.map((contact, idx) => (
                <Contact key={idx} {...contact}></Contact>
              )) : <p>{getText('dashboard_contacts_empty', lang)}</p>}
            </section> : null
          }
          
        </main>
      </Suspense>
    ) : (
      showContacts ? <ErrorPage message={getText('dashboard_error_404', lang)} /> : <Loading />
    )
  ) : (
    <Loading />
  );
};

export default withI18n(Dashboard);
