<script>
  import { Link } from 'yrv';
  export let message;
</script>

<div>
    <h1>{message || "Ups! Hubo un error al cargar la página"}</h1>
    <Link href="/">Volver al menú principal</Link>
</div>