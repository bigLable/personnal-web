<template>

  <div>
    <!-- 顶部 -->
    <topheader></topheader>
    <!-- 中部tabar -->
    <middleTabar></middleTabar>
     
    <!-- 内容去 -->
    <router-view/>
    <!-- <contentbody></contentbody> -->
  </div>
</template>

<script>
import topheader from '@/components/header/header.vue'
import middleTabar from '@/components/middleTabar/middleTabar.vue'
import contentbody from './helloworldbody'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  topheader,
  contentbody,
  middleTabar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
