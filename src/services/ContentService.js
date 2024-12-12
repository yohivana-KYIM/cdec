import DataService from "./DataService";

const ContentService = {
  // Récupérer tous les contenus
  async getAllContents() {
    try {
      const response = await DataService.get("/api/contents"); // Route pour récupérer tous les contenus
      return response.data; // Retourne les contenus
    } catch (error) {
      console.error("Erreur lors de la récupération des contenus :", error);
      throw error;
    }
  },

  // Récupérer un contenu par ID
  async getContentById(id) {
    try {
      const response = await DataService.get(`/api/contents/${id}`); // Route pour récupérer un contenu par ID
      return response.data; // Retourne le contenu trouvé
    } catch (error) {
      console.error(
        `Erreur lors de la récupération du contenu ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Créer un nouveau contenu
  async createContent(contentData) {
    try {
      const response = await DataService.post(
        "/api/contents/store",
        contentData
      ); // Route pour créer un contenu
      return response.data; // Retourne le contenu créé
    } catch (error) {
      console.error("Erreur lors de la création du contenu :", error);
      throw error;
    }
  },

  // Mettre à jour un contenu existant
  async updateContent(id, contentData) {
    try {
      const response = await DataService.put(
        `/api/contents/update/${id}`,
        contentData
      ); // Route pour mettre à jour un contenu
      return response.data; // Retourne le contenu mis à jour
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour du contenu ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Supprimer un contenu
  async deleteContent(id) {
    try {
      const response = await DataService.delete(`/api/contents/destroy/${id}`); // Route pour supprimer un contenu
      return response.data; // Retourne la réponse après suppression
    } catch (error) {
      console.error(
        `Erreur lors de la suppression du contenu ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Récupérer les contenus de type "actualite"
  async getActualite() {
    try {
      const response = await DataService.get("/api/contents/actualite"); // Route pour récupérer les actualités
      return response.data; // Retourne les actualités
    } catch (error) {
      console.error("Erreur lors de la récupération des actualités :", error);
      throw error;
    }
  },

  // Récupérer les contenus de type "publication"
  async getPublication() {
    try {
      const response = await DataService.get("/api/contents/publication"); // Route pour récupérer les publications
      return response.data; // Retourne les publications
    } catch (error) {
      console.error("Erreur lors de la récupération des publications :", error);
      throw error;
    }
  },

  // Récupérer les contenus de type "communique"
  async getCommunique() {
    try {
      const response = await DataService.get("/api/contents/communique"); // Route pour récupérer les communiqués
      return response.data; // Retourne les communiqués
    } catch (error) {
      console.error("Erreur lors de la récupération des communiqués :", error);
      throw error;
    }
  },

  // Récupérer les contenus de type "interview"
  async getInterview() {
    try {
      const response = await DataService.get("/api/contents/interview"); // Route pour récupérer les interviews
      return response.data; // Retourne les interviews
    } catch (error) {
      console.error("Erreur lors de la récupération des interviews :", error);
      throw error;
    }
  },

  // Récupérer les contenus de type "mediatheque"
  async getMediatheque() {
    try {
      const response = await DataService.get("/api/contents/mediatheque"); // Route pour récupérer les médiathèques
      return response.data; // Retourne les médiathèques
    } catch (error) {
      console.error("Erreur lors de la récupération des médiathèques :", error);
      throw error;
    }
  },
};

export default ContentService;
