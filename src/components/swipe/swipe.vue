<template>
  <div>
    <div class="block">
      <el-carousel height="200px" :autoplay="autoplayState">
        <el-carousel-item v-for="(item,index) in imagList" :key="item">
            <div v-if="index==0" class="videoPlay" >
                 <img  src="../../assets/播放 (1).png" alt="" v-if='imagstate'>
            </div>
        <video v-if="index==0" :src="item" ref="v"  @click="Play">
        </video>
        <img class="imgpoto" v-else :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
    name:'swipe',
   data() {
    return {
        autoplayState:true,//幻灯片自动播放状态
        imagstate:true,//播放按钮状态
      imagList: [
        "http://qiniu-xpc10.vmoviercdn.com/5c514304cf59e.mp4",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3782685451,3066622536&fm=27&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3943723512,1898909937&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=214975775,4001050315&fm=27&gp=0.jpg"
      ]
    };
  },
  methods:{
      /**轮播状态 */
      Play(){
          console.log(this.$refs.paused,'this.$refs.video')
          if(this.$refs.v[0].paused){
                  this.$refs.v[0].play()
                  this.autoplayState=false
           this.imagstate=false
       
          }else{
          this.$refs.v[0].pause()
              this.imagstate=true
              this.autoplayState=true
          }
          
      }
  }
};
</script>

<style>
.videoPlay{
   float: left;
   position: absolute;
   width: 60px;
   height: 60px;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   margin: auto;
   /* border: 1px solid red */
}
.videoPlay img{
    width: 60px;
    height: 60px;
}
.videoPlay img:hover{
    cursor: pointer;
}
.imgpoto{
    width: auto;
    height: 200px;
}
video{
    width: auto;
    height: 200px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>