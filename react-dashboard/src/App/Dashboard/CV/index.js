import React from 'react';
import './styles.scss';
import { capitalize } from '../../../utils';

const CV = ({ studies, work, hobbies }) => <div id="cv-container">
    <h2>Perfil de usuario</h2>
    {
      studies ? <div className="cv-section" id="studies-section">
        <h3>Estudios</h3>
        <p><strong>Universidad: </strong>{studies.university}</p>
        <p><strong>Carrera: </strong>{studies.career}</p>
        <p><strong>Estado: </strong>{studies.finished ? 'Finalizado' : 'En curso'}</p>
      </div> : null
    }
    {
      work ? <div className="cv-section" id="work-section">
        <h3>Empleo</h3>
        {
          work.map((job, idx) => <div key={idx} className="cv-subsection">
            <p><strong>Empresa: </strong>{job.place}</p>
            <p><strong>Posición: </strong>{job.position}</p>
            <p><strong>Inicio: </strong>{job.started}</p>
            <p><strong>Duración: </strong>{job.time}</p>
          </div>)
        }
      </div> : null
    }
    {
      hobbies ? <div className="cv-section" id="hobbies-section">
        <h3>Hobbies</h3>
        {
          hobbies.activities ? <div className="cv-subsection" id="activities-subsection">
            <h4>Actividades favoritas</h4>
            <ul>
              { hobbies.activities.map((activity, idx) => <li key={idx}>{activity}</li>) }
            </ul> 
          </div> : null
        }
        {
          hobbies.preferences ? <div className="cv-subsection" id="preferences-subsection">
            <h4>Gustos</h4>
            <div className="preference-container">
            {
              Object.entries(hobbies.preferences).map(([category, list], idx) => 
                <div key={idx} className='preference-col'>
                  <h5>{capitalize(category)}</h5>
                  <ul>
                    {list.map((li, idx) => <li key={idx}>{li}</li>)}
                  </ul>
                </div>)
            }
            </div>
            
          </div> : null
        }
      </div> : null
    }
  </div>;

export default CV;