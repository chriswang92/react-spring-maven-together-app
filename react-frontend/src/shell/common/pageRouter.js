import LoadableCpnt from '../../utils/LoadableCpnt';

const routerConfig = {
  '/login': {
    component: LoadableCpnt({
      loader: () => import('../../register&login/containers/LoginFormCtn')
    })
  },
  '/home': {
    component: LoadableCpnt({
      loader: () => import('../../home/containers/BasicLayoutCtn')
    })
  },
  '/register': {
    component: LoadableCpnt({
      loader: () => import('../../register&login/components/MainLayout')
    })
  },
  '/game': {
    component: LoadableCpnt({
      loader: () => import('../../game-tictactoe/GamePage')
    })
  },
  '/blog': {
    component: LoadableCpnt({
      loader: () => import('../../blog/containers/BlogManagePageCtn')
    })
  }
};
export default routerConfig;
