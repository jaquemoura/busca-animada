<template>
    <div class="busca-animada">
        Busca
        <button @click="closeSearch()">X</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import comunicacao from "@/comunicacao.js"


export default {
    methods: {
        ...mapMutations(["searchToggle"]),
        closeSearch(){
            this.$store.commit("searchToggle", false)
            comunicacao.$emit("toggleFundoEscuro", {acao: false})
        }
    }
}
</script>
<style scoped>
.busca-animada {
    background: red;
    height: 300px;
    transform: translateY(-300%);
    transition: 500ms;
    z-index: 50;
    width: 100%;
    position: absolute;
    top: 300px;
    left: 0;
}
.busca-animada.ativo{
    background: yellow;
    transform: translate(0);
    z-index: 50;
}
</style>
