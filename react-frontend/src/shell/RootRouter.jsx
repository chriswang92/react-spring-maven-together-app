import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import routerConfig from './common/pageRouter';
import NotFound from './routes/Exception/404';
import { createHashHistory } from 'history';
import NavBarCtn from './containers/NavBarCtn';

function RootRouter({ store }) {
  const LoginLayout = routerConfig['/login'].component;
  const BasicLayout = routerConfig['/home'].component;
  const RegisterPage = routerConfig['/register'].component;
  const GamePage = routerConfig['/game'].component;
  const BlogPage = routerConfig['/blog'].component;
  const history = createHashHistory();

  return (
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        <HashRouter history={history}>
          <NavBarCtn />
          <Switch>
            <Route exact path="/login" component={LoginLayout} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/game" component={GamePage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path={['/home', '/']} component={BasicLayout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default RootRouter;
