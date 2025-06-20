// ==UserScript==
// @name         No Space Scroll
// @name:zh-CN   禁用空格翻页
// @version      1.01
// @description  在页面加载初期即拦截全局的空格键（Space）和 Shift+Space 事件，仅在非输入框、非文本域及非可编辑区域触发时阻止默认的上下翻页行为，确保表单和富文本编辑区中的空格输入功能不受影响。
// @author       珞雪
// @match        *://*/*
// @license      MIT
// @grant        none
// @namespace    https://github.com/luoxue3943/NoSpaceScroll
// ==/UserScript==

/*
声明：请您知晓本插件本是个人测试自用，本不完美也不保证可用性。
相关功能及代码均来自互联网及网友分享，我们仅做了相关功能的整合。
如无意中侵犯了哪个企业或个人等的知识产权，请联系我们将及时删除等相关处理
如果误杀请自行关闭被动去广告
*/

(function () {
  // 判断当前元素是否允许输入空格
  function isEditable(el) {
    return el.matches('input, textarea, [contenteditable="true"]');
  }

  // 核心拦截逻辑
  function killSpace(e) {
    if (e.code === "Space" && !isEditable(e.target)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }

  // 在捕获阶段优先拦截 keydown 和 keypress
  window.addEventListener("keydown", killSpace, { capture: true });
  window.addEventListener("keypress", killSpace, { capture: true });
})();
