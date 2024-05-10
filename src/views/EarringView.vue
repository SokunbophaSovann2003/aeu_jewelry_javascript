<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
// import TheProduct from '@/components/TheProduct.vue';
import TheCustomer from '@/components/TheCustomer.vue';
</script>

<template>
  <TheHeader />
  <div class="bg-white dark flex z-20 items-center h-screen overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
      <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 m-auto">
        <span class="w-20 h-2 bg-white mb-12">
        </span>
        <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
          EARRING
        </h1>
        <p class="text-sm mt-5 sm:text-base text-gray-700">
          An earring is a piece of jewelry attached to the ear via a piercing in the earlobe or another external part of
          the ear, or, less often, by some other means. Earrings have been worn in diverse civilizations and historic
          periods, often carrying a cultural significance.
        </p>
      </div>
      <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src="https://i5.walmartimages.com/seo/4-00-Carat-D-VVS1-Round-Brilliant-Cut-Lab-Created-Diamond-Beautiful-Stud-Earrings-for-women-Solid-950-Platinum-Push-Back-Studs_e23279f3-2f5c-4409-837d-1529d126d55a.a00ec3b1c0ab72715011f859f1f15064.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          class="max-w-xs md:max-w-sm m-auto" />
      </div>
    </div>
  </div>
  <!-- =================================================================================== -->

  <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <div v-for="(product, index) in products" :key="index"
      class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <button @click="onErringDetail(product)">
        <img :src="product.image" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72 text-start">
          <span class="text-gray-400 mr-3 uppercase text-xs items-start">{{ product.brand }}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3">${{ product.price }}</p>
            <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </button>
    </div>
  </section>

  <!-- =================================================================================== -->
  <div class="text-center p-10 mt-40">
    <h1 class="font-bold text-4xl mb-4">EARING IN YOUR DREAM</h1>
    <h1 class="text-3xl">Show us your passions, Show us your fashion, Show us yourself</h1>
  </div>
  <div class="p-5 sm:p-8">
    <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      <img v-for="(product, index) in products" :key="index" :src="product.image" alt="" srcset="">
    </div>
  </div>

  <hr class="mt-20">
  <TheCustomer/>
  <TheFooter />
</template>


<script>
import { myData } from '@/data/data';
import { onProductDetail } from '@/funcations/function';

export default {
  data() {
    let earrings = [];
    for (const earring of myData) {
      if (earring.type == "earing") {
        earrings.push(earring);
      }
      
    }
    return {
      products: earrings
    };
  },
  methods: {
    onErringDetail(data) {
      onProductDetail(data);
      this.$router.push("/detail");
      window.scrollTo(0, 0);
    },
  }
  
};
</script>