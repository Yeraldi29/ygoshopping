<script lang="ts">
  import { enhance } from "$app/forms";
  import Button from "$lib/components/ui/button/button.svelte";
  import IconGoogle from "$lib/icons/IconGoogle.svelte";
  import * as Card from "$lib/components/ui/card";
  import { type SubmitFunction } from "@sveltejs/kit";
  import logoRemovebg from "$lib/images/logo-removebg.webp";
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

<div class="h-screen flex flex-col justify-center items-center">
  <img src={logoRemovebg} alt="logo" class=" w-32 h-32 mx-auto mb-4" />
  <h1 class="text-3xl font-semibold px-12 text-center">
    Bienvenidos a YGOSHOPPING
  </h1>
  <div class="max-w-xs w-full mx-auto">
    <h3 class="text-lg text-center px-2 py-4">
      esta es una aplicación para llevar las cuentas de tus compras del día a
      día.
    </h3>
    <form
      method="post"
      use:enhance={handleSubmit}
      class="w-full flex flex-col items-center"
    >
      <Button class="mt-4 py-6 bg-trustworthy-blue border-vibrant-cyan border ">
        <IconGoogle />
        <h2 class="text-lg">Continua con Google</h2>
      </Button>
    </form>
  </div>
</div>
