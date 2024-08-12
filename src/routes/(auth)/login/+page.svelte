<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { enhance } from "$app/forms";
  import { type SubmitFunction } from "@sveltejs/kit";

  export let data;

  const handleSubmit: SubmitFunction = ({ cancel }) => {
    data.supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:5173/auth/callback`,
      },
    });

    cancel();
  };
</script>

<svelte:head>
  <title>Iniciar sesion</title>
</svelte:head>

<div>
  <form method="post" use:enhance={handleSubmit}>
    <button> Iniciar sesion </button>
  </form>
</div>
