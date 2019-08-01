<template>
  <div class="home-page" ref="homepage">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul>
        <router-link v-for="item in list" :key="item" :to="'/editor/:' + item">
          <li class="li" :class="{'li-last': item === list.length}">{{ item }}</li>
        </router-link>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import { mapGetters, mapMutations, mapActions } from "vuex";

var id = 0;
export default {
  name: "homePage",
  data() {
    return {
      index: 0,
      list: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    loadTop() {
      setTimeout(() => {
        this.list.unshift(id--);
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    }
  }
};
</script>

<style>
.home-page {
  margin-top: 40px;
}
.home-page .li {
  height: 300px;
  margin-bottom: 10px;
  background-color: skyblue;
  text-align: center;
}
.home-page .li-last {
  margin-bottom: 0;
}
</style>
