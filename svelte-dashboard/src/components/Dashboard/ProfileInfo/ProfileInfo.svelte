<script>
  import { Link } from 'yrv';
  import { capitalize } from '../../../utils';
  export let name, username, nickname, age, birthdate, origin;

  const formatOrigin = (origin) => {
    const { country, city, neighborhood } = origin;
    return `${neighborhood ? `${neighborhood}, ` : ''}${city}, ${country}`;
  }
</script>

<style>
  #profile-info-container {
    background-color: darkcyan;
    border-radius: 10px;
    height: 100%;
    padding: 20px;
  }

  img {
    border-radius: 10px;
    height: 200px;
    width: 200px;
  }
</style>

<div id="profile-info-container">
  <img src={`/${username}.jpg`} alt={capitalize(username)}/>
  <h3>{nickname}</h3>
  <p>Nombre completo: <br/><strong>{name}</strong></p>
  <p>Edad: <br/><strong>{age}</strong></p>
  <p>Fecha de nacimiento <br/><strong>{birthdate}</strong></p>
  {#if origin}
    <p>Origen: <br/><strong>{formatOrigin(origin)}</strong></p>
  {/if}
  <Link href={`/${username}`}>{`@${username}`}</Link>
</div>