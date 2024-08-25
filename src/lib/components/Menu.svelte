<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { enhance } from "$app/forms";
  import IconCalendar from "$lib/icons/IconCalendar.svelte";
  import IconLogout from "$lib/icons/IconLogout.svelte";

  const handleSubmit = async (
    event: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    },
  ) => {
    event.preventDefault();

    await fetch("/private/logout");

    invalidateAll();
  };
</script>

<div
  class="fixed left-0 bottom-0 w-full flex items-center justify-around bg-trustworthy-blue font-semibold py-2 rounded-t-xl border-t-2 border-vibrant-cyan"
>
  <div class="flex flex-col space-y-1 items-center">
    <IconCalendar />
    <small>Calendario</small>
  </div>
  <div class="flex flex-col space-y-1 items-center">
    <form method="POST" on:submit={(event) => handleSubmit(event)}>
      <button type="submit">
        <IconLogout />
        <small>Salir</small></button
      >
    </form>
  </div>
</div>
