<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>
<script>
export default {
    methods: {
        validation() {
            const name = this.$refs.name.value;
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;
            if (name.length<1 || email.length<1 || password.length<1) {
                window.alert("Please check your input field")
            } else {
                this.getValue();
            }
        },
        getValue() {
            const name = this.$refs.name.value;
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;
            const value = { name: name, email: email, password: password, isLogin: true }
            console.log("This is my name ", value);
            const objectString = JSON.stringify(value);
            localStorage.setItem("user", objectString);
            this.$router.push("/")
        }
    }
}
</script>

<template>
    <TheHeader />
    <div class=" h-screen items-center justify-center flex text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1  mx-24">
            <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                    style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');">
                </div>
            </div>
            <div class="lg:w-1/2 xl:w-6/12 items-center justify-center flex p-8">
                <div class="flex flex-col w-full items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">
                        Sign Up
                    </h1>
                    <div class="w-full flex-1 mt-6">
                        <div class="mx-auto w-8/12">
                            <div class="mb-2">
                                <label for="name" class="">User Name</label>
                                <input ref="name" id="name" type="text" placeholder="Name" autocomplete="false"
                                    class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                    name="name">
                            </div>
                            <div class="mb-2">
                                <label for="email_address" class="">Email Address</label>
                                <input ref="email" id="email_address" type="email" placeholder="Email Address"
                                    autocomplete="false"
                                    class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                    name="email">
                            </div>
                            <div class="">
                                <label for="password" class="">Password</label>
                                <input ref="password" id="password" type="password" placeholder="Password"
                                    autocomplete="false"
                                    class="w-full px-4 py-2 border-2 placeholder:text-gray-800 rounded-md outline-none dark:placeholder:text-gray-300   focus:ring-4  border-gray-800 focus:border-gray-400 ring-gray-100 "
                                    name="password">
                            </div>
                            <button @click="validation"
                                class="mt-6 w-full py-3 font-semibold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-500 focus focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 ">
                                Sign Up
                            </button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-1">Already have an account?
                                <a class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    href="/login">Sign In here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TheFooter />
</template>