<template>
<h3>Daftar Mahasiswa</h3>
   <table-view :students="students"> </table-view>

   <Form-View @add-student="addingStudent"></Form-View>
</template>

<script>


export default {
  data() {
    return {
      students: [
        {
          nim:'21',
          nama:'tsaqif',
          prodi:'PTI'
        },
        {
          nim:'31',
          nama:'luthfan',
          prodi:'PTE'
        },
        {
          nim:'41',
          nama:'narvlex',
          prodi:'TI'
        },
      ]
    }
  },
  methods: {
    addingStudent(newnim,newnama,newprodi) {
const newStudent = {
 nim : newnim ,
 nama : newnama ,
 prodi: newprodi
}
this.students.push(newStudent)
    }
  }
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
</style>
