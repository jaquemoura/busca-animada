<template>
    <div>  
        <bsc />
        <button @click="openSearch()">Abrir</button>
        <p>{{ search }}</p>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import comunicacao from '@/comunicacao.js'


export default {
    components: {
        bsc: () => import(/* webpackChunkName: "home" */ "./bscTeste.vue")
    },
    computed: {
        search(){
            return this.$store.state.searchShow;
        }
    },
    watch: {
      search(newVal){
        this.openToggle(newVal);
      }
    },
    methods: {
        ...mapMutations(["searchToggle"]),
       
        openSearch(){
            this.$store.commit("searchToggle", true)
            comunicacao.$emit('toggleFundoEscuro', {acao: true})
        },
        openToggle(sinal){
            if(sinal){
                document.querySelector('.busca-animada').classList.add('ativo');
            } else {
                document.querySelector('.busca-animada').classList.remove('ativo');
            }
        }
    }
}
</script>
