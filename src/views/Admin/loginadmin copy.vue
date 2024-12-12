<template>
  <div
    class="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
  >
    <div class="absolute inset-0 bg-[#2955A9]/5"></div>
    <div
      class="absolute inset-0"
      style="
        background-image: radial-gradient(
          circle at 1px 1px,
          #2955a9 1px,
          transparent 0
        );
        background-size: 40px 40px;
        opacity: 0.03;
      "
    ></div>

    <div class="w-full max-w-lg">
      <div class="p-8 bg-white border border-gray-100 shadow-lg rounded-xl">
        <div class="mb-8 text-center">
          <h2 class="text-2xl font-semibold text-[#2955A9] mb-2">
            Caisse des Dépôts Et Consignations
          </h2>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700"
              >Adresse email</label
            >
            <div class="relative">
              <input
                v-model="email"
                type="email"
                required
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2955A9]/20 focus:border-[#2955A9] transition-all text-gray-900 placeholder-gray-400"
                placeholder="exemple@cdc.fr"
              />
              <span
                class="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-sm font-medium text-gray-700"
                >Mot de passe</label
              >
              <a
                href="#"
                class="text-sm text-[#2955A9] hover:text-[#2955A9]/80 transition-colors"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2955A9]/20 focus:border-[#2955A9] transition-all text-gray-900 placeholder-gray-400"
                placeholder="••••••••"
              />
              <button
                @click.prevent="showPassword = !showPassword"
                type="button"
                class="absolute text-gray-400 transition-colors transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    v-if="!showPassword"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    v-if="!showPassword"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                  <path
                    v-if="showPassword"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 12C18.268 7.943 14.478 5 10 5a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            v-if="error"
            class="p-3 border border-red-100 rounded-lg bg-red-50"
          >
            <p class="text-sm text-red-600">{{ error }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#2955A9] hover:bg-[#2955A9]/90 text-white font-medium py-3 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#2955A9] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          >
            <span class="relative z-10 flex items-center justify-center">
              <span v-if="!loading">Se connecter</span>
              <span v-else class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="none"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Connexion en cours...
              </span>
            </span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-500">
            Un problème de connexion ?
            <a
              href="#"
              class="text-[#2955A9] hover:text-[#2955A9]/80 font-medium"
            >
              Contactez le support
            </a>
          </p>
        </div>
      </div>

      <div class="mt-8 text-center"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const showPassword = ref(false);
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    loading.value = true;
    error.value = "";

    await authStore.login({ email: email.value, password: password.value });
    toast.success("Connexion réussie !");
    router.push("/Admin/dashboard");
  } catch (e) {
    error.value = e.message || "Identifiants incorrects";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active {
  animation: fade-in 0.3s ease-out forwards;
}
</style>
