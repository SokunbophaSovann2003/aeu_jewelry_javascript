<script setup>
  import TheFooter from '@/components/TheFooter.vue';
  import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <main class="dark bg-white relative overflow-scroll h-screen">
    <TheHeader/>
    <div class="bg-white dark flex z-20 items-center h-screen overflow-hidden">
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span class="w-20 h-2 bg-white mb-12">
          </span>
          <h1
            class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-black text-gray-800">
            Show your Power
          </h1>
          <p class="text-sm sm:text-base text-gray-700 text-black">
            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous
            environment in which natural events and human existence take place.
          </p>
        </div>
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto" />
        </div>
      </div>
    </div>
    <!-- ============================================================================================ -->
    <div class="relative h-screen items-center justify-center flex">
      <div>
        <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
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
    <section class="text-gray-600 h-screen items-center justify-center flex body-font bg-white">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
          class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Title of Project
          </h1>
          <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description here Short description here Short
            description here Short description here.
          </p>
          <div class="flex justify-center">
            <a href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img class="object-cover object-center rounded" alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
      </div>
    </section>
    <section class="text-gray-600 h-screen items-center justify-center flex body-font bg-white">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img class="object-cover object-center rounded" alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
        <div
          class="lg:flex-grow mt-9 md:w-1.5/2 lg:pr-24 md:pl-16 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Title of Project
          </h1>
          <p class="mb-8 md:pl-0 text-right pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description here Short description here Short
            description here Short description here.
          </p>
          <div class="flex justify-center">
            <a href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 h-screen items-center justify-center flex body-font bg-white">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
          class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Title of Project
          </h1>
          <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description here Short description here Short
            description here Short description here.
          </p>
          <div class="flex justify-center">
            <a href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img class="object-cover object-center rounded" alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
      </div>
    </section>
    <section class="text-gray-600 h-screen items-center justify-center flex body-font bg-white">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img class="object-cover object-center rounded" alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
        <div
          class="lg:flex-grow mt-9 md:w-1.5/2 lg:pr-24 md:pl-16 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Title of Project
          </h1>
          <p class="mb-8 md:pl-0 text-right pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description here Short description here Short
            description here Short description here.
          </p>
          <div class="flex justify-center">
            <a href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 h-screen items-center justify-center flex body-font bg-white">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
          class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Title of Project
          </h1>
          <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description here Short description here Short
            description here Short description here.
          </p>
          <div class="flex justify-center">
            <a href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img class="object-cover object-center rounded" alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
      </div>
    </section>
    <section class="text-gray-600 h-screen items-center justify-center flex body-font bg-white">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img class="object-cover object-center rounded" alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
        </div>
        <div
          class="lg:flex-grow mt-9 md:w-1.5/2 lg:pr-24 md:pl-16 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Title of Project
          </h1>
          <p class="mb-8 md:pl-0 text-right pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Short description here, Short description here Short description here Short description here Short
            description here Short description here.
          </p>
          <div class="flex justify-center">
            <a href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
          </div>
        </div>
      </div>
    </section>
    <TheFooter/>
  </main>
</template>
