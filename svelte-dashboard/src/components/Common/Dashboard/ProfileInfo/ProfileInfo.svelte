<script>
  import { getContext } from 'svelte';
  import { capitalize } from '../../../../utils';
  export let name, nickname, username, age, birthdate, origin, showReturn;
  let profile_img;

  const getText = getContext('getText');
  const lang = getContext('lang');

  const formatOrigin = origin => {
    const { country, city, neighborhood } = origin;
    const countryText = country || "";
    const cityText = `${city ? (country ? `${city}, ` : city) : ""}`;
    const neighborhoodText = `${
      neighborhood ? (city ? `${neighborhood}, ` : neighborhood) : ""
    }`;
    return `${neighborhoodText}${cityText}${countryText}`;
  };

  const handleOnError = () => {
    profile_img.src = 'default.png'
  }
</script>

<style>
  .profile-info-container {
    background-color: darkcyan;
    border-radius: 10px;
    height: 100%;
    padding: 20px;
  }

  button {
    background-color: cornflowerblue;
    border: solid 1px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin: 16px 0;
    padding: 10px;
  }

  img {
    border-radius: 10px;
    height: 200px;
    width: 200px;
  }
</style>

{#if showReturn}
  <a href={`/#/?lang=${$lang}`}>
    <button>{getText("generic_return", $lang)}</button>
  </a>
{/if}
<div class="profile-info-container">
  <img bind:this={profile_img}
    src={showReturn ? `/${username}.jpg`: 'default.png'}
    alt={`${name} profile picture`}
    on:error={() => handleOnError()}
  />
  <h3>{nickname || name}</h3>
  <p>
    {getText('dashboard_profile-info_name', $lang)}<br />
    <strong>{name}</strong>
  </p>
  <p>
    {age ? getText('dashboard_profile-info_age', $lang) : ''}<br />
    <strong>{age || ''}</strong>
  </p>
  <p>
    {birthdate ? getText('dashboard_profile-info_birthdate', $lang) : ''}<br />
    <strong>{birthdate || ''}</strong>
  </p>
  {#if origin}
    <p>
      {getText('dashboard_profile-info_origin', $lang)}<br />
      <strong>{formatOrigin(origin)}</strong>
    </p>
  {/if}
  <a href={`/#/${username}`}>{username ? `@${username}` : ''}</a>
</div>