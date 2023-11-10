<template>
    <div>
        <table>
            <thead>
                <tr>
                  <!-- <th>No</th> -->
                    <th>Nim</th>
                    <th>Nama</th>
                    <th>Program Studi</th>
                </tr>
            </thead>
             <tbody>
                <rov-view v-for="students in students" :key="students.nim"
                
                :nim="students.nim"
                :nama="students.nama"
                :prodi="students.prodi"
                
                >
                    

                </rov-view>
            </tbody> 
        </table>
    </div>
</template>

<script>
 export default {
     props: ['students']
 }

</script>