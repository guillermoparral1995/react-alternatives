<script>
  import { Link, navigateTo } from 'yrv';
  import './styles.scss';
  let search = '';

  $: {
    console.log('search', search);
  }

  const handleSubmit = () => {
    console.log('here!');
    navigateTo(`/${search}`)
  }
</script>

<main>
    <section id="greeting">
      <h1>Bienvenidx a Dashboard!</h1>
    </section>
    <section id="search">
      <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="A quién buscás?" bind:value={search}/>
        <Link href={`/${search}`} button>Buscar!</Link>
      </form>
    </section>
  </main>