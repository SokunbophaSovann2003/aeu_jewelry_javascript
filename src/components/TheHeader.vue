<script>
  
  export default {
    
  data() {
    const user = localStorage.getItem("user");
    return {
      condition: user == null ? false : JSON.parse(user).isLogin
    };
  },
  methods: {
    signOut() {
      const data = localStorage.getItem("user");
      const user = JSON.parse(data);
      user.isLogin = false;
      const userLogout = JSON.stringify(user)
      localStorage.setItem("user", userLogout);
      this.$router.push("/");
      window.location.reload();
    }
  }
};
</script>

<template>
  <header class="h-24 sm:h-32 flex items-center z-30 w-full fixed ">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <RouterLink to="/" class="uppercase text-gray-800 font-black text-3xl">
        Logo
      </RouterLink>
      <div class="flex items-center">
        <nav class="font-sen text-gray-800 uppercase text-lg lg:flex items-center hidden">
          <a href="#" class="py-2 px-6 flex">
            <RouterLink to="/earring"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Earing</RouterLink>
          </a>
          <a href="#" class="py-2 px-6 flex">
            <RouterLink to="/ring"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Ring</RouterLink>
          </a>
          <a href="#" class="py-2 px-6 flex">
            <RouterLink to="/cart"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Card</RouterLink>
          </a>
          <a href="#" class="py-2 px-6 flex">
            <RouterLink to="/wishlist"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Wishlist
            </RouterLink>
          </a>
          <a href="#" class="py-2 px-6 flex">
            Product
          </a>
          <a href="#" class="py-2 px-6 flex">
            <RouterLink to="/contact"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Contact</RouterLink>
          </a>
          <a href="#" class="py-2 px-6 flex">
            <RouterLink to="/about"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              About</RouterLink>
          </a>
        </nav>
        <button @click="signOut" v-if="condition"  class="bg-gray-900 rounded-full px-5 py-1 hover:bg-gray-700 text-white">
          <div class="flex gap-3 justify-center items-center text-white">
            LOGOUT
          </div>
        </button>
        <RouterLink v-if="!condition" to="/login" class="bg-gray-900 rounded-full px-5 py-1 hover:bg-gray-700 text-white">
          <div class="flex gap-3 justify-center items-center text-white">
            LOGIN
          </div>
        </RouterLink>
        <div v-else>
          <RouterLink to="/profile"
            class="flex ml-5 rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            id="user-menu-button">
            <img class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="">
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<!-- <script>


export default {
  name: "TheHeader",
  // props: {
  //   msg: String
  // }
};
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: rgb(14, 14, 14);
}
</style>
