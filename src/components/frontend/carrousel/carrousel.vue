<template>
  <div
    class="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
  >
    <!-- Transition de groupe pour les images -->
    <transition-group
      name="fade"
      tag="div"
      class="absolute inset-0 w-full h-full"
    >
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.image"
        :class="[
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
          {
            'opacity-100': index === current_index,
            'opacity-0': index !== current_index,
          },
        ]"
        :alt="`Slide ${index + 1}`"
      />
    </transition-group>

    <!-- Texte associé à chaque image -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-8"
    >
      <!-- Titre avec animation -->
      <h1
        v-text="slides[current_index].title"
        class="flex items-center justify-center mb-2 text-2xl font-bold text-center sm:mb-4 sm:text-4xl md:text-5xl text-outline"
      ></h1>

      <!-- Description avec animation d'écriture -->
      <p
        class="mb-4 text-sm text-center sm:mb-8 sm:text-xl md:text-2xl text-contour"
      >
        <span>{{ displayedDescription }}</span>
        <span class="animate-blink">|</span>
      </p>
    </div>

    <!-- Boutons de navigation -->
    <button
      @click="prev_slide"
      class="absolute p-1 transition-all transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full left-2 sm:left-4 top-1/2 sm:p-2 hover:bg-opacity-75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4 sm:w-6 sm:h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      @click="next_slide"
      class="absolute p-1 transition-all transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-2 sm:right-4 top-1/2 sm:p-2 hover:bg-opacity-75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4 sm:w-6 sm:h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "HeroBanner",

  setup() {
    const slides = ref([
      {
        image: "/images/img3.jpg",
        title: "Bienvenue à la Caisse des Dépôts et Consignations",
        description:
          "Des services de consignation et de dépôt fiables pour votre tranquillité d'esprit.",
      },
      {
        image: "/images/img4.jpg",
        title: "La Banque, les Administrations Publiques",
        description: "Au coeur de la finance camerounaise",
      },
      {
        image: "/images/img5.jpg",
        title: "Sécurisez Vos Économies avec la CDEC Cameroun",
        description:
          "Des solutions sur mesure pour la gestion de vos finances personnelles et professionnelles.",
      },
    ]);

    const current_index = ref(0);
    const displayedDescription = ref("");
    let sliderTimer = null;
    let typingTimer = null;

    const preloadImages = () => {
      slides.value.forEach((slide) => {
        const img = new Image();
        img.src = slide.image;
      });
    };

    const start_slider = () => {
      sliderTimer = setInterval(() => {
        next_slide();
      }, 5000);
    };

    const reset_timer = () => {
      clearInterval(sliderTimer);
      start_slider();
    };

    const prev_slide = () => {
      current_index.value =
        (current_index.value - 1 + slides.value.length) % slides.value.length;
      reset_timer();
      start_typing_effect();
    };

    const next_slide = () => {
      current_index.value = (current_index.value + 1) % slides.value.length;
      reset_timer();
      start_typing_effect();
    };

    const start_typing_effect = () => {
      clearTimeout(typingTimer);
      displayedDescription.value = "";
      const description = slides.value[current_index.value].description;
      let index = 0;

      const type = () => {
        if (index < description.length) {
          displayedDescription.value += description[index];
          index++;
          typingTimer = setTimeout(type, 50); // Vitesse de frappe
        }
      };

      type();
    };

    watch(current_index, start_typing_effect);

    onMounted(() => {
      preloadImages();
      start_slider();
      start_typing_effect();
    });

    onBeforeUnmount(() => {
      clearInterval(sliderTimer);
      clearTimeout(typingTimer);
    });

    return {
      slides,
      current_index,
      prev_slide,
      next_slide,
      displayedDescription,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-contour {
  text-shadow: 2px 2px 0 #0d1c02, -1px -1px 0 #0d1c02, 1px -1px 0 #0d1c02,
    -1px 1px 0 #0d1c02, 1px 1px 0 #0d1c02;
}

.text-outline {
  text-shadow: 2px 2px 0 #0d1c02, -1px -1px 0 #0d1c02, 1px -1px 0 #0d1c02,
    -1px 1px 0 #0d1c02, 1px 1px 0 #0d1c02;
}

.animate-blink {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
