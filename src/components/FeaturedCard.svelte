<script>
  import BgSlot from "./BgSlot.svelte";
  import PocketFlap from "./PocketFlap.svelte";

  let {
    name = "",
    description = "",
    price = "",
    vegan = false,
    special = false,
    specialPrice = "",
    label = "",
    image = "",
  } = $props();
</script>

<div class="group cursor-pointer h-[400px] relative">
  <div class="absolute inset-x-0 bottom-0 h-[95%] -z-50">
    <BgSlot class="w-full h-full" />
  </div>

  <div class="absolute z-5 inset-x-0 px-6 top-0 h-[60%]">
    {#if image}
      <img
        src={image}
        alt=""
        class="w-full h-full object-cover rounded-2xl"
      />
    {:else}
      <div class="w-full h-full rounded-2xl bg-gradient-to-br from-accent/10 via-secondary/5 to-accent/20"></div>
    {/if}
  </div>

  <div class="relative z-10 h-full grid grid-rows-[3fr_3fr] pt-4">
    <div></div>
    <PocketFlap
      {name} {description} {price}
      {vegan} {special} {specialPrice} {label}
    />
  </div>
</div>
