const fetchImages = (glob: Record<string, any>) => {
    const images: Record<string, string> = {};
    for (const path in glob) {
      const key = path.split("/").pop()?.replace(/\.[^/.]+$/, ""); // Extract file name without extension
      if (key) images[key] = glob[path].default;
    }
    return images;
  };
  
  export const images = fetchImages(
    import.meta.glob("../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}", { eager: true })
  );
  
  export const defaultImages = fetchImages(
    import.meta.glob("../assets/pokemons/default/*.{png,jpg,jpeg,svg}", { eager: true })
  );
  