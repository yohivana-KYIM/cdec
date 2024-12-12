<template>
  <div
    class="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8"
  >
    <div
      class="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
    >
      <!-- Left Column - Background Image -->
      <div class="hidden md:block relative">
        <img
          src="/images/login/login.jpg"
          alt="Registration Background"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-opacity-30 bg-black"
        >
          <div class="text-center text-white px-6">
            <h1 class="text-5xl font-bold mb-4">Bienvenue</h1>
            <p class="text-xl opacity-90">
              Créez votre compte et rejoignez notre communauté
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column - Registration Form -->
      <div class="p-6 md:p-12 overflow-y-auto max-h-screen bg-white">
        <h2 class="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Inscription
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Personal Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name Field -->
            <div>
              <label
                for="name"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Nom *
              </label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
          </div>

          <!-- Password Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="relative">
              <label
                for="password"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Mot de passe *
              </label>
              <input
                v-model="formData.password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute right-3 top-9 text-gray-500 hover:text-blue-600 transition"
              >
                <span v-if="showPassword">👁️</span>
                <span v-else>🙈</span>
              </button>
            </div>

            <div class="relative">
              <label
                for="password_confirmation"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirmer le mot de passe *
              </label>
              <input
                v-model="formData.password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                id="password_confirmation"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
              <button
                type="button"
                @click="toggleConfirmPasswordVisibility"
                class="absolute right-3 top-9 text-gray-500 hover:text-blue-600 transition"
              >
                <span v-if="showConfirmPassword">👁️</span>
                <span v-else>🙈</span>
              </button>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="adresse"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Adresse *
              </label>
              <input
                v-model="formData.adresse"
                type="text"
                id="adresse"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>

            <div>
              <label
                for="numero_telephone"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Numéro de téléphone *
              </label>
              <input
                v-model="formData.numero_telephone"
                type="text"
                id="numero_telephone"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>
          </div>

          <!-- Location Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="pays_id"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Pays *
              </label>
              <select
                v-model="selectedPaysId"
                id="pays_id"
                required
                @change="handlePaysChange"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              >
                <option value="">Sélectionnez un pays</option>
                <option
                  v-for="pays in paysList"
                  :key="pays.id"
                  :value="pays.id"
                >
                  {{ pays.nom }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="ville_id"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Ville *
              </label>
              <select
                v-model="formData.ville_id"
                id="ville_id"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              >
                <option value="">Sélectionnez une ville</option>
                <option
                  v-for="ville in villesList"
                  :key="ville.id"
                  :value="ville.id"
                >
                  {{ ville.nom }}
                </option>
              </select>
            </div>
          </div>

          <!-- Additional Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="numero_fiscal"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Numéro fiscal *
              </label>
              <input
                v-model="formData.numero_fiscal"
                type="text"
                id="numero_fiscal"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>

            <div>
              <label
                for="etat_civil"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                État civil *
              </label>
              <select
                v-model="formData.etat_civil"
                id="etat_civil"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              >
                <option value="">Sélectionnez votre état civil</option>
                <option value="Célibataire">Célibataire</option>
                <option value="Marié(e)">Marié(e)</option>
                <option value="Divorcé(e)">Divorcé(e)</option>
                <option value="Veuf(ve)">Veuf(ve)</option>
              </select>
            </div>
          </div>

          <!-- Personal Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="datenaissance"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Date de naissance *
              </label>
              <input
                v-model="formData.datenaissance"
                type="date"
                id="datenaissance"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
              <span
                v-if="errors.datenaissance"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.datenaissance }}
              </span>
            </div>

            <div>
              <label
                for="sexe"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Sexe *
              </label>
              <select
                v-model="formData.sexe"
                id="sexe"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              >
                <option value="">Sélectionnez votre sexe</option>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
              </select>
            </div>
          </div>

          <!-- Action Buttons -->
          <div
            class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 pt-8"
          >
            <button
              type="submit"
              class="w-full md:w-auto flex-grow px-8 py-3 bg-[#009639] text-white rounded-lg hover:bg-[#007d30] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#009639] focus:ring-opacity-50 shadow-lg"
            >
              Terminer l'inscription
            </button>
            <button
              @click="redirectToSponsor"
              type="button"
              class="w-full md:w-auto flex-grow px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
            >
              Devenir partenaire
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PaysService from "../../../services/PaysService";
import VilleService from "../../../services/VilleService";
import { useAuthStore } from "../../../stores/auth";
import Swal from "sweetalert2";

