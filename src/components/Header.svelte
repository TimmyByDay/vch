<script>
  import { deliveryIcons } from "../data/delivery";
  import { headerLinks } from "../data/navigation";

  let { currentPath = "/", deliveryLinks = [], phone = "" } = $props();

  let cleanPath = $derived(currentPath.replace(/\/$/, "") || "/");
  let open = $state(false);
  let orderOpen = $state(false);

  function handleKeydown(e) {
    if (e.key === "Escape") {
      open = false;
      orderOpen = false;
    }
  }

  function handleBackdrop(e) {
    if (e.target === e.currentTarget) {
      open = false;
      orderOpen = false;
    }
  }

  function handleWindowClick(e) {
    if (orderOpen && !e.target.closest("[data-order-dropdown]")) {
      orderOpen = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleWindowClick} />
<svelte:body class:overflow-hidden={open} />

<header class="sticky top-0 z-50 bg-white/70 backdrop-blur-md text-neutral-900 h-16">
  <div class="max-w-5xl mx-auto px-4 h-full flex items-center">
    <a href="/" class="text-lg font-bold font-serif tracking-tight">
      Vons Coffee House
    </a>

    <div class="flex items-center gap-6 ml-auto">
      <nav class="hidden md:flex items-center gap-6">
        {#each headerLinks as { href, label }}
          <a
            href={href}
            class={"font-serif" + (cleanPath === href
              ? " border-b-2 border-accent pb-1"
              : "")}
          >
            {label}
          </a>
        {/each}
      </nav>

      <div class="flex items-center gap-2" data-order-dropdown>
      <div class="hidden md:relative md:block">
        <button
          class="border border-primary hover:bg-primary hover:text-neutral-50 cursor-pointer text-neutral-900 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors"
          onclick={() => orderOpen = !orderOpen}
          aria-haspopup="true"
          aria-expanded={orderOpen}
        >
          ORDER NOW
        </button>

        {#if orderOpen}
          <div class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl z-50">
            <div class="pt-2 pb-3">
            {#each deliveryLinks as link, i}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onclick={() => orderOpen = false}
                class="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm text-neutral-900 hover:bg-neutral-50/30 transition-colors"
              >
                <span class="w-5 h-5 flex-shrink-0 flex items-center justify-center icon-svg" style:color={link.color}>
              {@html deliveryIcons[link.name]}
                </span>
                <span>{link.name}</span>
              </a>
            {/each}
            </div>
          </div>
        {/if}
      </div>

      <button
        class="md:hidden p-2"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onclick={() => open = !open}
      >
        {#if open}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
    </div>
  </div>
</header>

<div
  class="md:hidden fixed inset-0 z-40 transition-transform duration-300"
  class:translate-x-full={!open}
  onclick={handleBackdrop}
  role="presentation"
>
  <nav class="w-full h-full bg-white flex flex-col items-center justify-center gap-6 md:gap-8">
    {#each headerLinks as { href, label }}
      <a
        href={href}
        onclick={() => open = false}
        class={"text-xl md:text-2xl font-medium font-serif text-neutral-900 " + (cleanPath === href
          ? "border-l-4 border-accent pl-3"
          : "")}
      >
        {label}
      </a>
    {/each}

    <div class="w-px h-8 bg-neutral-900/20"></div>

    <div class="max-w-xs">
      <p class="text-xl md:text-2xl font-medium text-neutral-900 text-center mb-4 md:mb-6">Order Now</p>
      <div class="space-y-4 md:space-y-5 flex flex-col items-start">
        {#each deliveryLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onclick={() => open = false}
            class="flex items-center gap-3 text-lg text-neutral-900/80 hover:text-neutral-900 transition-colors"
          >
            <span class="w-6 h-6 flex-shrink-0 flex items-center justify-center icon-svg" style:color={link.color}>
              {@html deliveryIcons[link.name]}
            </span>
            <span>{link.name}</span>
          </a>
        {/each}
      </div>
    </div>
    {#if phone}
      <div class="w-px h-8 bg-neutral-900/20"></div>
      <div>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          onclick={() => open = false}
          class="flex items-center gap-3 text-lg text-neutral-900/80 hover:text-neutral-900 transition-colors"
        >
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{phone}</span>
        </a>
      </div>
    {/if}
  </nav>
</div>
