<template>
  <div class="editor">
    <div class="content" @click="back">editor {{editorCode}}</div>
    <base-component :textArr="resArr"></base-component>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import baseComponent from '../../base/base-component.vue'
export default {
  name: 'editor',
  data() {
    return {
      editor: {}, //主编信息
      resArr: ["red", "yellow", "blue"]
    };
  },
  computed: {
    editorCode() {
      return this.$route.params.id
    }
  },
  components: {
    baseComponent
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
