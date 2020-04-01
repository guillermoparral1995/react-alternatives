<script>
  import { updateOriginInfo } from '../effects/actions';
  import { getContext } from 'svelte';
  export let dispatch;

  const getText = getContext('getText');
  const lang = getContext('lang');

  const handleOriginChange = (field, value) => {
    dispatch(updateOriginInfo(field, value));
  };
</script>

<section class="form-section">
  <h3 class="form-section-title">{getText("edit-user-page_origin-info_title", $lang)}</h3>
  <label for="country">{getText("edit-user-page_origin-info_country", $lang)}</label>
  <input
    name="country"
    required
    placeholder={getText("edit-user-page_origin-info_country_placeholder", $lang)}
    on:input={e => handleOriginChange("country", e.target.value)}
  />
  <label for="city">{getText("edit-user-page_origin-info_city", $lang)}</label>
  <input
    name="city"
    placeholder={getText("edit-user-page_origin-info_city_placeholder", $lang)}
    on:input={e => handleOriginChange("city", e.target.value)}
  />
  <label for="neighborhood">{getText("edit-user-page_origin-info_neighborhood", $lang)}</label>
  <input
    name="neighborhood"
    placeholder={getText("edit-user-page_origin-info_neighborhood_placeholder", $lang)}
    on:input={e => handleOriginChange("neighborhood", e.target.value)}
  />
</section>