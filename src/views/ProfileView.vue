<template>
    <TheHeader></TheHeader>

    <section class="h-screen w-full m-auto">
        <div class="flex w-full h-full justify-center items-center gap-4 py-12">
            <div class="flex bg-white w-4/5 h-96 rounded-lg items-center md:flex-row">
                <div class="relative w-1/4 flex justify-center items-center">
                    <img src="https://i.pinimg.com/736x/7f/9f/b6/7f9fb60382ac715c11ae6d5eeaf9b070.jpg"
                        alt="shopping image"
                        class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                </div>
                <form class="ml-24 w-3/4">
                    <div class="flex flex-wrap">
                        <h1 class="flex-auto text-4xl font-semibold text-black">Hello, {{ userInfo.name }}</h1>
                    </div>
                    <hr class="mt-10">
                    <p class="text-sm text-black mt-10"><strong>User Name : </strong>{{ userInfo.name }}</p>
                    <p class="text-sm text-black mt-4"><strong>Email Address : </strong>{{ userInfo.email }}</p>
                    <div @click="showPopup"
                        class="bg-gray-800 hover:bg-gray-600 text-white font-bold mt-8 py-2 px-3 cursor-pointer rounded w-28">
                        Edit Profile
                    </div>
                </form>
                <div>
                    <div v-if="isPopupVisible" class="popup">
                        <div class="w-5/12 items-center justify-center flex py-20 rounded-xl  bg-white">
                            <div class="flex flex-col w-full items-center">
                                <h1 class="text-2xl xl:text-3xl font-extrabold">
                                    User Info
                                </h1>
                                <div class="w-full flex-1 mt-10">
                                    <div class="mx-auto w-8/12">
                                        <div class="mb-2">
                                            <label for="name" class="">User Name</label>
                                            <input ref="name" id="name" type="text" placeholder="Name"
                                                autocomplete="false"
                                                class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                                name="name" :value="userInfo.name">
                                        </div>
                                        <div class="mb-2">
                                            <label for="email_address" class="">Email Address</label>
                                            <input ref="email" id="email_address" type="email"
                                                placeholder="Email Address" autocomplete="false"
                                                class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                                name="email" :value="userInfo.email">
                                        </div>
                                        <div class="mt-16 flex justify-evenly items-center m-auto w-full">
                                            <div @click="closePopup"
                                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 cursor-pointer rounded">
                                                Cancel
                                            </div>
                                            <div @click="validations"
                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 cursor-pointer rounded">
                                                Edit Profile
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
    </section>
    <!-- <TheFooter></TheFooter> -->
</template>


<script setup>
import TheHeader from '@/components/TheHeader.vue';
// import TheFooter from '@/components/TheFooter.vue';
</script>


<script>
export default {
    data() {
        const data = localStorage.getItem("user")
        const userInfo = JSON.parse(data)
        return {
            isPopupVisible: false,
            userInfo: userInfo
        };
    },
    methods: {
        validations() {
            const email = this.$refs.email.value;
            const name = this.$refs.name.value;
            if (email.length < 1 || name.length < 1) {
                window.alert("Please check your input field")
            } else {
                this.updateUserInfo();
            }
        },
        updateUserInfo() {
            const email = this.$refs.email.value;
            const name = this.$refs.name.value;
            const data = localStorage.getItem("user");
            if (data == null) {
                window.alert("User not found. Please try again!")
            } else {
                this.userInfo.name = name;
                this.userInfo.email = email;
                localStorage.setItem("user", JSON.stringify(this.userInfo));
                window.location.reload();
            }
        },
        showPopup() {
            console.log("THis is my pop up");
            this.isPopupVisible = true;
        },
        closePopup() {
            this.isPopupVisible = false;
        }
    }
};
</script>

<style>
/* Styles for the popup */
.popup {
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