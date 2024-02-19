/*
 * @Author: 贺炳硕 hebingshuo@jaka.com
 * @Date: 2024-02-19
 * @LastEditors: 贺炳硕 hebingshuo@jaka.com
 * @LastEditTime: 2024-02-19
 * @Description: 
 */

export default ({ router }) => {
  console.log("typeof window:",typeof window)
  if (typeof window !== 'undefined') {
    
    // 在路由变化时执行
    router.beforeEach((to, from, next) => {
      // 在页面加载完成后执行重定向
      if (to.path === '/') {
        window.location.replace("https://www.jaka.com/docs/");
      } else {
        next();
      }
    });
  }
};
