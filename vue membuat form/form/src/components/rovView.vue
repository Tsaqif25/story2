<template>
    <tr>
        <!-- <td>{{ no  }}</td> -->
        <td>{{ nim }}</td>
        <td>{{ nama }}</td>
        <td>{{ prodi }}</td>
    </tr>
</template> 

<script>
export default {
    props: ['nim','nama','prodi']
}
</script>