export default {
  name: "MemberAccess",
  setup() {
    const authStore = useAuthStore();
    const formData = ref({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      adresse: "",
      numero_telephone: "",
      numero_fiscal: "",
      pays_id: "",
      ville_id: "",
      etat_civil: "",
      datenaissance: "",
      sexe: "",
    });
    const paysList = ref([]);
    const villesList = ref([]);
    const selectedPaysId = ref("");
    const selectedVilleId = ref("");
    const errors = ref({});
    const isLoading = ref(false);
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleConfirmPasswordVisibility = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
    };

    const handlePaysChange = async () => {
      selectedVilleId.value = "";
      villesList.value = [];
      if (selectedPaysId.value) {
        try {
          isLoading.value = true;
          const response = await VilleService.getVillesByPays(
            selectedPaysId.value
          );
          villesList.value = Array.isArray(response)
            ? response
            : response.data || [];
          formData.value.pays_id = selectedPaysId.value;
        } catch (error) {
          console.error("Erreur lors du chargement des villes:", error);
          Swal.fire({
            title: "Erreur",
            text: "Impossible de charger les villes. Veuillez réessayer.",
            icon: "error",
          });
        } finally {
          isLoading.value = false;
        }
      }
    };

    onMounted(async () => {
      try {
        const response = await PaysService.getAllPays();
        paysList.value = response.data?.data || response.data || [];
      } catch (error) {
        console.error("Erreur lors du chargement des pays:", error);
        Swal.fire({
          title: "Erreur",
          text: "Impossible de charger la liste des pays. Veuillez réessayer.",
          icon: "error",
        });
      }
    });

    const validateDateOfBirth = (date) => {
      const today = new Date();
      const birthDate = new Date(date);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1;
      }
      return age;
    };

    const validateForm = () => {
      const errors = {};

      if (validateDateOfBirth(formData.value.datenaissance) < 18) {
        errors.datenaissance = "Vous devez avoir au moins 18 ans.";
      }

      if (formData.value.password !== formData.value.password_confirmation) {
        errors.password = "Les mots de passe ne correspondent pas.";
      }

      if (formData.value.password && formData.value.password.length < 8) {
        errors.password =
          "Le mot de passe doit contenir au moins 8 caractères.";
      }

      return errors;
    };

    const handleSubmit = async () => {
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length > 0) {
        errors.value = validationErrors;
        return;
      }

      try {
        isLoading.value = true;
        await authStore.registerUsager(formData.value);

        Swal.fire({
          title: "Succès!",
          text: "Inscription réussie! Vous allez être redirigé vers la page de connexion.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Reset form
          Object.keys(formData.value).forEach((key) => {
            formData.value[key] = "";
          });
          // Redirect to login page or dashboard
          window.location.href = "/login";
        });
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);

        let errorMessage = "Une erreur est survenue lors de l'inscription.";
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
        if (error.response?.data?.errors) {
          errors.value = error.response.data.errors;
        }

        Swal.fire({
          title: "Erreur",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      } finally {
        isLoading.value = false;
      }
    };

    const redirectToSponsor = () => {
      window.location.href = "/sponsor";
    };

    return {
      formData,
      paysList,
      villesList,
      selectedPaysId,
      selectedVilleId,
      errors,
      isLoading,
      showPassword,
      showConfirmPassword,
      togglePasswordVisibility,
      toggleConfirmPasswordVisibility,
      handlePaysChange,
      handleSubmit,
      redirectToSponsor,
    };
  },
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  border-radius: 4px;
  margin-right: 2px;
  opacity: 0.6;
  filter: invert(0.8);
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

/* Smooth transitions */
.form-control,
select,
input,
button {
  transition: all 0.3s ease;
}

/* Custom focus states */
input:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

/* Error state styling */
.error {
  border-color: #ef4444;
}

.error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
}
</style>
