<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let {
    positionClass = "",
    sizeClass = "",
    images = [],
    rotation = 0,
    rotationY = 0,
    floatDelay = "0ms",
  } = $props();

  let currentIdx = $state(0);
  let timer;

  function swap() {
    currentIdx = (currentIdx + 1) % images.length;
    timer = setTimeout(swap, 5000);
  }

  onMount(() => {
    if (images.length === 0) return;
    timer = setTimeout(swap, 5000);
    return () => clearTimeout(timer);
  });
</script>

{#if images.length > 0}
  <div class="hidden" aria-hidden="true">
    {#each images as src}
      <img {src} alt="" />
    {/each}
  </div>

  <span
    class="absolute {positionClass} {sizeClass} float-wrap"
  >
    <span
      class="block w-full h-auto grid grid-cols-1 grid-rows-1 float-inner"
      style:--rot={rotation}
      style:--rotY={rotationY}
    >
      {#key currentIdx}
        <img
          src={images[currentIdx]}
          alt=""
          class="col-start-1 row-start-1 w-full h-auto animate-float pointer-events-none"
          style:--delay={floatDelay}
          transition:fade={{ duration: 700 }}
        />
      {/key}
    </span>
  </span>
{/if}

<style>
  .float-wrap {
    perspective: 500px;
    transform-style: preserve-3d;
  }
  .float-inner {
    transform: rotateY(calc(var(--rotY) * 1deg)) rotate(calc(var(--rot) * 1deg));
    transform-style: preserve-3d;
  }
  .animate-float {
    animation-delay: var(--delay, 0ms);
  }
</style>
