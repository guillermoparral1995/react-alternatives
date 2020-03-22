<script>
  import { capitalize } from '../../../utils';
  import './styles.scss';

  export let studies, work, hobbies; 
</script>

<div id="cv-container">
    <h2>Perfil de usuario</h2>
    {#if studies}
      <div class="cv-section" id="studies-section">
        <h3>Estudios</h3>
        <p><strong>Universidad: </strong>{studies.university}</p>
        <p><strong>Carrera: </strong>{studies.career}</p>
        <p><strong>Estado: </strong>{studies.finished ? 'Finalizado' : 'En curso'}</p>
      </div>
    {/if}
    {#if work}
      <div class="cv-section" id="work-section">
        <h3>Empleo</h3>
        {#each work as job}
          <div class="cv-subsection">
            <p><strong>Empresa: </strong>{job.place}</p>
            <p><strong>Posición: </strong>{job.position}</p>
            <p><strong>Inicio: </strong>{job.started}</p>
            <p><strong>Duración: </strong>{job.time}</p>
          </div>
        {/each}
      </div>
    {/if}
    {#if hobbies}
      <div class="cv-section" id="hobbies-section">
        <h3>Hobbies</h3>
        {#if hobbies.activities}
          <div class="cv-subsection" id="activities-subsection">
            <h4>Actividades favoritas</h4>
            <ul>
              {#each hobbies.activities as activity}
                <li>{activity}</li>
              {/each}
            </ul>
          </div>
        {/if}
        {#if hobbies.preferences}
          <div class="cv-subsection" id="preferences-subsection">
            <h4>Gustos</h4>
            <div class="preference-container">
              {#each Object.entries(hobbies.preferences) as [category, list]}
                <div class='preference-col'>
                  <p class='preference-title'>{capitalize(category)}</p>
                  <ul>
                    {#each list as listElem}
                      <li>{listElem}</li>
                    {/each}
                  </ul>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>