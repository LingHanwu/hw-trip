import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 引入样式文件
import './assets/css/index.css'



createApp(App).use(router).mount('#app')
