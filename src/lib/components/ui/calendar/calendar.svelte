<script lang="ts">
  import { Calendar as CalendarPrimitive } from "bits-ui";
  import * as Calendar from "./index.js";
  import { cn } from "$lib/utils.js";
  import {
    DateFormatter,
    getLocalTimeZone,
    today,
  } from "@internationalized/date";
  import { capitalizeFirstLetter } from "$lib/utils/capitalizeFirstLetter.js";

  type $$Props = CalendarPrimitive.Props;

  type $$Events = CalendarPrimitive.Events;

  export let value: $$Props["value"] = undefined;
  export let placeholder: $$Props["placeholder"] = today(getLocalTimeZone());
  export let weekdayFormat: $$Props["weekdayFormat"] = "short";

  let className: $$Props["class"] = undefined;
  export { className as class };

  let weekDaySpanish = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

  const monthFmt = new DateFormatter("es-ES", {
    month: "long",
  });

  $: defaultYear = placeholder
    ? {
        value: placeholder.year,
        label: String(placeholder.year),
      }
    : undefined;

  $: defaultMonth = placeholder
    ? {
        value: placeholder.month,
        label: monthFmt.format(placeholder.toDate(getLocalTimeZone())),
      }
    : undefined;
  $: header =
    defaultMonth && defaultYear
      ? `${capitalizeFirstLetter(defaultMonth.label)} ${defaultYear.label}`
      : "";
</script>

<CalendarPrimitive.Root
  bind:value
  bind:placeholder
  {weekdayFormat}
  class={cn("p-3 px-0", className)}
  {...$$restProps}
  on:keydown
  let:months
>
  <Calendar.Header class="px-4">
    <Calendar.PrevButton />
    <Calendar.Heading class="text-lg" bind:header />
    <Calendar.NextButton />
  </Calendar.Header>
  <Calendar.Months>
    {#each months as month}
      <Calendar.Grid>
        <Calendar.GridHead>
          <Calendar.GridRow class="">
            {#each weekDaySpanish as weekday}
              <Calendar.HeadCell class="text-lg w-full">
                {weekday}
              </Calendar.HeadCell>
            {/each}
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody class="border border-white">
          {#each month.weeks as weekDates}
            <Calendar.GridRow class="">
              {#each weekDates as date}
                <Calendar.Cell {date} class="h-[7.2rem] w-full [&:has([data-selected])]:bg-transparent ">
                  <Calendar.Day
                    {date}
                    month={month.value}
                   class="border h-full rounded-none  items-start py-2 w-full hover:bg-transparent hover:text-white [&[data-today]:not([data-selected])]:bg-trustworthy-blue 
                   [&[data-today]:not([data-selected])]:text-vibrant-cyan [&[data-outside-month][data-selected]]:bg-transparent"
                  />
                </Calendar.Cell>
              {/each}
            </Calendar.GridRow>
          {/each}
        </Calendar.GridBody>
      </Calendar.Grid>
    {/each}
  </Calendar.Months>
</CalendarPrimitive.Root>
