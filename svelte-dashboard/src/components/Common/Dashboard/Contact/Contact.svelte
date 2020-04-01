<script>
  import { capitalize } from '../../../../utils';
  import { getContext } from 'svelte';
  export let name, username, img_src;

  const lang = getContext('lang');
</script>

<style>
.contact-container {
  background-color: white;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}

img {
  border-radius: 5px;
  height: 100px;
  width: 100px;
}

p {
  margin: 5px 0;
}
</style>

<div class="contact-container">
  <img src={`/${img_src}`} alt={capitalize(name)}/>
  <p>{name}</p>
  <a href={`/#/${username}?lang=${$lang}`}>{`@${username}`}</a>
</div>