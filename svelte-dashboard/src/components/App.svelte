<script>
  import Router, { replace } from 'svelte-spa-router';
  import { ChunkGenerator } from 'svelte-spa-chunk';
  import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

  const Chunk = ChunkGenerator(ChunkComponent);
  const routes = {
    '/':      Chunk(() => import(/* webpackChunkName: "HomePage" */ './HomePage/HomePage.svelte')),
    '/:user': Chunk(() => import(/* webpackChunkName: "Dashboard" */ './Dashboard/Dashboard.svelte'))
  };
</script>

<Router {routes} />