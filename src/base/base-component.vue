<template>
  <div id="wrapper">
    <div class="main" @click="itemClick">
      <div class="main-item" :class="item" :data-color="index" v-for="(item, index) in textArr" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    itemClick(event) {
      console.log(event.target.dataset.color);
      console.log(event.target.innerText);
    }
  },
  props: {
    textArr: {
      type: Array,
      value: []
    }
  }
};
</script>

<style scoped>
#wrapper {
  height: 577px;
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  flex: 1;
}
.main .main-item {
  flex: 1;
}
.blue {
  background-color: deepskyblue;
}
.red {
  background-color: deeppink;
}
.yellow {
  background-color: yellow;
}
</style>
