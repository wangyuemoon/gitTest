<template>
  <div id="app">
    <p>24234234</p>
    <input type="text" v-model="lala">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 商品列表 -->
    <ul>
      <li v-for="(good,index) in goods" :key="index">
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
        <button @click="addgood(good)">加购</button>
      </li>
    </ul>
    <!-- 购物车 -->
    <cart></cart>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import cart from "./components/cart.vue";
import axios from "axios";

export default {
  name: 'app',
  components: {
    HelloWorld,
    cart
  },
  data() {
    return {
      goods:[],
      lala:'2'
    }
  },
  async created(){
    const reponse=await axios.get('/api/goods');
    console.log(reponse);
    this.goods=reponse.data.list;
  },
  methods:{
    addgood(good){
      this.$bus.$emit('addgood',good);
    }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
