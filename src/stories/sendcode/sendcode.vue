<template>
  <span
    class="sendcode component"
    :class="[border ? 'border_p10' : '']"
    :disabled="isStart"
    :style="{ color: color, fontSize: fontSize }"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "SendCode",
  data() {
    return {
      timer: null,
      isStart: false,
      text: "获取短信验证码"
    };
  },
  props: {
    initText: {
      type: String,
      default: "获取验证码"
    },
    second: {
      default: 60,
      validator(val) {
        return /^\d*$/.test(val);
      }
    },
    border: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#00CAFF"
    },
    fontSize: {
      type: String,
      default: "20rpx"
    },
    runText: {
      type: String,
      default: "{%s}秒后重新获取"
    },
    resetText: {
      type: String,
      default: "重新获取验证码"
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    run() {
      let second = this.second;
      this.text = this.getText(this.second);
      this.timer = setInterval(() => {
        second--;
        this.text = this.getText(second);
        second <= 0 && this.stop();
      }, 1000);
    },
    stop: function() {
      this.text = this.resetText;
      this.$emit("input", false);
      this.$emit("stop", false);
      clearInterval(this.timer);
    },
    getText(second) {
      return this.runText.replace(/\{([^{]*?)%s(.*?)\}/g, second);
    }
  },
  watch: {
    value: function(val) {
      this.isStart = val;
      val && this.run();
    }
  },
  mounted() {
    if (this.initText) {
      this.text = this.initText;
    }
  },
  destroyed() {
    this.stop();
  }
};
</script>

<style lang="scss" scoped>
.sendcode.component {
  & .border_p10 {
    line-height: normal;
  }
}
</style>
