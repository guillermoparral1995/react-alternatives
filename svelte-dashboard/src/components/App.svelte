<script>
  import { Router, Route } from 'yrv';
</script>

<Router>
  <Route exact path="/" dynamic={import('./HomePage/HomePage.svelte')} />
  <Route exact path="/:user" dynamic={import('./Dashboard/Dashboard.svelte')} let:router/>
</Router>