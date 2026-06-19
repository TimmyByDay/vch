<script>
  let { class: className = "" } = $props();
</script>

<svg class={className} viewBox="0 0 250 277" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="bg-slot" x="0" y="0" width="250" height="276.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-2"/>
      <feGaussianBlur stdDeviation="0.25"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="dropShadow"/>
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
        <feMergeNode in="dropShadow"/>
      </feMerge>
    </filter>
  </defs>
  <path d="M12.5 2.5C5.87259 2.5 0.5 7.87258 0.5 14.5L0.500003 264.5C0.500003 271.127 5.84104 276.5 12.4685 276.5C36.0627 276.5 89.5316 276.5 126.934 276.5C164.016 276.5 214.699 276.5 237.511 276.5C244.138 276.5 249.5 271.127 249.5 264.5L249.5 14.5C249.5 7.87259 244.127 2.5 237.5 2.5L12.5 2.5Z" fill="#FDFDFD" filter="url(#bg-slot)"/>
</svg>
