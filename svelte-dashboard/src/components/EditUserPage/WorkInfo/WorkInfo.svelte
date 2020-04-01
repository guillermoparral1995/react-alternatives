<script>
  import { addJob, deleteJob } from '../effects/actions';
  import { getContext } from 'svelte';

  export let dispatch, work;
  let place, position, started, time;

  const getText = getContext('getText');
  const lang = getContext('lang');

  const handleAddJob = () => {
    dispatch(addJob({ place, position, started, time }));
  };

  const handleDeleteJob = idx => {
    dispatch(deleteJob(idx));
  };

  const buildJobText = ({ place, position, started, time }) => {
    const placeText = `${getText("edit-user-page_work-info_list_place", $lang)}${place}`;
    const positionText = position ? `${getText("edit-user-page_work-info_list_position", $lang)}${position}` : "";
    const startedText = started ? `${getText("edit-user-page_work-info_list_started", $lang)}${started}` : "";
    const timeText = time ? `${getText("edit-user-page_work-info_list_time", $lang)}${time}` : "";
    return `${placeText}${positionText}${startedText}${timeText}`;
  };
</script>

<section class="form-section">
  <h3 class="form-section-title">{getText("edit-user-page_work-info_title", $lang)}</h3>
  {#if work}
    <ul class="form-list">
      {#each work as job, idx}
        <li class="form-list-item">
          <span>
            {buildJobText(job)}
            <button type="button" on:click={() => handleDeleteJob(idx)}>
              {getText("generic_delete", $lang)}
            </button>
          </span>
        </li>
      {/each}
    </ul>
  {/if}
  <div class="form-section-column">
    <label for="place">{getText("edit-user-page_work-info_place", $lang)}</label>
    <input
      name="place"
      placeholder={getText("edit-user-page_work-info_place_placeholder", $lang)}
      bind:value={place}
    />
    <label for="position">{getText("edit-user-page_work-info_position", $lang)}</label>
    <input
      name="position"
      placeholder={getText("edit-user-page_work-info_position_placeholder", $lang)}
      bind:value={position}
    />
  </div>
  <div class="form-section-column">
    <label for="started">{getText("edit-user-page_work-info_started", $lang)}</label>
    <input
      name="started"
      placeholder={getText("edit-user-page_work-info_started_placeholder", $lang)}
      bind:value={started}
    />
    <label for="time">{getText("edit-user-page_work-info_time", $lang)}</label>
    <input
      name="time"
      placeholder={getText("edit-user-page_work-info_time_placeholder", $lang)}
      bind:value={time}
    />

    {#if place}
      <button
        type="button"
        on:click={() => handleAddJob()}
      >
        {getText("generic_add", $lang)}
      </button>
    {/if}
  </div>
</section>