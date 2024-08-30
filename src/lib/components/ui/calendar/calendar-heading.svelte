<script lang="ts">
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	
	let className: string | undefined = undefined;
	export let header: string
	export { className as class };
</script>

<CalendarPrimitive.Heading
	class={cn("text-sm font-medium", className)}
	{...$$restProps}
>
	<slot>
		{header}
	</slot>
</CalendarPrimitive.Heading>
