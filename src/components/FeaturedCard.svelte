<script>
  let {
    name = "",
    description = "",
    price = "",
    vegan = false,
    type = "drink",
  } = $props();

  const gradients = {
    drink: "linear-gradient(135deg, #8E4D31 0%, #5C2E1A 100%)",
    food: "linear-gradient(135deg, #685E30 0%, #3D3620 100%)",
    cakes: "linear-gradient(135deg, #77574B 0%, #4D352E 100%)",
  };

  const gradient = gradients[type] || gradients.drink;
</script>

<div class="group cursor-pointer rounded-xl overflow-hidden h-[340px] sm:h-[290px] lg:h-[270px] flex flex-col">
  <div
    class="flex-1 flex items-center justify-center p-4"
    style="background: {gradient}"
  >
    <span class="text-neutral-50 text-xl md:text-2xl font-bold text-center drop-shadow-md">
      {name}
    </span>
  </div>
  <div
    class="grid transition-[grid-template-rows] duration-300 ease-in-out max-sm:grid-rows-[1fr] sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr]"
  >
    <div class="overflow-hidden min-h-0">
      <div class="pt-3 pb-1 space-y-1">
        <h3 class="font-semibold text-neutral-900">{name}</h3>
        <p class="text-sm text-neutral-600 leading-snug">{description}</p>
        <div class="flex items-center gap-3 pt-1">
          {#if price}
            <span class="font-bold text-accent">{price}</span>
          {/if}
          {#if vegan}
            <span class="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 rounded-full px-2.5 py-0.5">
              <svg class="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M7.47 1.48a.75.75 0 0 1 1.06 0l.72.71a.75.75 0 0 1 0 1.06l-.72.71a.75.75 0 0 1-1.06 0l-.71-.71a.75.75 0 0 1 0-1.06l.71-.71ZM4.69 4.69a.75.75 0 0 1 1.06 0l.35.35a.75.75 0 0 1 0 1.06l-.35.35a.75.75 0 0 1-1.06 0l-.35-.35a.75.75 0 0 1 0-1.06l.35-.35Zm6.62 0a.75.75 0 0 1 0 1.06l-.35.35a.75.75 0 0 1-1.06 0l-.35-.35a.75.75 0 0 1 0-1.06l.35-.35a.75.75 0 0 1 1.06 0ZM8 5.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V6.25A.75.75 0 0 1 8 5.5Z"/>
              </svg>
              Vegan
            </span>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
