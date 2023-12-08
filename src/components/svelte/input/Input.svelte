<script lang="ts">
  export let type: "email" | "text" | "password" | "number" = "text";
  export let placeholder = " ";
  export let id = "";
  export let value = "(value)";
  export let label = "(label)";
  export let cssClass= "appearance-none rounded-md block w-full px-3 py-2 border border-black/20 placeholder-black/80 text-black focus:outline-none focus:z-10 sm:text-sm"



  import { setContext } from 'svelte';

export let display: string = '';
export let background: string = '';
export let border: string = '';
export let spacing: string = '';
export let rounded: string = '';

// Props (Item)
export let padding: string = 'px-4 py-1';
export let active: string = '';
export let hover: string = '';
export let color: string = '';
export let fill: string = '';
export let regionLabel: string = '';

// Props (a11y)
/** Provide the ARIA labelledby value. */
export let labelledby = '';

// Context
setContext('rounded', rounded);
setContext('padding', padding);
setContext('active', active);
setContext('hover', hover);
setContext('color', color);
setContext('fill', fill);
setContext('regionLabel', regionLabel);
  const cBase = 'relative mb-2.5';
  const cInput = 'block py-1 pl-12 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
  const cLabel = 'absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto';
  // Reactive
  // display space-x only on row flex as it is not needed on column flex.
  $: spacing = `${display.includes('flex-col') ? '' : 'space-x-1'}`;
  $: classesBase = `${cBase} ${display} ${background} ${border} ${spacing} ${rounded} ${$$props.class ?? ''}`;
  $: classInput = `${cInput}`;
  $: classLabel = `${cLabel}`;


</script>

<!-- * Using {...{ type }} to handle dynamic types in Svelte - see: https://stackoverflow.com/questions/57392773/error-type-attribute-cannot-be-dynamic-if-input-uses-two-way-binding -->


<div class={classesBase}>
<input
  bind:value
  {...{ type }}
  {...$$restProps}
  {placeholder}
  {id}
  required
  class= {classInput}
/>

  <label for={value} class={classLabel}> {label}</label>
</div>