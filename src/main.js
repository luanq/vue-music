import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import *as getApi from '@apis/http'
import util from '@utils/util'
import common from '@assets/js/common'
import '@assets/css/global.css'
import '@assets/less/reset.less'
import '@assets/fonts/fonts.css'

import App from './App.vue'

const app=createApp(App)

app.config.globalProperties['$http'] = getApi;
app.config.globalProperties['$utils'] = util;
app.config.globalProperties['$COMMON'] = common;
app.config.globalProperties['$msg'] = ElMessage;

app.use(router).use(store).mount('#app')