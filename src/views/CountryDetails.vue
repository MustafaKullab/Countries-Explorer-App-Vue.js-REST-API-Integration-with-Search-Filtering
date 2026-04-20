<template>
  <div class="CountryDetails my-5">
    <div class="container-lg">
      <div class="back">
        <button
          class="back-button btn btn-transparent border shadow d-flex gap-2 align-items-center"
          @click="router.go(-1)"
        >
          <i class="bi bi-arrow-left"></i> Back
        </button>
      </div>

      <div class="row justify-content-center gap-3 my-5" v-if="country">
        <div class="image col-md-5 mb-5">
          <img
            :src="country.flags?.png"
            style="width: 100%; height: 350px"
            :alt="country.name?.common"
            class="rounded-2 shadow"
          />
        </div>

        <div class="col-md-6 row">
          <div class="col-md-6 mb-2">
            <div class="countryName">
              <h2 class="fw-bold">{{ Object.values(country.name?.common).join("") || "N/A" }}</h2>
            </div>
            <div class="nativeName mb-2">
              <strong>Native Name:</strong>
              {{ Object.values(country.name.nativeName)[0].common || "N/A" }}
            </div>
            <div class="population mb-2">
              <strong>Population:</strong> {{ country.population || "N/A" }}
            </div>
            <div class="region mb-2"><strong>Region:</strong> {{ country.region || "N/A" }}</div>
            <div class="subRegion mb-2">
              <strong>Sub Region:</strong> {{ country.subregion || "N/A" }}
            </div>
            <div class="subRegion">
              <strong>Capital:</strong> {{ Object.values(country.capital)[0] || "N/A" }}
            </div>
          </div>

          <div class="col-md-6">
            <div class="toplevel mb-2">
              <strong>Top Level Domain:</strong> {{ Object.values(country.tld)[0] || "N/A" }}
            </div>
            <div class="currencies mb-2">
              <strong>Currencies:</strong>
              {{ Object.values(country.currencies)[0].name }} =>
              {{ Object.values(country.currencies)[0].symbol || "N/A" }}
            </div>
            <div class="languages mb-2">
              <strong>Languages:</strong>
              <span
                class="mx-1"
                v-for="language in Object.values(country.languages)"
                :key="language"
              >
                {{ language }},
              </span>
            </div>
          </div>

          <div class="col-md-12">
            <div v-if="borders.length" class="mt-4">
              <span class="fw-bold">Border Countries: </span>
              <button
                v-for="border in borders"
                :key="border?.cca3"
                class="btn btn-sm btn-outline-secondary me-2 shadow-sm ms-2 mb-2"
                @click="goToCountry(border)"
              >
                {{ border?.name?.common || "N/A" }}
                <!-- عشان نجيب اسم الدولة بشكل كامل وليس كود -->
              </button>
            </div>

            <div v-else class="mt-4">
              <span>No Border Countries</span>
            </div>
          </div>
        </div>
      </div>

      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// Data Router
const route = useRoute();
const router = useRouter();

// Data
const country = ref(null);
const borders = ref([]); // متغير لتخزين دول الجوار

// Watch Change Of Router Name

watch(
  // واتش  لمراقبة اي تغيير يحدث على قيمة اسم الدولة بعدها مباشرة يحدث جلب البيانات
  () => route.params.name,
  async () => {
    await getCountry();
  },
);

async function getCountry() {
  const target = route.params.name;
  try {
    await fetch(
      `https://restcountries.com/v3.1/name/${target}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`,
    )
      .then((res) => res.json())
      .then((data) => (country.value = data[0]));

    const codes = country.value.borders.join(","); // متغير نخزن فيه الدول المجاورة ونحولها لنص ما بينه فاصلة
    if (codes) {
      // اذا كان هناك دول جوار
      await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`) // جيبلي دول الجوار وخزنهم في المتغير اللي عرفناه
        .then((res) => res.json())
        .then((data) => (borders.value = data));
    } else {
      // والا
      borders.value = []; // خلي المتغير فاضي
    }
  } catch (err) {
    console.error("Faild To Fetch Data", err);
    country.value = [];
    borders.value = [];
  }
}

function goToCountry(border) {
  // دالة جلب دول الجوار
  router.push({ name: "countryDetails", params: { name: border.name.common } }); // لما تضغط ع اي دولة وديني عليها من خلال الاسم الشائع
}

onMounted(() => {
  getCountry();
});
</script>
