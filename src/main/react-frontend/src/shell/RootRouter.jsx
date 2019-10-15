import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import routerConfig from './common/pageRouter';
import NotFound from './routes/Exception/404';

function RootRouter({store}) {
  const LoginLayout = routerConfig['/login'].component;
  const BasicLayout = routerConfig['/home'].component;
  const RegisterPage = routerConfig['/register'].component;
  const GamePage = routerConfig['/game'].component;
  
  return (
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginLayout} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/game" component={GamePage} />
            <Route exact path={["/home", "/"]} component={BasicLayout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default RootRouter;