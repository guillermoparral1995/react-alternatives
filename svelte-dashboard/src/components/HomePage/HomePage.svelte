<script>
  import { push } from 'svelte-spa-router';
  import { getContext } from 'svelte';
  import './styles.scss';

  const getText = getContext('getText');
  const lang = getContext('lang');

  let search = '';
</script>

<main>
  <section id="greeting">
    <h1>{getText('home-page_title', $lang)}</h1>
  </section>
  <section id="search">
    <form on:submit|preventDefault={() => push(`/${search}?lang=${$lang}`)}>
      <input type="text" placeholder={getText('home-page_search_placeholder', $lang)} bind:value={search}/>
      <button>{getText('home-page_search', $lang)}</button>
    </form>
  </section>
  <section class="unregistered">
    <p>{getText('home-page_register_text', $lang)}</p>
    <a href={`/#/new?lang=${$lang}`}>
      <button>{getText('generic_register', $lang)}</button>
    </a>
  </section> 
</main>