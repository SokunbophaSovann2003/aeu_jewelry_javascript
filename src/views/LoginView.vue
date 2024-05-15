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
                this.getValue();
            }
        },
        getValue() {
            const data = localStorage.getItem("user");
            if (data == null) {
                window.alert("User not found. Please try again!")
            } else {
                const user = JSON.parse(data);
                user.isLogin = true;
                localStorage.setItem("user", JSON.stringify(user));
                this.$router.push("/")
            }
        },
    }
}
</script>

<template>
    <TheHeader />
    <div class=" h-screen items-center justify-center flex text-gray-900">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-6/12 items-center justify-center flex p-6 sm:p-12">
                <div class="flex flex-col w-full items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">
                        Sign In
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
                                <label for="password" class="">Password</label>
                                <input id="password" type="password" placeholder="Password" autocomplete="false"
                                    class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                    name="name" ref="password">
                            </div>
                            <a class="font-medium items-end justify-end flex text-blue-600 hover:underline dark:text-blue-500"
                                href="/forgetPassword">Forgot password?</a>
                            <button @click="validations"
                                class="mt-8 w-full py-3 font-semibold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-500 focus focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 ">
                                Login
                            </button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-3">Don't have an account?
                                <a class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    href="/register">Sign up here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                    style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');">
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
</template>