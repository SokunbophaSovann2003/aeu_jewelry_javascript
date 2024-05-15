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
                    <div class="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700">
                    </div>
                    <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>
                <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div class="relative">
                        <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                            <h1 class="text-center text-4xl font-bold text-gray-800  md:text-5xl">History</h1>
                            <p class="text-center text-xl text-gray-600 ">
                                Be part of millions people around the world using tailus in modern User Interfaces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ============================================================================================ -->
        <div class="h-full py-8">
            <div class="container mt-20 mx-auto px-4">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="w-full z-10">
                        <div class="bg-white rounded-lg p-6 mb-4">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th class="text-left font-semibold">Product</th>
                                        <th class="text-left font-semibold">Price</th>
                                        <th class="text-left font-semibold">Quantity</th>
                                        <th class="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index" class="border-b">
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <img class="w-40 mr-20" :src="product.image" alt="Product image">
                                                <span class="font-semibold">{{ product.title }}</span>
                                            </div>
                                        </td>
                                        <td class="py-4">${{ product.price }}</td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <!-- <div @click="decreaseQty(index)"
                                                    class="border rounded-md py-2 px-4 mr-2 cursor-pointer">-
                                                </div> -->
                                                <span class="text-center w-8">{{ product.qty }}</span>
                                                <!-- <div @click="increaseQty(index)"
                                                    class="border rounded-md py-2 px-4 ml-2 cursor-pointer">+
                                                </div> -->
                                            </div>
                                        </td>
                                        <td class="py-4">${{ product.price * product.qty }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </main>
</template>
