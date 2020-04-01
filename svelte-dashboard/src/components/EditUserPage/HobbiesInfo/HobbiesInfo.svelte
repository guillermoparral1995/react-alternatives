<script>
  import { 
    addPreference, 
    deletePreference, 
    addActivity, 
    deleteActivity 
  } from '../effects/actions';
  import { getContext } from 'svelte';

  export let dispatch, hobbies;

  const getText = getContext('getText');
  const lang = getContext('lang');

  let activity;
  let preference = {
    category: undefined,
    title: ""
  };

  const handleAddPreference = () => {
    const { category, title } = preference;
    dispatch(addPreference(category, title));
  };

  const handleDeletePreference = (category, idx) => {
    dispatch(deletePreference(category, idx));
  };

  const handleAddActivity = () => {
    dispatch(addActivity(activity));
  };

  const handleDeleteActivity = idx => {
    dispatch(deleteActivity(idx));
  };
</script>

<section class="form-section">
  <h3 class="form-section-title">
    {getText("edit-user-page_hobbies-info_title", $lang)}
  </h3>
  <div>
    {#if hobbies && hobbies.activities}
      <ul class="form-list">
        {#each hobbies.activities as activity, idx}
        <li class="form-list-item">
          <span>
            {activity}
            <button
              type="button"
              on:click={() => handleDeleteActivity(idx)}
            >
              {getText("generic_delete", $lang)}
            </button>
          </span>
        </li>
        {/each}
      </ul>
    {/if}
    <label for="activities">
      {getText("edit-user-page_hobbies-info_activities", $lang)}
    </label>
    <input
      name="activities"
      placeholder={getText('edit-user-page_hobbies-info_activities_placeholder', $lang)}
      bind:value={activity}
    />
    {#if activity}
      <button type="button" on:click={() => handleAddActivity()}>
        {getText("generic_add")}
      </button>
    {/if}
  </div>
  <h3>{getText("edit-user-page_hobbies-info_preferences", $lang)}</h3>
  <div>
    {#if hobbies && hobbies.preferences}
      <div class="form-list-row">
        {#each Object.entries(hobbies.preferences) as [category, list], idx}
          <ul class="form-list">
              {getText(`edit-user-page_hobbies-info_preferences_category_${category}`, $lang)}
              {#each list as elem}
                <li class="form-list-item">
                  <span>
                    {elem}
                    <button
                      type="button"
                      on:click={() => handleDeletePreference(category, idx)}
                    >
                      {getText("generic_delete", $lang)}
                    </button>
                  </span>
                </li>
              {/each}
            </ul>
        {/each}
      </div>
    {/if}
    <label for="pref-category">
      {getText("edit-user-page_hobbies-info_preferences_category", $lang)}
    </label>
    <select
      name="pref-category"
      bind:value={preference.category}
    >
      <option value={undefined}>{getText("generic_select", $lang)}</option>
      {#each ["music", "series", "movies", "sports", "books", "anime", "snacks"] as category}
        <option value={category}>
            {getText(
              `edit-user-page_hobbies-info_preferences_category_${category}`, $lang
            )}
          </option>
      {/each}
    </select>
    {#if preference.category}
      <label for="pref-title">{getText("edit-user-page_hobbies-info_preferences_title", $lang)}</label>
      <input
        name="pref-title"
        placeholder={getText("edit-user-page_hobbies-info_preferences_title_placeholder", $lang)}
        bind:value={preference.title}
      />
      {#if preference.title}
        <button type="button" on:click={() => handleAddPreference()}>
          {getText("generic_add", $lang)}
        </button>
      {/if}
    {/if}
  </div>
</section>