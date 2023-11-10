<template>
<!-- <header-components></header-components> -->

<div id="app">
  <HeaderWeb  v-on:gantiHero="gantiHero"> </HeaderWeb>
  <main>
    <!-- <header>
    <h1>Tsaqif Luthfan</h1>
    <button v-on:click="gantiHero">Ganti Hero</button>
    
  </header> -->

    <!-- <HeroWeb v-for="key in hero" v-bind:hero="key" ></HeroWeb> -->
    <p>Hero Hero Terbaik</p>
    <article v-if="!selectedHero">
    <HeroWeb v-for="(key, index) in hero" v-bind:key="key" v-bind:hero="key" :index = "index"></HeroWeb>
  </article>
  <article v-else>
    <HeroWeb v-bind:hero="selectedHero" :index = "0"></HeroWeb>
  </article>
 

  <!-- <HeroWeb v-bind:hero="hero2"></HeroWeb> -->
    <!-- <ul>
      <li>
        <img :src ="gambar" >
      <p>{{ hero.nama }}</p>
      <p>{{ hero.type }}</p>
      </li>
   
    </ul> -->


  </main>
  <FooterWeb></FooterWeb> 
  <FooterWeb></FooterWeb> 
</div>


  

</template>

<script>


 import HeaderWeb from './components/HeaderWeb.vue';
import FooterWeb from './components/FooterWeb.vue';
import HeroWeb from './components/HeroWeb.vue';
export default {
 components: {
 'HeaderWeb' : HeaderWeb ,
 'FooterWeb' : FooterWeb ,
 'HeroWeb'  : HeroWeb
 },
  name: 'App',
  data:function () {
    return {
      hero : [
  {
      id : 1,
      nama1: 'abeng',
      type : 'mage',
      gambar : 'logo.png'
    },
    {
      id: 2,
      nama1: 'aurora',
      type : 'fighter',
      gambar : 'logo.png'
    },

    {
      id: 3,
      nama1: 'zilong',
      type : 'assasin',
      gambar : 'Pas foto formal.jpg'
    },

    {
      id: 4 ,
      nama1: 'nana',
      type : 'support',
      gambar : 'Screenshot (2088).png'
    },

    {
      id: 5 ,
      nama1: 'abeng',
      type : 'support',
      gambar : '03. Foto Profil IG.png'
    },

    {
      id: 6 ,
      nama1: 'Tsaqif',
      type : 'support',
      gambar : 'WhatsApp Image 2023-08-03 at 21.11.21.jpg'
    },

    {
      id: 7 ,
      nama1: 'Luthfan',
      type : 'Tank',
      gambar : 'WhatsApp Image 2023-07-31 at 16.21.56.jpg'
    },
    

      ],
      selectedHero: '' ,
  }
},
  
methods: {
    gantiHero: function() {
    this.selectedHero = this.randomHero()
    },
    randomHero(){
      return this.hero[Math.floor(Math.random() * this.hero.length)]
    }
  },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main img {
  width: 80px;
  border: 2px solid red;
}

article {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
}
</style>
