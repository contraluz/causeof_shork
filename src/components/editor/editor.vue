<template>
  <div class="editor">
    <div class="content" @click="back">editor</div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";

export default {
  data() {
    return {
      editor: {} //主编信息
    };
  },
  methods: {
    //返回上一级路由
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.content {
  border: 10px groove goldenrod;
  font-size: 24px;
  line-height: 30px;
  text-align: center
}
</style>
