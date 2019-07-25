<template>
  <div class="editor">
    <div class="content" @click="back">editor {{editorCode}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";

export default {
  name: 'editor',
  data() {
    return {
      editor: {} //主编信息
    };
  },
  computed: {
    editorCode() {
      return this.$route.params.id
    }
  },
  methods: {
    //返回上一级路由
    back() {
      console.log(this.$route.params)
      // this.$router.go(-1);
    }
  }
};
</script>

<style>
.editor {
  margin-top: 40px;
}
.content {
  border: 10px groove goldenrod;
  font-size: 24px;
  line-height: 30px;
  text-align: center
}
</style>
