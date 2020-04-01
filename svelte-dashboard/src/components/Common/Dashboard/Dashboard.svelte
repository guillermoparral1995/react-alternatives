<script>
  import { getContext } from 'svelte';
  import "./styles.scss";

  export let personalInfo, showContacts;

  const getText = getContext('getText');
  const lang = getContext('lang');
</script>

<main id="dashboard-container">
  <section id="side-bar">
    {#await import(/* webpackChunkName: "ProfileInfo" */ './ProfileInfo/ProfileInfo.svelte') then c}
      <svelte:component
        this={c.default}
        name={personalInfo.name}
        nickname={personalInfo.nickname}
        username={personalInfo.username}
        age={personalInfo.age}
        birthdate={personalInfo.birthdate}
        origin={personalInfo.origin}
        showReturn={showContacts} />
    {/await}
  </section>
  <section id="cv">
    {#await import(/* webpackChunkName: "CV" */ './CV/CV.svelte') then c}
      <svelte:component
        this={c.default}
        studies={personalInfo.studies}
        work={personalInfo.work}
        hobbies={personalInfo.hobbies} />
    {/await}
  </section>
  {#if showContacts}
    {#await import(/* webpackChunkName: "Contact" */ './Contact/Contact.svelte') then c}
      <section id="contacts">
        <h2>{getText('dashboard_contacts_title', $lang)}</h2>
        {#if personalInfo.contacts.length}
          {#each personalInfo.contacts as contact}
            <svelte:component this={c.default} {...contact} />
          {/each}
        {:else}
          <p>{getText('dashboard_contacts_empty', $lang)}</p>
        {/if}
      </section>
    {/await}
  {/if}
</main>
