new TypeIt("#myElement", {
    strings: "hola mundo!",
  })

  .type(' soy <span class="place">santiago</span>', { delay: 400 })
  .delete(".place", { delay: 800, instant: true })
  .type(' <span class="place">santiago</span>', { delay: 400 })

  .go();