<template>
  <section class="section_stat">
    <div class="divider">Principaux Indicateurs de 2023</div>
    <div class="stat_information">
      <div class="wrapper">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="num_information"
        >
          <span class="num" :data-val="stat.value">
            {{ formatValue(stat.value) }}
          </span>
          <hr />
          <span class="text">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = ref([
  { value: 1564, label: "Total des dépôts et consignations ( millions FCFA )" },
  { value: 40, label: "Provisions pour risques et charges ( millions FCFA )" },
  { value: 1587, label: "Total des fonds transféré (millions FCFA)" },
  { value: 3917, label: "Bilan ( millions FCFA )" },
  { value: -1172, label: "Résultat net ( millions FCFA )" },
  { value: 1106, label: "Dépense ( millions FCFA )" },
  { value: 3360, label: "Capital social ( millions FCFA )" },
  { value: null, label: "Placements financiers ( millions FCFA )" },
  { value: null, label: "Revenu ( millions FCFA )" },
]);

const formatValue = (value) => {
  if (value === null) return "........";
  return Math.abs(value).toLocaleString();
};

onMounted(() => {
  const valueDisplays = document.querySelectorAll(".num");
  const interval = 5000;

  valueDisplays.forEach((valueDisplay) => {
    const endValue = parseInt(valueDisplay.getAttribute("data-val") || "0");
    if (endValue === 0) return;

    let startValue = 0;
    const duration = Math.floor(interval / Math.abs(endValue));

    const counter = setInterval(() => {
      startValue += endValue > 0 ? 1 : -1;
      valueDisplay.textContent = Math.abs(startValue).toLocaleString();

      if (Math.abs(startValue) === Math.abs(endValue)) {
        clearInterval(counter);
      }
    }, duration);
  });
});
</script>

<style scoped>
.section_stat {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  color: rgba(220, 165, 16, 1);
  font-weight: 700;
  line-height: 1.5;
  font-size: clamp(1.2rem, 4vw, 2rem);
  margin: 1rem 0;
  text-align: center;
  position: relative;
}

.divider::before,
.divider::after {
  content: "";
  flex-grow: 1;
  height: 3px;
  background-color: rgba(220, 165, 16, 1);
  margin: 0 0.5rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  width: 100%;
  margin-bottom: 3.75rem;
  animation: scale_counter 0.5s ease;
}

@keyframes scale_counter {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

.num_information {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: rgba(50, 76, 156, 1);
  color: #fff;
  border-radius: 5px;
  transition: 0.5s all;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.num_information {
  -webkit-tap-highlight-color: transparent; /* Supprime le surlignement bleu sur iOS */
}

@media (max-width: 576px) {
  .num_information .num {
    font-size: 2rem; /* Ajuste légèrement pour les petits écrans */
  }
}

.num_information::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(220, 165, 16, 1);
  transition: 0.5s;
  z-index: 0;
}

.num_information:hover::before {
  left: 0;
}

.num_information hr {
  width: 30px;
  border: 2px solid white;
  margin: 10px 0;
  position: relative;
  z-index: 1;
}

.num_information:hover {
  color: white;
}

.num_information:hover .num,
.num_information:hover .text {
  color: white;
  z-index: 2;
  position: relative;
}

.num_information span {
  text-align: center;
  text-transform: uppercase;
}

.num_information .num {
  font-size: 3em;
  font-weight: bold;
  transition: 0.5s;
}

.num_information .text {
  font-size: 0.9em;
  line-height: 1.2;
  transition: 0.5s;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .num_information {
    min-height: 180px;
  }

  .num_information .num {
    font-size: 2.5em;
  }

  .num_information .text {
    font-size: 0.8em;
  }
}

@media (max-width: 576px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .num_information {
    min-height: 150px;
  }

  .num_information .num {
    font-size: 2em;
  }

  .num_information .text {
    font-size: 0.7em;
  }

  .divider {
    font-size: clamp(1rem, 4vw, 1.4rem);
  }
}
</style>
