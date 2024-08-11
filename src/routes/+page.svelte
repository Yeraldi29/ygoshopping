<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let data;

  const handleSubmit: SubmitFunction = ({ cancel }) => {
    data.supabase.auth.signOut();

    cancel();
  };
</script>

<form method="POST" use:enhance={handleSubmit}>
  <button type="submit"> Cerrar sesión </button>
</form>
