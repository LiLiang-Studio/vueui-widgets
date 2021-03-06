import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from '../pages/HomeRouter.vue'

Vue.use(Router)

const coms = {
  ColorPicker: () => import('../pages/ColorPicker.vue'),
  Cascader: () => import('../pages/Cascader.vue'),
  Upload: () => import('../pages/Upload.vue'),
  AutoComplete: () => import('../pages/AutoComplete.vue'),
  Select: () => import('../pages/Select.vue'),
  Menu: () => import('../pages/Menu.vue'),
  Dropdown: () => import('../pages/Dropdown.vue'),
  Poptip: () => import('../pages/Poptip.vue'),
  Tooltip: () => import('../pages/Tooltip.vue'),
  Slider: () => import('../pages/Slider.vue'),
  Tabs: () => import('../pages/Tabs.vue'),
  Page: () => import('../pages/Page.vue'),
  Layout: () => import('../pages/Layout.vue'),
  Tree: () => import('../pages/Tree.vue'),
  Carousel: () => import('../pages/Carousel.vue'),
  Modal: () => import('../pages/Modal.vue'),
  Anchor: () => import('../pages/Anchor.vue'),
  Transfer: () => import('../pages/Transfer.vue'),
  InputNumber: () => import('../pages/InputNumber.vue'),
  Input: () => import('../pages/Input.vue'),
  List: () => import('../pages/List.vue'),
  Grid: () => import('../pages/Grid.vue'),
  Drawer: () => import('../pages/Drawer.vue'),
  Notice: () => import('../pages/Notice.vue'),
  Message: () => import('../pages/Message.vue'),
  Scroll: () => import('../pages/Scroll.vue'),
  Spin: () => import('../pages/Spin.vue'),
  LoadingBar: () => import('../pages/LoadingBar.vue'),
  Radio: () => import('../pages/Radio.vue'),
  Steps: () => import('../pages/Steps.vue'),
  Collapse: () => import('../pages/Collapse.vue'),
  Progress: () => import('../pages/Progress.vue'),
  Checkbox: () => import('../pages/Checkbox.vue'),
  Rate: () => import('../pages/Rate.vue'),
  ISwitch: () => import('../pages/Switch.vue'),
  Timeline: () => import('../pages/Timeline.vue'),
  Split: () => import('../pages/Split.vue'),
  Cell: () => import('../pages/Cell.vue'),
  Divider: () => import('../pages/Divider.vue'),
  Breadcrumb: () => import('../pages/Breadcrumb.vue'),
  Card: () => import('../pages/Card.vue'),
  Time: () => import('../pages/Time.vue'),
  ICircle: () => import('../pages/ICircle.vue'),
  Tag: () => import('../pages/Tag.vue'),
  Alert: () => import('../pages/Alert.vue'),
  Avatar: () => import('../pages/Avatar.vue'),
  BackTop: () => import('../pages/BackTop.vue'),
  Affix: () => import('../pages/Affix.vue'),
  Badge: () => import('../pages/Badge.vue'),
  Button: () => import('../pages/Button.vue'),
  Icon: () => import('../pages/Icon.vue'),

  // DatePicker: () => import('../pages/DatePicker.vue'),
  // TimePicker: () => import('../pages/TimePicker.vue'),
  Form: () => import('../pages/Form.vue'),
  Table: () => import('../pages/Table.vue')
}

export const routes = Object.keys(coms).map(_ => ({ path: _, name: _, component: coms[_] }))

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeRouter,
      children: [
        {
          path: '',
          redirect: { name: routes[0].name }
        },
        {
          path: 'SiderLayout',
          name: 'SiderLayout',
          component: () => import('../pages/layout/SiderLayout.vue'),
          meta: { noNav: true }
        },
        {
          path: 'FixedHeader',
          name: 'FixedHeader',
          component: () => import('../pages/layout/FixedHeader.vue'),
          meta: { noNav: true }
        },
        {
          path: 'FixedSider',
          name: 'FixedSider',
          component: () => import('../pages/layout/FixedSider.vue'),
          meta: { noNav: true }
        },
        {
          path: 'ResLayout',
          name: 'ResLayout',
          component: () => import('../pages/layout/ResLayout.vue'),
          meta: { noNav: true }
        }
      ].concat(routes)
    }
  ]
})