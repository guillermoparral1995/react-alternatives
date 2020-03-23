<script>
  import { formattedName } from "../../utils";
  import ProfileInfo from "./ProfileInfo/ProfileInfo.svelte";
  import CV from "./CV/CV.svelte";
  import Contact from "./Contact/Contact.svelte";
  import Loading from "../Common/Loading.svelte";
  import ErrorPage from "../Common/ErrorPage.svelte";
  import './styles.scss';

  export let params;
  let personalInfo;

  const fetchAndUpdate = async () => {
    const response = await fetch(
      `http://localhost:8080/personal-info/${formattedName(params.user)}`
    );
    const data = await response.json();
    personalInfo = data;
  }

  $: {
    if(params.user) {
      fetchAndUpdate();
    }
  } 
</script>

{#if personalInfo}
  {#if personalInfo.name}
    <main id="dashboard-container">
      <section id="side-bar">
        <ProfileInfo
          name={personalInfo.name}
          nickname={personalInfo.nickname}
          username={personalInfo.username}
          age={personalInfo.age}
          birthdate={personalInfo.birthdate}
          origin={personalInfo.origin} />
      </section>
      <section id="cv">
        <CV
          studies={personalInfo.studies}
          work={personalInfo.work}
          hobbies={personalInfo.hobbies} />
      </section>
      <section id="contacts">
        <h3>Contactos</h3>
        {#each personalInfo.contacts as contact}
          <Contact {...contact} />
        {/each}
      </section>
    </main>
  {:else}
    <ErrorPage message={'Ups! No pudimos encontrar este usuario'}/>
  {/if}
{:else}
  <Loading />
{/if}
