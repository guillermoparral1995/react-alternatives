<script>
  import Router, { replace } from 'svelte-spa-router';
  import HomePage from './HomePage/HomePage.svelte';
  import Dashboard from './Dashboard/Dashboard.svelte';
  const routes = {
    '/': HomePage,
    '/:user': Dashboard
  };
</script>

<Router {routes} />