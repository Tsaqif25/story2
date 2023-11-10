<template>
<ul>
    <li>
      <img :src ="gambar" >
    <p> {{index+1 }} {{ hero.nama1 }}</p>
    <p>{{ hero.type }}</p>
    </li>
 
  </ul>
</template>

<script>
export default {
    props:['hero' ,'index'],
    computed: {
  gambar:function() {
    return require ('../assets/' + this.hero.gambar)
    }

  }
}
</script>

<style></style>