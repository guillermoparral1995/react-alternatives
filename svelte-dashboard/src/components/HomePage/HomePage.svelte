<script>
  import { push } from 'svelte-spa-router';
  import './styles.scss';

  let search = '';
</script>

<main>
    <section id="greeting">
      <h1>Bienvenidx a Dashboard!</h1>
    </section>
    <section id="search">
      <form on:submit|preventDefault={() => push(`/${search}`)}>
        <input type="text" placeholder="A quién buscás?" bind:value={search}/>
        <button>Buscar!</button>
      </form>
    </section>
  </main>