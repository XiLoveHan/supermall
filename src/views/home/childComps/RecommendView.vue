<template>
  <div class="recommend">
    <!-- <div v-for="(item,index) in recommends"> -->
    <a href="http://act.mogujie.com/zzlx67"> 
      <img src="~assets/img/home/recommend_bg.jpg" alt="">
    </a>
       <!-- <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
      </a> -->
    <!-- </div> -->
  </div>
</template>

<script>
	export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
	}
</script>

<style scoped>
  .recommend img {
    width: 100%;
  }
</style>
