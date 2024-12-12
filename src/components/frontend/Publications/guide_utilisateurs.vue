<template>
  <section class="content">
    <div class="body_actualite">
      <div class="titre_actualite">
        <h1>Mon guide CDEC</h1>
      </div>
    </div>
    <div class="faq">
      <div class="question" @click="toggleAnswer(1)">
        <h3>Question 1</h3>
        <div class="answer" :class="{ show: activeQuestion === 1 }">
          <p>
            NBCUniversal’s Paris Games coverage will show how Search, Google
            Maps Platform and Gemini help make it easier to explore and learn
            more about the Games.
          </p>
        </div>
      </div>
      <div class="question" @click="toggleAnswer(2)">
        <h3>Question 2</h3>
        <div class="answer" :class="{ show: activeQuestion === 2 }">
          <p>
            NBCUniversal’s Paris Games coverage will show comment Search, Google
            Maps Platform et Gemini facilitent l'exploration et l'apprentissage
            des Jeux.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeQuestion = ref(null);

const toggleAnswer = (questionNumber) => {
  activeQuestion.value =
    activeQuestion.value === questionNumber ? null : questionNumber;
};
</script>

<style scoped>
@import "../../../css/guide_utilisateurs.css";
.faq {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.faq .answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  opacity: 0;
}

.question {
  margin-top: 1em;
}

.question h3 {
  font-size: 1.5em;
}

.answer {
  margin: 1em 0;
}
.answer p {
  font-size: 1em;
  line-height: 25px;
  text-align: justify;
}

.faq .question h3 {
  cursor: pointer;
  transition: color 0.3s;
  background-color: rgba(50, 76, 156, 1);
  padding: 1em 1em;
}

.faq .question h3:hover {
  color: #fff;
}

.faq .answer.show {
  max-height: 100px; /* Adjust based on content */
  opacity: 1;
}
</style>
