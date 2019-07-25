<template>
  <div id="app">
    <mt-header title="唐诗宋词赏析" fixed>
      <mt-button slot="left" icon="back" @click="goBackHome">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>-->
    <router-view></router-view>
  </div>
</template>

<script>
var id = 0;
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    goBackHome() {
      this.$router.push("/");
    }
  },
  components: {}
};
</script>

<style>
body,
div,
span,
header,
footer,
nav,
section,
aside,
article,
ul,
dl,
dt,
dd,
li,
a,
p,
h1,
h2,
h3,
h4,
h5,
h6,
i,
b,
textarea,
button,
input,
select,
figure,
figcaption {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  font-family: "Microsoft Yahei", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

input[type="button"],
input[type="submit"],
input[type="search"],
input[type="reset"] {
  -webkit-appearance: none;
}

textarea {
  -webkit-appearance: none;
}
</style>
