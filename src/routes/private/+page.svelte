<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  const handleSubmit: SubmitFunction = ({}) => {};
</script>

<form method="POST" use:enhance={handleSubmit}>
  <button type="submit"> Cerrar sesión </button>
</form>
