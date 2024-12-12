<template>
  <main>
    <!-- <Loader /> -->
    <Layout v-if="!isAdminRoute">
      <router-view />
    </Layout>
    <AdminLayout v-else-if="isAdminRoute">
      <router-view />
    </AdminLayout>
    <router-view v-else />
  </main>
</template>

<script>
import Layout from "./components/frontend/layout/Layout.vue";
import AdminLayout from "./components/Admin/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
    AdminLayout,
  },

  computed: {
    isAdminRoute() {
      // Vérifie si la route actuelle est une route Admin
      return this.$route.path.startsWith("/Admin");
    },
    // isDocsRoute() {
    //   // Vérifie si la route actuelle est une route Docs
    //   return this.$route.path.startsWith("/docs");
    // },
  },
};
</script>

<style>
/* Styles globaux si nécessaire */
</style>
