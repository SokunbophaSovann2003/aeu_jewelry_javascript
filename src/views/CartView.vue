<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<script>
export default {
    data() {
        const data = localStorage.getItem("card");
        const products = JSON.parse(data);
        let total = 0;
        for (const product of products) {
            total += (product.item.price * product.qty);
        }
        return {
            products: products,
            total: total,
            totalProduct: products.length,
            isPopupVisible: false
        }
    },
    methods: {
        increaseQty(index) {
            this.products[index].qty += 1;
            this.getTotal();
        },
        decreaseQty(index) {
            if (this.products[index].qty > 0) {
                this.products[index].qty -= 1;
                this.getTotal();
            }
        },
        getTotal() {
            let total = 0;
            let totalProduct = 0;
            for (const product of this.products) {
                total += (product.item.price * product.qty);
                totalProduct += product.qty;
                console.log(totalProduct);
            }
            this.total = total;
            this.totalProduct = totalProduct;
        },
        showPopup() {
            console.log("THis is my pop up");
            this.isPopupVisible = true;
        },
        closePopup() {
            this.isPopupVisible = false;
        }
    }


}
</script>

<template>
    <TheHeader />
    <div class="h-full py-8">
        <div class="container mt-20 mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-3/4 z-10">
                    <div class="bg-white rounded-lg shadow-md p-6 mb-4">
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
                                <tr v-for="(product, index) in products" :key="index">
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <img class="w-40 mr-4" :src="product.item.image" alt="Product image">
                                            <span class="font-semibold">{{ product.item.title }}</span>
                                        </div>
                                    </td>
                                    <td class="py-4">${{ product.item.price }}</td>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <div @click="decreaseQty(index)"
                                                class="border rounded-md py-2 px-4 mr-2 cursor-pointer">-
                                            </div>
                                            <span class="text-center w-8">{{ product.qty }}</span>
                                            <div @click="increaseQty(index)"
                                                class="border rounded-md py-2 px-4 ml-2 cursor-pointer">+
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4">${{ product.item.price * product.qty }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w-full z-0 pr-[128px] fixed flex justify-end items-end">
                    <div class="bg-white md:w-1/4  rounded-lg shadow-md p-6">
                        <h2 class="text-lg font-semibold mb-4">Summary</h2>
                        <div class="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>$19.99</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>Product</span>
                            <span>{{ totalProduct }} items</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <hr class="my-2">
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold">${{ total }}</span>
                        </div>
                        <button @click="showPopup()"
                            class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="z-40">
        <div v-if="isPopupVisible" class="popup">
            <div class="w-full max-w-lg mx-auto p-8">
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-lg font-medium mb-6">Payment Information</h2>
                    <form>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="col-span-2 sm:col-span-1">
                                <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card
                                    Number</label>
                                <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000"
                                    class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="expiration-date"
                                    class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                                <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY"
                                    class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                <input type="text" name="cvv" id="cvv" placeholder="000"
                                    class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card
                                    Holder</label>
                                <input type="text" name="card-holder" id="card-holder" placeholder="Full Name"
                                    class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                            </div>
                        </div>
                        <div class="mt-8">
                            <button type="submit"
                                class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
</template>

<style>
.popup {
    z-index: 120;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>