

<template>
  <TheHeader />
  <div class="bg-white dark flex z-20 items-center h-screen overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
      <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span class="w-20 h-2 bg-white mb-12"></span>
        <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
          Bracelet
        </h1>
        <p class="text-sm sm:text-base text-gray-700">
          Dimension of reality that makes change possible and understandable. An indefinite and homogeneous
          environment in which natural events and human existence take place.
        </p>
      </div>
      <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img src="https://media.istockphoto.com/id/1497265898/photo/emerald-white-gold-ring.jpg?s=612x612&w=0&k=20&c=J49fcAePhMyv6AuvOzIKfggySkBJsVJD-zaEE-cdpy0=" class="max-w-xs md:max-w-sm m-auto" />
      </div>
    </div>
  </div>
  <!-- =================================================================================== -->

  <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <div v-for="(product, index) in products" :key="index" class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          :src="product.image"
          alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
      </a>
    </div>

  </section>

  <!-- =================================================================================== -->
  <!-- <div class="text-center p-10 mt-40">
    <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 class="text-3xl">Tailwind CSS</h1>
  </div>
  <div class="p-5 sm:p-8">
    <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      <img v-for="(necklace, index) in previews" :key="index" :src="necklace" />
    </div>
  </div> -->

  <hr class="mt-20">
 


   <!-- =================================================================================== -->
   <div class="text-center p-10 mt-40">
    <h1 class="font-bold text-4xl mb-4">EARING IN YOUR DREAM</h1>
    <h1 class="text-3xl">Show us your passions, Show us your fashion, Show us yourself</h1>
  </div>
  <div class="p-5 sm:p-8">
    <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      <img v-for="(product, index) in products" :key="index" :src="product.image" alt="" srcset="">
    </div>
  </div>

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

  <hr class="mt-20">
  <TheCustomer/>


  <TheFooter />
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';




//  const rings = [
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10028-Y-1_480x.jpg?v=1684836802'},
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10012-Y-1_480x.jpg?v=1693888485'},
//   {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W11064-_3_480x.jpg?v=1690536483'},
//   {title:'Annalise Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528'},
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254'},
//   {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W10452-Y-1_480x.jpg?v=1675751902'},
//   {title:'Pari Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10580-Y-1_480x.jpg?v=1688111024'},
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10180-Y-1_480x.jpg?v=1689250878'},
//   {title:'Annalise Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528'},
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254'},
//   {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W10452-Y-1_480x.jpg?v=1675751902'},
//   {title:'Pari Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10580-Y-1_480x.jpg?v=1688111024'},
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10180-Y-1_480x.jpg?v=1689250878'},
//   {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W11064-_3_480x.jpg?v=1690536483'},
//   {title:'Annalise Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528'},
//   {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254'},
//   {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W10452-Y-1_480x.jpg?v=1675751902'},
//   {title:'Pari Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10580-Y-1_480x.jpg?v=1688111024'},

// ]


</script>

<script>
import { myData } from '@/data/data';
import { onProductDetail } from '@/funcations/function';
import { bracelet } from '@/data/data';

export default {
  data() {
    let braceletList = [];
    for (const bracelet of myData) {
      if (bracelet.type == "bracelet") {
        braceletList.push(bracelet);
      }
    }
    return {
      products: braceletList,
      previews: bracelet
    };
  },
  methods: {
    onRingDetail(data) {
      onProductDetail(data);
      this.$router.push("/detail");
      window.scrollTo(0, 0);
    }
  }

};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
