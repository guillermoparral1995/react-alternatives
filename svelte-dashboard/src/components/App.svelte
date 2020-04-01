<script>
  import Router, { replace } from 'svelte-spa-router';
  import { ChunkGenerator } from 'svelte-spa-chunk';
  import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store'
  import { getLang } from '../utils';
  import { getText } from '../translations';

  let lang = writable('es');
  setContext('lang', lang);
  setContext('getText', (key, lang) => getText(key, lang));

  const switchLang = (newLang) => {
    $lang = newLang;
  }

  const Chunk = ChunkGenerator(ChunkComponent);
  const routes = {
    '/':      Chunk(() => import(/* webpackChunkName: "HomePage" */ './HomePage/HomePage.svelte')),
    '/new':   Chunk(() => import(/* webpackChunkName: "EditUserPage" */ './EditUserPage/EditUserPage.svelte')),
    '/:user': Chunk(() => import(/* webpackChunkName: "DashboardPage" */ './DashboardPage/DashboardPage.svelte'))
  };
</script>

<Router {routes} on:routeLoaded={({ detail: { querystring } }) => switchLang(getLang(querystring))}/>