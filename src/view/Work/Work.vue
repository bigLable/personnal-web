<template>
  <div class="flex-image">
    <div class="List-Image" v-for="(item,index) in ImageList" :key="index">
      <img :src="item.imgurl" alt>
      <span>{{item.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "work",
  data() {
    return {
      ImageList: [
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5bbef17d4785d335cfe65076/1539240328223/lion-yell.gif?format=500w",
          text: "ettss-o1p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5a8f8534ec212d5ccd4646ba/1519355213561/Lunch_Lady_promo_2.jpg?format=500w",
          text: "ettss-o2p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5bbfebad8165f51dc10a60ce/1539304376472/PROMO_OVENMITT_CROP.jpg?format=500w",
          text: "ettss-o3p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5bbef21be79c70f80730ef50/1539240503096/TMFT_wholesale.jpg?format=500w",
          text: "ettss-o4p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5987fd9a197aeadca594455c/1502084541604/Skills+exchange_3.jpg?format=500w",
          text: "ettss-o5p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/57da3d50be65946d70437137/1473920364546/CatSolo-4378_small.jpg?format=750w",
          text: "ettss-o6p"
        }, {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5a8f8534ec212d5ccd4646ba/1519355213561/Lunch_Lady_promo_2.jpg?format=500w",
          text: "ettss-o2p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5bbfebad8165f51dc10a60ce/1539304376472/PROMO_OVENMITT_CROP.jpg?format=500w",
          text: "ettss-o3p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5bbef21be79c70f80730ef50/1539240503096/TMFT_wholesale.jpg?format=500w",
          text: "ettss-o4p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/5987fd9a197aeadca594455c/1502084541604/Skills+exchange_3.jpg?format=500w",
          text: "ettss-o5p"
        },
        {
          imgurl:
            "https://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/57da3d50be65946d70437137/1473920364546/CatSolo-4378_small.jpg?format=750w",
          text: "ettss-o6p"
        }
      ]
    };
  }
};
</script>
<style>
.List-Image {
    min-width: 180px;
  width: 23%;
  min-height: 100px;
  /* border: 1px solid red; */
  margin-right: 12px;
  margin-bottom: 20px
}
.List-Image>img{
    width: 100%;
    height: auto;
}
.flex-image {
  width: 80%;
  min-height: 300px;
  /* border: 1px solid red; */
  margin: 100px auto 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap
}
</style>
