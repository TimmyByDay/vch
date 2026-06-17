<script>
  import { siDeliveroo, siUbereats, siJusteat } from "simple-icons";

  const icons = {
    Deliveroo: siDeliveroo.svg.replace("<svg", '<svg fill="currentColor"'),
    "Uber Eats": siUbereats.svg.replace("<svg", '<svg fill="currentColor"'),
    "Just Eat": siJusteat.svg.replace("<svg", '<svg fill="currentColor"'),
  };
  export let currentPath = "/";
  const cleanPath = currentPath.replace(/\/$/, "") || "/";
  let open = false;
  let orderOpen = false;

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "/specials", label: "Specials" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const deliveryLinks = [
    {
      name: "Deliveroo",
      url: "https://deliveroo.co.uk/menu/Saint%2520Austell/saint-austell/vons-coffee-house",
      color: "#00CCBC",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/gb/store/vons-coffee-house/IqSP392jW-qI4UTCy_r45w?srsltid=AfmBOoqB2xCXfU2RBNNaI87pCPBiVwxbLejSvZ--uxy7lOSzJ36VubsG",
      color: "#06C167",
    },
    {
      name: "Just Eat",
      url: "https://www.just-eat.co.uk/restaurants-vons-coffee-house-st-austell",
      color: "#FE5000",
    },
  ];

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

<svelte:window on:keydown={handleKeydown} on:click={handleWindowClick} />
<svelte:body class:overflow-hidden={open} />

<header class="sticky top-0 z-50 bg-neutral-900 text-white h-16">
  <div class="max-w-5xl mx-auto px-4 h-full flex items-center relative">
    <a href="/" class="text-lg font-bold tracking-tight">
      Vons Coffee House
    </a>

    <nav class="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
      {#each links as { href, label }}
        <a
          href={href}
          class={cleanPath === href
            ? "border-b-2 border-accent pb-1"
            : ""}
        >
          {label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2 ml-auto" data-order-dropdown>
      <div class="hidden md:relative md:block">
        <button
          class="bg-primary hover:bg-accent/80 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
          on:click={() => orderOpen = !orderOpen}
          aria-haspopup="true"
          aria-expanded={orderOpen}
        >
          Order Here
        </button>

        {#if orderOpen}
          <div class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl z-50">
            <button
              class="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              on:click={() => orderOpen = false}
              aria-label="Close"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="pt-3 pb-1">
            {#each deliveryLinks as link, i}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                on:click={() => orderOpen = false}
                class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span class="w-5 h-5 flex-shrink-0 flex items-center justify-center icon-svg" style="color: {link.color}">
                  {@html icons[link.name]}
                </span>
                <span>{link.name}</span>
              </a>
              {#if i < deliveryLinks.length - 1}
                <div class="mx-4 border-t border-gray-100"></div>
              {/if}
            {/each}
            </div>
          </div>
        {/if}
      </div>

      <button
        class="md:hidden p-2"
        aria-label="Toggle navigation"
        aria-expanded={open}
        on:click={() => open = !open}
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
</header>

<div
  class="md:hidden fixed inset-0 z-40 transition-transform duration-300"
  class:translate-x-full={!open}
  on:click={handleBackdrop}
  role="presentation"
>
  <nav class="w-full h-full bg-neutral-900/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
    {#each links as { href, label }}
      <a
        href={href}
        on:click={() => open = false}
        class={"text-2xl font-medium text-white " + (cleanPath === href
          ? "border-l-4 border-accent pl-3"
          : "")}
      >
        {label}
      </a>
    {/each}

    <div class="w-px h-8 bg-white/20"></div>

    <div class="max-w-xs">
      <p class="text-2xl font-medium text-white text-center mb-6">Order Now</p>
      <div class="space-y-5 flex flex-col items-start">
        {#each deliveryLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            on:click={() => open = false}
            class="flex items-center gap-3 text-lg text-white/80 hover:text-white transition-colors"
          >
            <span class="w-6 h-6 flex-shrink-0 flex items-center justify-center icon-svg" style="color: {link.color}">
              {@html icons[link.name]}
            </span>
            <span>{link.name}</span>
          </a>
        {/each}
      </div>
    </div>
  </nav>
</div>

<style>
  :global(.icon-svg svg) {
    width: 100%;
    height: 100%;
  }
</style>
