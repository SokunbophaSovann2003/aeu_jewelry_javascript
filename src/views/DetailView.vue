<template>
    <TheHeader />
    <div class="h-screen items-center justify-center flex py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[500px] rounded-lg">
                        <img class="w-full h-full object-cover" :src="product.image" alt="Product Image">
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">Product Name</h2>
                    <div class="mb-4">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700">Price: </span>
                            <span class="text-gray-600">$29.99</span>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700">Availability: </span>
                            <span class="text-gray-600">In Stock</span>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700">Brand: </span>
                            <span class="text-gray-600">Stock</span>
                        </div>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700">Product Description:</span>
                        <p class="text-gray-600 text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla
                            ut.
                        </p>
                    </div>
                    <div class="flex -mx-2 mt-8">
                        <div class="w-1/2 px-2">
                            <button @click="addItemToCard(product)"
                                class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add
                                to Cart</button>
                        </div>
                        <div class="w-1/2 px-2">
                            <button @click="addItemToWishlist(product)"
                                class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add
                                to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- =================================================================================== -->
    <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Relative Products</h1>
    </div>
    <section id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

        <div v-for="(product, index) in products" :key="index"
            class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <button @click="onProductDetail(product)">
                <img :src="product.image" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72 text-start">
                    <span class="text-gray-400 mr-3 uppercase text-xs items-start">{{ product.brand }}</span>
                    <p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
                    <div class="flex items-center">
                        <p class="text-lg font-semibold text-black cursor-auto my-3">${{ product.price }}</p>
                        <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
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
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<script>
import { myData } from '@/data/data';
import { onProductDetail, addToCard, addToWishlist } from '@/funcations/function';

export default {
    data() {
        const data = localStorage.getItem("detail");
        const product = JSON.parse(data);
        console.log("My profile iss ", product);
        return {
            products: myData,
            product: product,
        };
    },
    methods: {
        productDetail(data) {
            onProductDetail(data);
            this.$router.go("/detail");
            window.scrollTo(0, 0);
        },
        addItemToCard(data) {
            addToCard(data);
        },
        addItemToWishlist(data) {
            addToWishlist(data);
        }
    }
};
</script>async async