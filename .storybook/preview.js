// https://storybook.js.org/docs/guides/guide-vue/
import { configure,addParameters } from '@storybook/vue';

// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);
// Vue.component('my-button', Mybutton);



function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/); // 指定 story 的位置
  // 可以是任意目录，根据自己需要写路径
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    panelPosition: 'right' //操作面板在右边
  },
})

configure(loadStories, module);