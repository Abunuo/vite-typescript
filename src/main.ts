import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

// 引入公共样式
import 'element-plus/lib/theme-chalk/index.css';
import './assets/styles/index.scss';

// 加载入口
import App from './App.vue'

// 引入 route，store
import route from './routes/index'
import store from './store/index'

// 引入全局指令、插件、组件
// import directives from './directives/index';
// import plugins from './plugins/index'
// import compontents from './components/index'

const app = createApp(App);

// https://sentry.io/organizations/abunuo/projects/
Sentry.init({
  app,
  dsn: "https://847eb8b040cf4459a91407617c6d122a@o1306347.ingest.sentry.io/6548788",
  enabled: import.meta.env.MODE === "production",
  environment: import.meta.env.MODE,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(route),
      tracingOrigins: ["localhost"],
    }),
  ],
  beforeSend(event, hint) {
    console.log(event)
    // Check if it is an exception, and if so, show the report dialog
    // if (event.exception) {
    //   Sentry.showReportDialog({ eventId: event.event_id });
    // }
    return event;
  },
  release: "1.0.0",
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app
  .use(route)
  .use(store)
  // .use(compontents)  // 全局组件  eg. 
  // .use(directives)   // 全局指令  eg. v-input-number/v-longpress
  // .use(plugins)      // 全局插件  eg. $message
  .use(ElementPlus)
  .mount('#app');
