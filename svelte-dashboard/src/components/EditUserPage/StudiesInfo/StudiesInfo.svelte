<script>
  import { updateStudiesInfo } from '../effects/actions';
  import { getContext } from 'svelte';
  export let dispatch;

  const getText = getContext('getText');
  const lang = getContext('lang');

  const handleStudiesChange = (field, value) => {
    dispatch(updateStudiesInfo(field, value));
  };
</script>

<section class="form-section">
  <h3 class="form-section-title">{getText("edit-user-page_studies-info_title", $lang)}</h3>
  <label for="university">{getText("edit-user-page_studies-info_university", $lang)}</label>
  <input
    name="university"
    placeholder={getText("edit-user-page_studies-info_university_placeholder", $lang)}
    on:input={e => handleStudiesChange("university", e.target.value)}
  />
  <label for="career">{getText("edit-user-page_studies-info_career", $lang)}</label>
  <input
    name="career"
    placeholder={getText("edit-user-page_studies-info_career_placeholder", $lang)}
    on:input={e => handleStudiesChange("career", e.target.value)}
  />
  <label for="finished">{getText("edit-user-page_studies-info_finished", $lang)}</label>
  <input
    type="checkbox"
    on:input={e => handleStudiesChange("finished", e.target.checked)}
  />
</section>