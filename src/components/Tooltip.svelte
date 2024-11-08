<script>
  export let text = "";
  import { onMount } from 'svelte';
  
  let isLargeScreen = false;
  
  onMount(() => {
    const checkScreenSize = () => {
      isLargeScreen = window.innerWidth >= 1024; // lg breakpoint in Tailwind
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  });
</script>

{#if isLargeScreen}
  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center hidden lg:block">
    <p class="px-3 py-1 text-stone-400 text-xs tracking-wider uppercase inline-block">
      {text}
    </p>
  </div>
{/if} 