<script>
  import MainInfo from './MainInfo/MainInfo.svelte';
  import OriginInfo from './OriginInfo/OriginInfo.svelte';
  import StudiesInfo from './StudiesInfo/StudiesInfo.svelte';
  import WorkInfo from './WorkInfo/WorkInfo.svelte';
  import HobbiesInfo from './HobbiesInfo/HobbiesInfo.svelte';
  import Dashboard from '../Common/Dashboard/Dashboard.svelte';
  import Loading from '../Common/Loading/Loading.svelte';
  import { state } from './effects/store';
  import reducers from './effects/reducers';
  import { push } from 'svelte-spa-router';
  import { getContext } from 'svelte';

  import './styles.scss';

  const getText = getContext('getText');
  const lang = getContext('lang');

  const dispatch = (action) => {
    $state = reducers($state, action);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8081/personal-info/save", {
      method: "post",
      body: JSON.stringify($state),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.status !== 200) {
      throw { data };
    }
    push(`/${$state.username}?lang=${$lang}`);
  }
</script>

<form on:submit|preventDefault={() => handleSubmit()}>
  <div class="form-column">
    <MainInfo dispatch={dispatch} />
    <OriginInfo dispatch={dispatch} />
    <StudiesInfo dispatch={dispatch} />
    <WorkInfo dispatch={dispatch} work={$state.work} />
    <HobbiesInfo dispatch={dispatch} hobbies={$state.hobbies} />
  </div>
  <div class="preview-column">
    {#if $state.name}
      <Dashboard personalInfo={$state} showContacts={false}></Dashboard>
    {:else}
      <Loading />
    {/if}
  </div>
  <section class="form-section submit-section">
    <button>{getText('generic_register', $lang)}</button>
  </section>
</form>