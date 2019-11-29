// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Menu, Submenu, MenuItem, Dropdown, DropdownMenu, DropdownItem, Radio, RadioGroup, RadioButton, Button, Input, Switch, Image, Select, Option, Table, TableColumn, Pagination, Form, FormItem, DatePicker, Collapse, CollapseItem, TabPane, Tabs, Tag, Notification, MessageBox } from 'element-ui'
import 'assets/sass/element-variables.scss'
import 'assets/sass/iconfonts.sass'

Vue.use(Button)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Image)
Vue.use(Option)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(DatePicker)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.config.productionTip = false

Vue.prototype.$notify = Notification
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
