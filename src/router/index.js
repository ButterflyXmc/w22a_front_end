import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
import PostCandy from '@/components/PostCandy'
import UpdateCandy from '@/components/UpdateCandy'
import DeleteCandy from '@/components/DeleteCandy'


Vue.use(VueRouter)

const routes = [
{
  path: "/",
  component: HomePage
},
{
  path :"/post",
  component: PostCandy
},
{
  path: "/update",
  component: UpdateCandy
},
{
  path: "/delete",
  component: DeleteCandy
}
]

const router = new VueRouter({
  routes
})

export default router
