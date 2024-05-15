<script setup>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="dark bg-white relative overflow-scroll h-screen">
    <TheHeader />
    <div class="relative overflow-hidden bg-white h-screen">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 h-full">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 h-full">
          <div class="sm:max-w-lg h-full flex items-center justify-center">
            <div>
              <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to our website</h1>
            <p class="mt-4 text-xl text-gray-500">This year, our new svelte signals will shelter you from the
              harsh
              elements of a world that doesn't care if you develop or die.</p>
            </div>
            
          </div>
          <div>
            <div class="mt-20">
              <div aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div
                  class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="" class="h-full w-full object-cover object-center">
                      </div>

                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1627072108045-a6605828afb7?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1582095418003-0a379d54d26a?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <h1 class="text-center text-4xl font-bold text-gray-800  md:text-5xl">Get Started now
              </h1>
              <p class="text-center text-xl text-gray-600 ">
                Be part of millions people around the world using tailus in modern User Interfaces.
              </p>
              <div class="flex flex-wrap justify-center gap-6">
                <a href="#"
                  class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-teal-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span class="relative text-base font-semibold dark:text-dark">Get Started</span>
                </a>
                <a href="#"
                  class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-teal-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                  <span class="relative text-base font-semibold text-teal-500 dark:text-white">More about</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================================================================================ -->
    <div class="bg-white dark flex z-20 items-center h-screen overflow-hidden">
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 m-auto">
          <h1
            class="font-bebas-neue uppercase text-6xl sm:text-8xl text-center font-black flex flex-col leading-none text-gray-800">
            EARRING
          </h1>
          <p class="text-sm mt-5 sm:text-base text-gray-700 text-center">
            An earring is a piece of jewelry attached to the ear via a piercing in the earlobe or another external part
            of
            the ear, or, less often, by some other means. Earrings have been worn in diverse civilizations and historic
            periods, often carrying a cultural significance.
          </p>
          <div class="flex justify-center mt-5">
            <RouterLink to="/earring"
              class="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              View Detail</RouterLink>
          </div>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="https://i5.walmartimages.com/seo/4-00-Carat-D-VVS1-Round-Brilliant-Cut-Lab-Created-Diamond-Beautiful-Stud-Earrings-for-women-Solid-950-Platinum-Push-Back-Studs_e23279f3-2f5c-4409-837d-1529d126d55a.a00ec3b1c0ab72715011f859f1f15064.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            class="max-w-xs md:max-w-sm m-auto" />
        </div>
      </div>
    </div>
    <!-- ============================================================================================ -->
    <div class="bg-white dark flex z-20 items-center h-screen overflow-hidden">
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="hidden sm:block w-3/5 h-[350px] relative">
          <img
            src="https://img.freepik.com/free-photo/luxury-diamond-ring-isolated-white-background_123827-27635.jpg?t=st=1715267344~exp=1715270944~hmac=9406fc57084d08f8d6ca717f38d88a05fcb38e6d01a1d96f562f4bda873e7d75&w=1800"
            class=" h-full m-auto" />
        </div>
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 m-auto">
          <h1
            class="font-bebas-neue uppercase text-6xl sm:text-8xl text-center font-black flex flex-col leading-none text-gray-800">
            EARRING
          </h1>
          <p class="text-sm mt-5 sm:text-base text-gray-700 text-center">
            An earring is a piece of jewelry attached to the ear via a piercing in the earlobe or another external part
            of
            the ear, or, less often, by some other means. Earrings have been worn in diverse civilizations and historic
            periods, often carrying a cultural significance.
          </p>
          <div class="flex justify-center mt-5">
            <RouterLink to="/ring"
              class="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              View Detail</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </main>
</template>
