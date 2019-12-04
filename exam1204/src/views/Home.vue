<template>
  <div class="home">
    <div class="main">
        <router-view/>
    </div>
    <div class="footer">
      <router-view v-for="(v,i) in navList" :key ="i" :to="v.path" active-class="active" @click="changeTab(i)" >{{v.name}}</router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      navList:[
        {name:'首页',path:"/home/first"},
        {name:'购物车',path:"/home/cart"},
        {name:'我的',path:"/home/my"},
      ]
    }
  },
  mutations: {
    changeTab(index){
      this.$store.dispatch('changeIndex',index)
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    .footer{
      line-height: 40px;
      display: flex;
      span{
        flex:1;
        &.active{
         color: aqua; 
        }
      }
    }
  }
</style>
