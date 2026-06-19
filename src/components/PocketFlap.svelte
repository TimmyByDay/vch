<script>
  import NoiseFilter from "./NoiseFilter.svelte";

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

<div class="relative w-full h-full font-sans">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 251 132" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="content-slot" x="0" y="0" width="251" height="131.202" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2"/>
        <feGaussianBlur stdDeviation="0.25"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="1934"/>
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
        <feComponentTransfer in="alphaNoise" result="noiseThreshold">
          <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/>
        </feComponentTransfer>
        <feComposite operator="in" in2="shape" in="noiseThreshold" result="noiseClipped"/>
        <feFlood flood-color="rgba(119, 87, 75, 0.1)" result="colorFlood"/>
        <feComposite operator="in" in2="noiseClipped" in="colorFlood" result="coloredNoise"/>
        <feMerge>
          <feMergeNode in="shape"/>
          <feMergeNode in="coloredNoise"/>
          <feMergeNode in="effect2_dropShadow"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M13 128.202C6.37259 128.202 1 122.829 1 116.202L1 14.6413C1 7.13416 7.7858 1.43677 15.1913 2.66788C39.3601 6.68585 89.3958 14.2019 125.5 14.2019C161.604 14.2019 211.64 6.68585 235.809 2.66789C243.214 1.43677 250 7.13417 250 14.6413L250 116.202C250 122.829 244.627 128.202 238 128.202L13 128.202Z" fill="#FDFDFD" filter="url(#content-slot)"/>
  </svg>

  {#if label}
    <div class="absolute top-3 left-1/2 -translate-x-1/2 z-20">
      <svg width="100" height="32" viewBox="0 0 100 32">
        <defs>
          <NoiseFilter id="pill-noise" />
        </defs>
        <rect width="100" height="32" rx="16" fill="#FFF7F4" filter="url(#pill-noise)"/>
        <text x="50" y="20" text-anchor="middle" fill="#1A110E" font-size="16" font-weight="700" font-family="'Source Sans 3', sans-serif">{label}</text>
      </svg>
    </div>
  {/if}

  <div class="absolute inset-0 p-4 md:p-5 space-y-2 flex flex-col justify-center">
    <div class="flex items-start justify-between gap-2 pt-4">
      <h3 class="font-bold text-neutral-900 text-xl">{name}</h3>
      {#if vegan}
        <span class="inline-flex items-center gap-1 text-sm font-medium text-green-700 bg-green-100 rounded-full px-2.5 py-0.5 shrink-0">
          <svg class="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7.47 1.48a.75.75 0 0 1 1.06 0l.72.71a.75.75 0 0 1 0 1.06l-.72.71a.75.75 0 0 1-1.06 0l-.71-.71a.75.75 0 0 1 0-1.06l.71-.71ZM4.69 4.69a.75.75 0 0 1 1.06 0l.35.35a.75.75 0 0 1 0 1.06l-.35.35a.75.75 0 0 1-1.06 0l-.35-.35a.75.75 0 0 1 0-1.06l.35-.35Zm6.62 0a.75.75 0 0 1 0 1.06l-.35.35a.75.75 0 0 1-1.06 0l-.35-.35a.75.75 0 0 1 0-1.06l.35-.35a.75.75 0 0 1 1.06 0ZM8 5.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V6.25A.75.75 0 0 1 8 5.5Z"/>
          </svg>
          Vegan-friendly
        </span>
      {/if}
    </div>
    <p class="text-base text-neutral-900 leading-snug">{description}</p>
    <div class="flex items-center gap-3">
      {#if price}
        {#if special && specialPrice}
          <span class="line-through text-red-400/60 text-2xl">{price}</span>
          <span class="font-bold text-neutral-900 text-2xl">{specialPrice}</span>
        {:else}
          <span class="font-bold text-neutral-900 text-2xl">{price}</span>
        {/if}
      {/if}
    </div>
  </div>
</div>
