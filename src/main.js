// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Message, Transfer, Dialog, Checkbox, Menu, Submenu, MenuItem, Dropdown, DropdownMenu, DropdownItem, Radio, RadioGroup, RadioButton, Button, Input, Switch, Image, Select, Option, Table, TableColumn, Pagination, Form, FormItem, DatePicker, Collapse, CollapseItem, TabPane, Tabs, Tag } from 'element-ui'
import 'assets/sass/element-variables.scss'
import 'assets/sass/iconfonts.sass'

Vue.component(Message.name, Message)
Vue.use(Transfer)
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
Vue.use(Checkbox)
Vue.use(Dialog)

Vue.config.productionTip = false

Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
