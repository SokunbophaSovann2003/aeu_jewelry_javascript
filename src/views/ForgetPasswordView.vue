<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<script>
export default {
    methods: {
        validations() {
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;
            if (email.length < 1 || password.length < 1) {
                window.alert("Please check your input field")
            } else {
                this.resetPassword(email, password);
            }
        },
        resetPassword(email, password) {
            const data = localStorage.getItem("user");
            if (data == null) {
                window.alert("User not found. Please try again!")
            } else {
                const user = JSON.parse(data);
                if (user.email != email) {
                    window.alert("User not found. Please try again!")
                } else {
                    user.password = password;
                    localStorage.setItem("user", JSON.stringify(user));
                    this.$router.push("/login")
                }
                
            }

        },
    }
}
</script>

<template>
    <TheHeader/>
    <div class="w-full h-screen items-center justify-center flex text-gray-900">
        <div class="m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1">
            <div class="shadow bg-white w-5/12 items-center justify-center flex">
                <div class="flex py-12 flex-col w-full items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">
                        Forget Password
                    </h1>
                    <div class="w-full flex-1 mt-8">
                        <div class="mx-auto w-8/12">
                            <div class="mb-2">
                                <label for="email_address" class="">Email Address</label>
                                <input id="email_address" type="email" placeholder="Email Address" autocomplete="false"
                                    class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                    name="email" ref="email">
                            </div>
                            <div class="mb-2">
                                <label for="password" class="">New Password</label>
                                <input id="password" type="text" placeholder="Password" autocomplete="false"
                                    class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                    name="password" ref="password">
                            </div>
                            <button @click="validations"
                                class="mt-8 w-full py-3 font-semibold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-500 focus focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 ">
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TheFooter/>
</template>