<script>
  let { id = "noise" } = $props();
</script>

<filter {id} x="-20%" y="-20%" width="140%" height="140%">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="1934"/>
  <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
  <feComponentTransfer in="alphaNoise" result="coloredNoise">
    <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/>
  </feComponentTransfer>
  <feComposite operator="in" in2="shape" in="coloredNoise" result="noiseClipped"/>
  <feFlood flood-color="rgba(119, 87, 75, 0.4)" result="colorFlood"/>
  <feComposite operator="in" in2="noiseClipped" in="colorFlood" result="coloredNoise"/>
  <feMerge>
    <feMergeNode in="shape"/>
    <feMergeNode in="coloredNoise"/>
  </feMerge>
</filter>
