<template>
  <div>
    <div class="content-contair">
      <!-- <div class="content-title">
        <div class="image-div">
          <img
            src="http://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/575a6f21ab48de91fcacd477/1552006280819/?format=1000w"
            alt
          >
        </div>
        <div class="nav-div">
          <ul class="nav-ul">
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/Work" tag="span">Work</router-link>
            </li>
            <li>
              <router-link to="/News" tag="span">News</router-link>
            </li>
            <li>
              <router-link to="/Study" tag="span">Study</router-link>
            </li>
            <li>
              <router-link to="/Contact" tag="span">Contact</router-link>
            </li>
            <div class="clear"></div>
          </ul>
          <router-view></router-view>
        </div>
      </div> -->
      <div class="tarbar-name">ABOUT</div>
      <div class="content-descript">
        <div class="swipe">
          <swipe></swipe>
        </div>
        <div class="font-des" style=" word-wrap: break-word; word-break: normal;">
          <span class="pre">My name is Cat and I am a Melbourne based textile artist and designer.
            <br>
            <br>I work between a fluff-filled home studio with my cat, Porco, and a cosy
            <br>
            <br>space in the Nicholas Building in Melbourne's CBD. I make plush sculptural
            <br>
            <br>works of my imagined characters and the worlds they might live in. I also
            <br>
            <br>make books for Children and other fantastical artworks with my collaborator
            <br>
            <br>and good pal Isobel Knowles under the name Soft Stories. If you are looking
            <br>
            <br>for our books, you can find them in our Soft Stories Store and nice bookstores
            <br>
            <br>everywhere!
            <br>
            <br>

            <span class="pre">I have worked and collaborated with clients such as NGV,</span>
            <br>
            <br>Soludos, Lunch Lady Magazine, Frankie Magazine, Odd Pears and Bakedown
            <br>
            <br>Cakery, and have work in permanent collections at Loreto Mandeville Junior
            <br>
            <br>Library and Melbourne Girls Grammar School.
            <br>
            <br>To be the first to hear about shop updates and new releases,
            <br>
            <br>join my mailing list --> her
            <br>
            <br>
            <span class="pre">All work and images © Cat-Rabbit 2007 - 2019, All rights reserved.</span>
            <br>
            <br>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swipe from "@/components/swipe/swipe.vue";
export default {
  data() {
    return {};
  },
  components: {
    swipe
  }
};
</script>
<style lang="">
a{
     text-decoration: none;

  color: black;
}
.router-link-active,
.myActive {
  text-decoration: none;

  color: black;
}
.pre {
  text-indent: 2em;
  display: inline-block;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  word-break: break-all;
}
.font-des {
  width: 100%;
}
.swipe {
  width: 100%;
  min-height: 200px;
  margin: 0 auto;
  /* border: 1px solid; */
}
.content-descript {
  width: 60%;
  min-height: 600px;
  /* border: 1px solid green; */
}
.tarbar-name {
  /* margin-top: 100px; */
  /* margin-bottom: 60px; */
  /* border: 1px solid red; */
  width: 100%;
  font-size: 30px;
  text-align: left;
  font-family: "futura-pt";
  color: #999;
  white-space: pre-wrap;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 300;
}
.clear {
  clear: both;
}
.nav-ul {
  list-style: none;
  width: 100%;
}
.nav-ul > li {
  display: inline-block;
  width: 20%;
  text-align: center;
  line-height: 30px;
  float: left;
  font-family: "futura-pt";
  font-size: 13px;
  color: #999;
}
.nav-ul > li:hover {
  color: black;
}
.content-title {
  position: relative;
  width: 100%;
  min-height: 50px;
  /* border: 1px solid grey; */
}
.image-div {
  width: 20%;
  min-height: 60px;
  float: left;
  /* border: 1px solid red; */
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.image-div > img {
  width: 100%;
  height: auto;
}
.nav-div {
  width: 60%;
  min-height: 30px;
  float: right;
  /* border: 1px solid red; */
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 0;
}
.content-contair {
  margin-top: 30px;
  width: 80%;
  /* min-height: 200px; */
  margin: 100px auto 0;
  /* border: 1px solid red; */
}
</style>