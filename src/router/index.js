import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载页面
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')


//1.安装插件
Vue.use(VueRouter)



//2.配置路由信息
const routes = [
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name:'home',
        component: Home
      },
      {
        path: '/category',
        name:'category',
        component: Category
      },
      {
        path: '/cart',
        name:'cart',
        component: Cart
      },
      {
        path: '/profile',
        name:'profile',
        component: Profile
      },
      {
        path: '/detail',
        name:'detail',
        component: Detail
      }
]
//3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

//3.导出
export default router