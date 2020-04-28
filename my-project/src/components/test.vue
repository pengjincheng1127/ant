<template>
  <div>
    <h2>{{this.$store.state.count}}</h2>
    <h2>从getters获取的计算后的值：{{this.$store.getters.getStateCount}}</h2>
   <p>count的值：{{this.$store.state.count}}</p>
   <button @click="addFun">+</button>
   <button @click="reductionFun">-</button>

   <div style="border:1px solid red;margin-top:50px " >{{count1}}</div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  methods: {
   addFun(){
    //    this.$store.commit("add");
    this.$store.dispatch('addFun')
   },
   reductionFun(){
       var a = 10
       this.$store.dispatch("reductionFun",a)
    //    this.$store.commit("reduction")
   }
  },
  computed: {
      ...mapState({
          count1:state=>state.count
      })
  },
};
</script>

<style scoped>
</style>