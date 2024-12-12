<template>
  <section class="body_actualites">
    <div class="titre_actualite">
      <h1>Gouvernances</h1>
    </div>
  </section>
  <div
    class="min-h-screen bg-center bg-cover"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    aria-label="Image de fond représentant la gouvernance"
  >
    <div
      class="min-h-screen p-6 duration-700 ease-in-out transform translate-y-6 opacity-0 bg-white/80 md:p-10 animate-fade-in"
    >
      <div class="max-w-4xl mx-auto">
        <!-- <section class="organigramme">
          <div
            class="divider text-[rgba(220,165,16,1)] font-bold opacity-0 transform -translate-y-4 duration-700 ease-in-out animate-fade-in-down"
          >
            GOUVERNANCE
          </div>
        </section> -->
        <div
          class="grid gap-8 duration-700 ease-in-out transform translate-y-6 opacity-0 md:grid-cols-2 animate-fade-in-up"
        >
          <div
            class="bg-[#F0DF74]/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 class="text-2xl font-semibold text-[#324C9C] mb-4">
              TUTELLE TECHNIQUE / FINANCIÈRE
            </h2>
            <p class="font-medium text-gray-800">
              Ministère des Finances (MINFI)
            </p>
          </div>
          <div
            class="bg-[#324C9C]/5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 class="text-2xl font-semibold text-[#324C9C] mb-4">
              CONSEIL D'ADMINISTRATION
            </h2>
            <h3 class="font-bold text-[#324C9C] mb-2">PRÉSIDENT</h3>
            <div
              class="space-y-4 duration-700 ease-in-out transform translate-x-6 opacity-0 animate-fade-in-right"
            >
              <div
                class="p-4 transition-all duration-300 bg-white rounded-md shadow-sm hover:shadow-md"
              >
                <p class="font-semibold text-gray-800">
                  M. MOH TANGONGHO Sylvester
                </p>
                <p class="text-gray-600">
                  Directeur Général du Trésor, de la Coopération Financière et
                  Monétaire
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-8 bg-[#F0DF74]/5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 transform translate-y-6 duration-700 ease-in-out animate-fade-in-up"
        >
          <h2 class="text-2xl font-semibold text-[#324C9C] mb-6">
            MEMBRES DU CONSEIL D'ADMINISTRATION
          </h2>
          <div class="grid gap-4 md:grid-cols-2">
            <div
              v-for="(member, index) in boardMembers"
              :key="index"
              class="p-4 transition-all duration-300 bg-white rounded-md shadow-sm hover:shadow-md animate-fade-in"
              :style="`animation-delay: ${index * 0.2}s;`"
            >
              <p class="font-semibold text-gray-800">{{ member.name }}</p>
              <p class="text-gray-600">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "../../../assets/gouvernance.jpg";

export default {
  name: "Gouvernance",
  data() {
    return {
      backgroundImage, // Use the imported image
      boardMembers: [
        {
          name: "M. AYEM MOGER Jean-Claude",
          role: "Représentant de la Présidence de la République",
        },
        {
          name: "M. NOAH Jean François",
          role: "Représentant des Services du Premier ministre",
        },
        {
          name: "M. METOU'OU AMVELA Constant Roger",
          role: "Représentant du Ministère des Finances",
        },
        {
          name: "Mme. KAGHERE RIPA Palimatou Nounou",
          role: "Représentant du Ministère de l'Économie, de la Planification et de l'Aménagement du Territoire",
        },
        {
          name: "M. ANGOUING Michel Ange",
          role: "Représentant du Ministère de la Justice",
        },
      ],
    };
  },
};
</script>

<style>
@import "../../../css/lacdec.css";

.min-h-screen {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.7s ease-in-out forwards;
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.7s ease-in-out forwards;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-in-out forwards;
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(6px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-right {
  animation: fade-in-right 0.7s ease-in-out forwards;
}
</style>
