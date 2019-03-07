import Vue from 'vue';
import Router from 'vue-router';
import RobotForm from './components/RobotForm';
import LeaderBoard from './components/LeaderBoard';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/create'
    },
    {
      path: '/create',
      name: 'RobotForm',
      component: RobotForm
    },
    {
      path: '/leaderboard',
      name: 'LeaderBoard',
      component: LeaderBoard
    }
  ],
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;