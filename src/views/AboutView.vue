<script setup>
// import TheSlider from "../components/TheSlider.vue";
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <div class="sm:flex h-screen items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
      <div class="image object-center text-center">
        <img src="https://i.imgur.com/WbQnbas.png">
      </div>
    </div>
    <div class="sm:w-1/2 p-5">
      <div class="text">
        <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
        <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
        </h2>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
          doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
          voluptatum.
        </p>
      </div>
    </div>
  </div>
  <!-- ==================================================================== -->
  <div class="min-h-screen bg-gradient-to-br mt-10">
    <div class="mx-auto max-w-4xl px-6 py-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to the Jungle</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div
          class="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
          <img class="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
            src="https://data.artofproblemsolving.com/images/people/rlemon309x309.png" />
          <p class="m-[5px] text-[#262626] text-base">Name</p>
          <p class="m-[5px] text-[#777674] text-xs">Title</p>
          <svg class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
            xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
            <path
              d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
              fill="#F04E29" />
          </svg>
        </div>
        <div
          class="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
          <img class="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
            src="https://data.artofproblemsolving.com/images/people/rlemon309x309.png" />
          <p class="m-[5px] text-[#262626] text-base">Name</p>
          <p class="m-[5px] text-[#777674] text-xs">Title</p>
          <svg class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
            xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
            <path
              d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
              fill="#F04E29" />
          </svg>
        </div>
        <div
          class="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
          <!-- Grab your photo from https://artofproblemsolving.com/company/staff -->
          <img class="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
            src="https://data.artofproblemsolving.com/images/people/rlemon309x309.png" />
          <p class="m-[5px] text-[#262626] text-base">Name</p>
          <p class="m-[5px] text-[#777674] text-xs">Title</p>
          <!-- SVG of Arrow -->
          <svg class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
            xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
            <path
              d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
              fill="#F04E29" />
          </svg>
        </div>
        <div
          class="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
          <!-- Grab your photo from https://artofproblemsolving.com/company/staff -->
          <img class="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
            src="https://data.artofproblemsolving.com/images/people/rlemon309x309.png" />
          <p class="m-[5px] text-[#262626] text-base">Name</p>
          <p class="m-[5px] text-[#777674] text-xs">Title</p>
          <!-- SVG of Arrow -->
          <svg class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
            xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
            <path
              d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
              fill="#F04E29" />
          </svg>
        </div>
        <div
          class="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
          <!-- Grab your photo from https://artofproblemsolving.com/company/staff -->
          <img class="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
            src="https://data.artofproblemsolving.com/images/people/rlemon309x309.png" />
          <p class="m-[5px] text-[#262626] text-base">Name</p>
          <p class="m-[5px] text-[#777674] text-xs">Title</p>
          <!-- SVG of Arrow -->
          <svg class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
            xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
            <path
              d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
              fill="#F04E29" />
          </svg>
        </div>
        <div
          class="group hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
          <!-- Grab your photo from https://artofproblemsolving.com/company/staff -->
          <img class="group-hover:rounded-br-[100px] rounded-br-[0px] transition-[border-radius]"
            src="https://data.artofproblemsolving.com/images/people/rlemon309x309.png" />
          <p class="m-[5px] text-[#262626] text-base">Name</p>
          <p class="m-[5px] text-[#777674] text-xs">Title</p>
          <!-- SVG of Arrow -->
          <svg class="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
            xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
            <path
              d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
              fill="#F04E29" />
          </svg>
        </div>
      </div>
    </div>
  </div>

    <!-- =============================================================================== -->
    <section class="h-screen items-center justify-center flex">
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="lg:text-center">
          <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            We know tech, we know finance. We are fintech experts.
          </p>
          <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            We know how to handle taxation for all the
            countried we operate in. We care for our customers and help them manage cashflows.
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/503163/api-settings.svg">
                </div>
                <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/503138/webpack.svg">
                </div>
                <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                  SDK
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg">

                </div>
                <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg">

                </div>
                <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================================================================== -->
  <hr class="">
  <section id="testimonials" aria-label="What our customers are saying" class="bg-slate-50 py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
      </div>
      <ul role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                  width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                  <path
                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                  </path>
                </svg>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from
                    this site. The quality is exceptional and the prices are unbeatable.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Sheryl Berge</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img alt="" class="h-14 w-14 object-cover" style="color:transparent"
                      src="https://randomuser.me/api/portraits/men/15.jpg">
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                  width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                  <path
                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                  </path>
                </svg>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">As a professional athlete, I rely on high-performance
                    gear for my training. This site offers a great selection of top-notch products.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Leland Kiehn</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img alt="" class="h-14 w-14 object-cover" style="color:transparent"
                      src="https://randomuser.me/api/portraits/women/15.jpg">
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                  width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                  <path
                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                  </path>
                </svg>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">The fitness apparel I bought here fits perfectly and
                    feels amazing. I highly recommend this store to anyone looking for quality gear.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Peter Renolds</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img alt="" class="h-14 w-14 object-cover" style="color:transparent"
                      src="https://randomuser.me/api/portraits/men/10.jpg">
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>








  <TheFooter />
</template>
