 
      <template>
          <div class="content-contair">
              <div class="content-title">
        <div class="image-div">
          <img
            src="http://static1.squarespace.com/static/573a74d14c2f85bbe79860fe/t/575a6f21ab48de91fcacd477/1552006280819/?format=1000w"
            alt
          >
        </div>
        <div class="nav-div">
          <ul class="nav-ul">
            <li>
              <router-link to="/" tag="span" exact>About</router-link>
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
         
        </div>
      </div>
          </div>
      </template>
      <script>
      export default {
          
      }
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
  margin-top: 100px;
  margin-bottom: 60px;
  /* border: 1px solid red; */
  width: 100%;
  font-size: 30px;
  text-align: left;
  font-family: "futura-pt";
  color: black;
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
  cursor: pointer;
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
  min-height: 50px;
  margin: 100px auto 0;
  border: 1px solid red;
}
      </style>