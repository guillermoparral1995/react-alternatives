<script>
  import { formattedName } from "../../utils";
  import Loading from "../Common/Loading.svelte";
  import ErrorPage from "../Common/ErrorPage.svelte";
  import "./styles.scss";

  export let params;
  let personalInfo;

  const fetchAndUpdate = async () => {
    console.log("fetching!");
    const response = await fetch(
      `http://localhost:8081/personal-info/${formattedName(params.user)}`
    );
    const data = await response.json();
    const {
      name,
      nickname,
      username,
      age,
      birthdate,
      origin,
      studies,
      work,
      hobbies,
      contacts
    } = data;
    personalInfo = {
      profileInfo: {
        name,
        nickname,
        username,
        age,
        birthdate,
        origin
      },
      cv: {
        studies,
        work,
        hobbies
      },
      contacts
    };
  };

  const importComponent = async name =>
    await import(`./${name}/${name}.svelte`);

  $: if (params.user) {
    fetchAndUpdate();
  }
</script>

{#if personalInfo}
  <main id="dashboard-container">
    <section id="side-bar">
      {#await import(/* webpackChunkName: "ProfileInfo" */ './ProfileInfo/ProfileInfo.svelte') then c}
        <svelte:component this={c.default} {...personalInfo.profileInfo} />
      {/await}
    </section>
    <section id="cv">
      {#await import(/* webpackChunkName: "CV" */ './CV/CV.svelte') then c}
        <svelte:component this={c.default} {...personalInfo.cv} />
      {/await}
    </section>
    <section id="contacts">
      {#await import(/* webpackChunkName: "Contact" */ './Contact/Contact.svelte') then c}
        {#each personalInfo.contacts as contact}
          <svelte:component this={c.default} {...contact} />
        {/each}
      {/await}
    </section>
  </main>
{/if}
