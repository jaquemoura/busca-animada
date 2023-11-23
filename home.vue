<template>
    <main>
        <btn />    
    </main>
</template>


<script>


export default {
    components: {
        btn: () => import(/* webpackChunkName: "home" */ "../btnSearch.vue")
    },
};
</script>
