<template>
  <div class="NavBar" :class="{ dark: mode === 'dark' }">
    <nav class="navbar shadow px-5">
      <a href="#home" class="navbar-brand">
        <span class="fw-bold" @click="router.push({ name: 'home' })">Where in the world</span>
      </a>
      <div class="mode fw-bold cursor-pointer" @click="changeMode">
        <div v-if="mode == 'Dark'" class="d-flex align-items-center gap-2">
          <i class="bi bi-brightness-high"></i> {{ mode == "Dark" ? "Light" : "Dark" }} Mood
        </div>
        <div v-else class="d-flex align-items-center gap-2">
          <i class="bi bi-moon"></i> {{ mode == "Dark" ? "Light" : "Dark" }} Mood
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const mode = ref("Light");

function changeMode() {
  mode.value = mode.value === "Dark" ? "Light" : "Dark";

  localStorage.setItem("theme", mode.value);

  if (mode.value === "Dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "Dark") {
    mode.value = savedTheme;
    document.body.classList.add("dark-theme");
  }
});
</script>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
body.dark-theme {
  .navbar-brand {
    span {
      color: white !important;
    }
  }
}
</style>
