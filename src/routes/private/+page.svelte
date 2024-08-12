<script lang="ts">
    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";
  
    export let data;
  
    const handleSubmit: SubmitFunction = ({ cancel }) => {
      data.supabase.auth.signOut();
  
    };
  </script>
  
  <form method="post" use:enhance={handleSubmit}>
    <button type="submit"> Cerrar sesión </button>
  </form>
  