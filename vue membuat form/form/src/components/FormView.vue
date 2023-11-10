<template>
    <div>
        <form @submit.prevent="addStudent">
        <div>
            <label for="">Nim</label>
            <input type="text"  name="nim" v-model="nim">
        </div>
        <br>
        <div>
            <label for="">Nama</label>
            <input type="text" name="nama" v-model="nama">
        </div>
        <br>
        <div>
            <label for="">Program Studi</label>
          <select name="study" id="" v-model="prodi">
            <option value="Informatika">Teknik Informatika</option>
            <option value="sistemInformasi">Sistem Informasi</option>
          </select>
        </div>
   
        <br>
        <button>Tambah</button>
    </form>
    </div>
</template>

<script>

 export default {
    emits:['add-student'],
    data() {
        return {
            nim: '' ,
            nama:'' ,
            prodi:''
        }
    },
    methods: {
        addStudent() {
           this.$emit('add-student',
           this.nim ,
           this.nama , 
           this.prodi)

        }
    },

 }

</script>