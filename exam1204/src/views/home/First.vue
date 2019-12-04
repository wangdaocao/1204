<template>
  <div class="first">
    <input type="text" placeholder="搜索" v-model="txt" @input="searchFn">
     <ul>
       <Item v-for="(v,i) in list" :key="i" :item="v" />>
     </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Item from '../../components/Item'
export default {
  data(){
return{
  txt:""
}
  },
  name:First, 
  components:{
    Item
  },
    created(){
      this.getList()
    },
    computed(){
      ...mapState(['allList'])
    },
    mutations: {
      ...mapActions(['getList'])
      searchFn(){
        this.search(this.txt)
      }
    }
}
</script>

<style>

</style>