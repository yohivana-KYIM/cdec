<template>
  <div class="bg-[#FFFFF] text-[#324C9C]">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h2
            class="text-4xl font-extrabold text-[#324C9C] sm:text-5xl sm:tracking-tight"
          >
            Bienvenue dans notre Médiathèque
          </h2>
          <p class="mt-3 text-lg text-[#324C9C]">
            Explorez notre vaste collection de livres, de films, de musique et
            bien plus encore. Laissez-vous guider dans un monde de connaissances
            et de divertissement.
          </p>
          <div class="flex mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#324C9C] hover:bg-[#213C7C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F0DF74]"
              >
                Commencer à Naviguer
              </a>
            </div>
            <div class="inline-flex ml-3">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#324C9C] bg-[#F0DF74] hover:bg-[#E8D55E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#324C9C]"
              >
                En Savoir Plus
              </a>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 lg:mt-0 lg:grid-cols-2"
        >
          <div class="flex flex-col items-center">
            <!-- <img class="w-40 h-40 rounded-full" src="book.jpg" alt="Book" /> -->
            <h3 class="mt-2 text-sm font-medium text-[#324C9C]">Livres</h3>
          </div>
          <div class="flex flex-col items-center">
            <!-- <img class="w-40 h-40 rounded-full" src="movie.jpg" alt="Movie" /> -->
            <h3 class="mt-2 text-sm font-medium text-[#324C9C]">Films</h3>
          </div>
          <div class="flex flex-col items-center">
            <img src="/music.png" alt="Music" class="w-40 h-40 rounded-full" />
            <h3 class="mt-2 text-sm font-medium text-[#324C9C]">Musique</h3>
          </div>
          <div class="flex flex-col items-center">
            <!-- <img
                class="w-40 h-40 rounded-full"
                src="magazine.jpg"
                alt="Magazine"
                /> -->
            <h3 class="mt-2 text-sm font-medium text-[#324C9C]">Magazines</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mediatheque",
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
s
