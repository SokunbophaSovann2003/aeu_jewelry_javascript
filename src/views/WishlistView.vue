<script setup>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>


<script>
import { onProductDetail } from '@/funcations/function';

export default {
  data() {
    const data = localStorage.getItem("wishlist");
        const wishlistData = JSON.parse(data);
        console.log("My wishlist iss ", wishlistData);
        return {
            products: wishlistData,
        };
  },
  methods: {
    onDetail(data) {
      onProductDetail(data);
      this.$router.push("/detail");
      window.scrollTo(0, 0);
    },
  }
  
};
</script>

<template>
  <main class="dark bg-white relative overflow-scroll h-screen">
    <TheHeader />
    <!-- ============================================================================================ -->
    <div class="relative h-screen items-center justify-center flex">
      <div>
        <div aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div class="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative">
            <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
              <h1 class="text-center text-4xl font-bold text-gray-800  md:text-5xl">My Wishlist
              </h1>
              <p class="text-center text-xl text-gray-600 ">
                Be part of millions people around the world using tailus in modern User Interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================================================================================ -->
    <section id="Projects"
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

      <div v-for="(product, index) in products" :key="index"
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <button @click="onDetail(product)">
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
    <TheFooter />
  </main>
</template>
