<template>
  <div
    class="relative w-full min-h-screen bg-center bg-no-repeat bg-cover"
    style="background-image: url('/interviews.jpg')"
  >
    <br />

    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="relative z-10 flex items-center justify-center h-full p-4">
      <div class="w-full max-w-lg p-8 bg-[#F0DF74] rounded-xl shadow-2xl">
        <div class="flex items-center justify-between">
          <h1 class="text-4xl font-extrabold text-[#324C9C]">
            Entretien Professionnel
          </h1>
          <div class="flex items-center space-x-2 text-[#324C9C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span>Évaluation complète</span>
          </div>
        </div>

        <p class="mt-6 text-lg font-medium text-[#324C9C]">
          Préparez-vous à démontrer vos compétences, partager votre parcours et
          mettre en valeur votre potentiel unique.
        </p>

        <div class="flex items-center space-x-4 text-[#324C9C] mt-6">
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Parcours personnalisé</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Évaluation complète</span>
          </div>
        </div>

        <div class="flex justify-between mt-8 space-x-4">
          <button
            class="flex-1 px-6 py-3 text-white bg-[#324C9C] rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F0DF74] focus:ring-opacity-50"
          >
            Commencer l'Entretien
          </button>
          <button
            class="flex-1 px-6 py-3 text-[#324C9C] border-2 border-[#324C9C] rounded-lg hover:bg-[#324C9C] hover:text-white transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F0DF74]"
          >
            En Savoir Plus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interviews",
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
