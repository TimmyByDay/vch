<script>
  import { onMount } from "svelte";

  let {
    positionClass = "",
    sizeClass = "",
    images = [],
    rotation = 0,
    rotationY = 0,
    floatDelay = "0ms",
  } = $props();

  let currentIdx = $state(0);
  let nextIdx = $state(0);
  let transitioning = $state(false);
  let timer;
  let mounted = $state(false);

  const baseTransform = `rotateY(${rotationY}deg) rotate(${rotation}deg)`;

  async function swap() {
    nextIdx = (currentIdx + 1) % images.length;
    transitioning = true;
    await new Promise((r) => setTimeout(r, 700));
    if (!mounted) return;
    currentIdx = nextIdx;
    transitioning = false;
    timer = setTimeout(swap, 5000);
  }

  onMount(() => {
    if (images.length === 0) return;
    mounted = true;
    timer = setTimeout(swap, 5000);
    return () => {
      clearTimeout(timer);
      mounted = false;
    };
  });
</script>

{#if images.length > 0}
  <span
    class="absolute {positionClass} {sizeClass} grid grid-cols-1 grid-rows-1"
    style="perspective: 500px; transform-style: preserve-3d;"
  >
    <img
      src={images[currentIdx]}
      alt=""
      class="col-start-1 row-start-1 w-full h-auto animate-float pointer-events-none"
      style="
        animation-delay: {floatDelay};
        transform: {baseTransform};
        opacity: {transitioning ? 0 : 1};
        transition: {transitioning ? 'opacity 0.7s ease' : 'none'};
      "
    />
    {#if transitioning}
      <img
        src={images[nextIdx]}
        alt=""
        class="col-start-1 row-start-1 w-full h-auto animate-float animate-fadeIn pointer-events-none"
        style="animation-delay: {floatDelay}; transform: {baseTransform};"
      />
    {/if}
  </span>
{/if}

<style>
  :global(.animate-fadeIn) {
    animation: fadeIn 0.7s ease forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
