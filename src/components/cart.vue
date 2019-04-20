<template>
  <div>
    <table border="1">
      <tr>
        <th>是否勾选</th>
        <th>商品名</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
      </tr>
      <tr v-for="(c,index) in cart" :key="index" :class="{active:c.active}">
        <td>
          <input type="checkbox" v-model="c.active">
        </td>
        <td>{{c.text}}</td>
        <td>{{c.price}}</td>
        <td>
          <button @click="minus(c)">-</button>
          {{c.count}}
          <button @click="add(c)">+</button>
        </td>
        <td>{{c.count*c.price}}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{activeCount}}/{{allCount}}</td>
        <td colspan="2">￥{{moneyTotal}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cart:JSON.parse(localStorage.getItem("cart")) || []
      }
    },
    watch:{
      cart:{
        handler(n,o){
          localStorage.setItem("cart",JSON.stringify(n));
        },
        deep:true
      }
    },
    created(){
      this.$bus.$on('addgood',good =>{
        const ret = this.cart.find(v=>v.id===good.id);
        if(ret){
          ret.count +=1;
        }else{
          this.cart.push({
            ...good,
            count:1,
            active:true
          })
        }
      })
    },
    methods:{
      minus(c){
        if(c.count>1){
          c.count -=1;
        }else{
          this.remove(c);
        }
      },
      remove(c){
        if(window.confirm("确认删除吗？")){
          this.cart.splice(c);
        }
      },
      add(c){
        c.count +=1;
      },
    },
    computed: {
      activeCount(){
        return this.cart.filter(v=>v.active===true).length;
      },
      allCount(){
        return this.cart.length;
      },
      moneyTotal(){
        let num=0;
        this.cart.forEach(c => {
          if(c.active){
            num += c.count*c.price;
          }
        });
        return num;
      },
    // computed: {
    //   activeCount() {
    //     return this.cart.filter(v=>v.active===true).length;
    //   },
    //   allCount(){
    //     return this.cart.length;
    //   },
    //   moneyTotal(c){
    //     let num=0;
    //     this.cart.forEach(c => {
    //       if(c.active){
    //         num += c.count*c.price;
    //       }
    //     });
    //     return num;
    //   },
    }
  }
</script>

<style scoped>
.active{
  color: red;
}
</style>