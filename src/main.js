import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 状态管理
import pinia from './stores'


// 引入样式文件
import './assets/css/index.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
