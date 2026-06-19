<script>
  import BgSlot from "./BgSlot.svelte";
  import PocketFlap from "./PocketFlap.svelte";
  import coffeeTest from "../assets/img/coffee-test.png";

  let {
    name = "",
    description = "",
    price = "",
    vegan = false,
    special = false,
    specialPrice = "",
    label = "",
  } = $props();
</script>

<div class="group cursor-pointer h-[400px] relative">
  <div class="absolute inset-x-0 bottom-0 h-[95%] -z-50">
    <BgSlot class="w-full h-full" />
  </div>

  <div class="absolute z-5 px-6">
    <img
      src={coffeeTest.src}
      alt=""
      class="w-full h-full object-cover rounded-2xl"
    />
  </div>

  <div class="relative z-10 h-full grid grid-rows-[3fr_3fr] pt-4">
    <div></div>
    <PocketFlap
      {name} {description} {price}
      {vegan} {special} {specialPrice} {label}
    />
  </div>
</div>
