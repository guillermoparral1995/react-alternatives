<script>
  import { capitalize } from '../../../../utils';
  import { getContext } from 'svelte';
  import './styles.scss';

  export let studies, work, hobbies;

  const getText = getContext('getText');
  const lang = getContext('lang');
</script>

<div class="cv-container">
  <h2>{getText("dashboard_cv_title", $lang)}</h2>
  {#if studies}
    <div class="cv-section studies-section">
      <h3>{getText("dashboard_cv_studies_title", $lang)}</h3>
      <p>
        <strong>{getText("dashboard_cv_studies_university", $lang)}</strong>
        {studies.university || ''}
      </p>
      <p>
        <strong>{getText("dashboard_cv_studies_career", $lang)}</strong>
        {studies.career || ''}
      </p>
      <p>
        <strong>{getText("dashboard_cv_studies_finished", $lang)}</strong>
        {#if studies.finished}
          {getText("dashboard_cv_studies_finished-true", $lang)}
        {:else}
          {getText("dashboard_cv_studies_finished-false", $lang)}
        {/if}
      </p>
    </div>
  {/if}
  {#if work}
    <div class="cv-section work-section">
      <h3>{getText("dashboard_cv_work_title", $lang)}</h3>
      {#each work as job}
        <div class="cv-subsection">
          <p>
            <strong>{getText("dashboard_cv_work_place", $lang)}</strong>
            {job.place || ''}
          </p>
          <p>
            <strong>{getText("dashboard_cv_work_position", $lang)}</strong>
            {job.position || ''}
          </p>
          <p>
            <strong>{getText("dashboard_cv_work_started", $lang)}</strong>
            {job.started || ''}
          </p>
          <p>
            <strong>{getText("dashboard_cv_work_time", $lang)}</strong>
            {job.time || ''}
          </p>
        </div>
      {/each}
    </div>
  {/if}
  {#if hobbies}
    <div class="cv-section hobbies-section">
      <h3>{getText("dashboard_hobbies_title", $lang)}</h3>
      {#if hobbies.activities}
        <div class="cv-subsection activities-subsection">
          <h4>{getText("dashboard_hobbies_activities", $lang)}</h4>
          <ul>
            {#each hobbies.activities as activity}
              <li>{activity}</li>
            {/each}
          </ul>
        </div>
      {/if}
      {#if hobbies.preferences}
        <div class="cv-subsection preferences-subsection">
          <h4>{getText("dashboard_hobbies_preferences", $lang)}</h4>
          <div class="preference-container">
            {#each Object.entries(hobbies.preferences) as [category, list]}
              <div class="preference-col">
                <p class="preference-title">
                  {
                    getText(`edit-user-page_hobbies-info_preferences_category_${category}`, $lang)
                  }
                </p>
                <ul>
                  {#each list as li}
                    <li>{li}</li>
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