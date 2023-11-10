import { createApp } from 'vue'
import App from './App.vue'
import tableView from './components/tableView'
import rovView from './components/rovView'
import FormView from './components/FormView'
const app = createApp(App)
// createApp(App).mount('#app')

app.component('table-view',tableView)
app.component('rov-view',rovView)
app.component('Form-View',FormView)
  app.mount('#app')
