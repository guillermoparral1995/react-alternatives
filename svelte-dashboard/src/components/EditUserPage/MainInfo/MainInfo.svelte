<script>
  import { updateMainInfo } from '../effects/actions';
  import { getContext } from 'svelte';
  export let dispatch;

  const getText = getContext('getText');
  const lang = getContext('lang');

  const handleInputChange = (field, value) => {
    dispatch(updateMainInfo(field, value));
  };
</script>

<section class="form-section">
  <h3 class="form-section-title">{getText("edit-user-page_main-info_title", $lang)}</h3>
  <div class="form-section-column">
    <label for="name">{getText("edit-user-page_main-info_name", $lang)}</label>
    <input
      name="name"
      required
      placeholder={getText("edit-user-page_main-info_name_placeholder", $lang)}
      on:input={e => handleInputChange("name", e.target.value)}
    />
    <label for="nickname">{getText("edit-user-page_main-info_nickname", $lang)}</label>
    <input
      name="nickname"
      required
      placeholder={getText("edit-user-page_main-info_nickname_placeholder", $lang)}
      on:input={e => handleInputChange("nickname", e.target.value)}
    />
    <label for="username">{getText("edit-user-page_main-info_username", $lang)}</label>
    <input
      name="username"
      required
      placeholder={getText("edit-user-page_main-info_username_placeholder", $lang)}
      on:input={e => handleInputChange("username", e.target.value)}
    />
  </div>
  <div class="form-section-column">
    <label for="age">{getText("edit-user-page_main-info_age", $lang)}</label>
    <input
      name="age"
      type="number"
      placeholder={getText("edit-user-page_main-info_age_placeholder", $lang)}
      on:input={e => handleInputChange("age", e.target.value)}
    />
    <label for="birthdate">{getText("edit-user-page_main-info_birthdate", $lang)}</label>
    <input
      name="birthdate"
      type="date"
      on:input={e => handleInputChange("birthdate", e.target.value)}
    />
    <label for="type">{getText("edit-user-page_main-info_species", $lang)}</label>
    <select
      name="type"
      on:input={e => handleInputChange("type", e.target.value)}
    >
      <option selected>{getText("generic_select", $lang)}</option>
      <option value="human">{getText("edit-user-page_main-info_species_human", $lang)}</option>
      <option value="cat">{getText("edit-user-page_main-info_species_cat", $lang)}</option>
      <option value="dog">{getText("edit-user-page_main-info_species_dog", $lang)}</option>
    </select>
  </div>
</section>