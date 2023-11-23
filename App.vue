<template>
  <div id="app" >


    <transition name="fade">
      <div id="fundoEscuro" v-if="fundoEscuro" @click="closeFundo(), closeTeste()"></div>
    </transition>


    <transition name="fade">
      <router-view :key="$route.path"/>
    </transition>


  </div>
</template>


<script>
  import Comunicacao from '@/comunicacao.js';
  import { mapMutations } from 'vuex';


  export default {


    data() {
      return {
        fundoEscuro: false,
        fundoEscuroData: {},
      }
    },
    watch: {
      $route(newVal, oldVal) {
        if (newVal.path != oldVal.path) {
          this.closeFundo();
        }
      },
    },
    methods: {
      ...mapMutations(["searchToggle"]),
      closeTeste(){
        this.$store.commit('searchToggle', false)
      },
      closeFundo(){
        this.fundoEscuro = false;
        if (this.fundoEscuroData.el) {
          this.fundoEscuroData.el.$el.classList.remove(this.fundoEscuroData.class);
        }
        document.querySelector('body').style.overflow = '';
      },
    },
    created() {
      Comunicacao.$on('toggleFundoEscuro', data => {
        this.fundoEscuro     = data.acao;
        this.fundoEscuroData = data;
      });
      console.log(this.$route)
    },
  }
</script>


<style scoped>
#fundoEscuro{
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
