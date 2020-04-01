<script>
  import { getContext } from 'svelte';

  const getText = getContext('getText');
  const lang = getContext('lang');

  export let message;
</script>

<div>
    <h1>{message || getText('generic_error', $lang)}</h1>
    <a href="/#/">{getText('generic_return', $lang)}</a>
</div>