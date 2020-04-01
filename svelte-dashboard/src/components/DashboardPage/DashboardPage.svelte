<script>
  import { formattedName } from "../../utils";
  import Loading from '../Common/Loading/Loading.svelte';
  import ErrorPage from '../Common/ErrorPage/ErrorPage.svelte';
  import Dashboard from '../Common/Dashboard/Dashboard.svelte';
  import { getContext } from 'svelte';

  export let params;
  let personalInfo;
  let error = false;

  const getText = getContext('getText');
  const lang = getContext('lang');

  const fetchAndUpdate = async () => {
    const response = await fetch(
      `http://localhost:8081/personal-info/${formattedName(params.user)}`
    );
    const data = await response.json();
    if(data.message) {
      error = true
    } else {
      personalInfo = data;
    }
  }

  $: if(params.user) {
    fetchAndUpdate();
  }
</script>

{#if personalInfo}
  <Dashboard personalInfo={personalInfo} showContacts={true}></Dashboard>
{:else if error}
  <ErrorPage message={getText('dashboard_error_404', lang)}/>
{:else}
  <Loading />
{/if}
