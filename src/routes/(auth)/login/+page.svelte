<script lang="ts">
  import { enhance } from "$app/forms";
  import Button from "$lib/components/ui/button/button.svelte";
  import IconGoogle from "$lib/icons/IconGoogle.svelte";
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
    <Button class="py-6">
      <IconGoogle />
      <h2 class="text-lg">Ingresar</h2>
    </Button>
  </form>
</div>
