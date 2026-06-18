<script>
  import { siInstagram, siFacebook } from "simple-icons";
  import { withFill } from "../data/icons";
  import { navLinks } from "../data/navigation";

  let {
    address = "",
    hours = "",
    phone = "",
    email = "",
    instagram = "",
    facebook = "",
    deliveryLinks = [],
  } = $props();

  const icons = {
    Instagram: withFill(siInstagram.svg),
    Facebook: withFill(siFacebook.svg),
  };
</script>

<footer class="border-t border-neutral-200 bg-neutral-100 text-neutral-800">
  <div class="max-w-5xl mx-auto px-4 py-12">
    <div class="grid gap-10 md:grid-cols-4">
      <div>
        <h3 class="font-serif text-sm font-semibold text-neutral-600 mb-4 uppercase tracking-wider">
          Navigate
        </h3>
        <ul class="space-y-2">
          {#each navLinks as { href, label }}
            <li>
              <a href={href} class="text-neutral-700 hover:text-primary transition-colors text-sm">
                {label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="font-serif text-sm font-semibold text-neutral-600 mb-4 uppercase tracking-wider">
          Contact
        </h3>
        <div class="space-y-3 text-sm">
          {#if phone}
            <div>
              <a href="tel:{phone.replace(/\s/g, "")}" class="text-neutral-700 hover:text-primary transition-colors">
                {phone}
              </a>
            </div>
          {/if}
          {#if email}
            <div>
              <a href="mailto:{email}" class="text-neutral-700 hover:text-primary transition-colors">
                {email}
              </a>
            </div>
          {/if}
          {#if hours}
            <div>
              {#each hours.split(', ') as entry}
                {@const space = entry.lastIndexOf(' ')}
                {@const day = entry.slice(0, space)}
                {@const time = entry.slice(space + 1)}
                <div>
                  <span class="text-neutral-700">{day}</span><br>
                  <span class="font-bold text-neutral-700">{time}</span>
                </div>
              {/each}
            </div>
          {/if}
          {#if address}
            <div>
              <p class="text-neutral-700">{address}</p>
            </div>
          {/if}
        </div>
      </div>

      <div>
        <h3 class="font-serif text-sm font-semibold text-neutral-600 mb-4 uppercase tracking-wider">
          Order
        </h3>
        <ul class="space-y-2">
          {#each deliveryLinks as { name, url }}
            <li>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-700 hover:text-primary transition-colors text-sm"
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="font-serif text-sm font-semibold text-neutral-600 mb-4 uppercase tracking-wider">
          Connect
        </h3>
        {#if instagram || facebook}
          <div class="flex gap-3">
            {#if instagram}
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-700 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <span class="w-5 h-5 icon-svg">
                  {@html icons.Instagram}
                </span>
              </a>
            {/if}
            {#if facebook}
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-700 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <span class="w-5 h-5 icon-svg">
                  {@html icons.Facebook}
                </span>
              </a>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="border-t border-neutral-200 py-4">
    <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
      <p class="text-sm text-neutral-600">
        &copy; {new Date().getFullYear()} Vons Coffee House
      </p>
      <div class="flex gap-4 text-sm">
        <a href="/terms" class="text-neutral-600 hover:text-neutral-900 transition-colors">
          Terms of Service
        </a>
        <a href="/privacy" class="text-neutral-600 hover:text-neutral-900 transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</footer>
