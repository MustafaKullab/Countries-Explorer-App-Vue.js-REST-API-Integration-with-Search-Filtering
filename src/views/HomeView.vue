<template>
  <div class="CountriesPage bg-light py-5">
    <div class="container-lg">
      <form action="" class="row mb-4 justify-content-between align-items-center">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-text text-muted" id="search"
              ><i class="bi bi-search"></i
            ></span>
            <input
              v-model="searchFilter"
              type="text"
              class="form-control"
              placeholder="Search for a country..."
              aria-label="Search"
              aria-describedby="search"
            />
          </div>
        </div>
        <div class="col-md-3 text-md-end">
          <div class="dropdown">
            <select class="dropdown border-0 btn btn-secondary" v-model="selectedFilter">
              <option value="" disabled hidden selected>Filter by region</option>
              <option value="">All</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-sm-4 col-md-3 mb-4" v-for="(country, i) in countriesFilter" :key="i">
          <div class="country-box rounded-2 bg-white overflow-hidden">
            <div class="image">
              <img
                :src="country.flags.png"
                class="img-fluid"
                style="height: 200px; width: 100%"
                alt=""
              />
            </div>
            <div class="header p-3">
              <h4 class="country-title m-0">{{ country.name.common }}</h4>
            </div>
            <div class="body px-3 pt-0 pb-3">
              <div class="population">
                <strong class="">Population </strong>{{ country.population }}
              </div>
              <div class="region"><strong class="">Region </strong>{{ country.region }}</div>
              <div class="capital">
                <strong class="">Capital </strong>{{ countr?.capital?.[0] }}
              </div>
            </div>
            <div class="showDetalis p-3 text-center">
              <button
                class="btn btn-primary"
                @click="
                  router.push({ name: 'countryDetails', params: { name: country.name.common } })
                "
              >
                Show Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// Data
const countries = ref([]);
const searchFilter = ref("");
const selectedFilter = ref("");
const router = useRouter();

// Function To Get Data
async function getData() {
  await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
    .then((res) => res.json())
    .then((data) => (countries.value = data));
}

onMounted(async () => {
  await getData();
});

// Computed To Filter Search
const countriesFilter = computed(() => {
  const termSearch = searchFilter.value.toLowerCase();
  const termSelect = selectedFilter.value.toLowerCase();
  return countries.value.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(termSearch) &&
      country.region.toLowerCase().includes(termSelect)
    );
  });
});
</script>

<style lang="scss">
.dark {
  background-color: black;
  color: white;
}
// @media (max-width: 991px) {
//   .country-box .image img {
//     object-fit: contain;
//     object-position: center;
//     height: 100% !important;
//   }
// }
</style>
