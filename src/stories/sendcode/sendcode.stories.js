
import SendCode from './sendcode.vue';

export default { title: '发送验证码按钮' };

export const withText = () => '<send-code>with text</send-code>';

export const withEmoji = () => '<send-code>😀 😎 👍 💯</send-code>';

export const asAComponent = () => ({
  components: { SendCode },
  template: '<send-code>rounded</send-code>'
});