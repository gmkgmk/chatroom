import dynamic from 'dva/dynamic';

const preventReload = (app, model) => {
  return !app._models.some(({ namespace }) => {
    return namespace === model;
  })
}
const dynamicWrapper = (app, models, component) => {
  return dynamic({
    app,
    models: () => models.filter(model => preventReload(app, model))
      .map(m => import(`../models/${m}.js`)
      ),
    component
  })
}

export const getRouterData = (app) => {
  const routerConfig = {
    '/register': {
      component: dynamicWrapper(app, ['login'], () => import('../pages/register')),
    },
    '/chat': {
      component: dynamicWrapper(app, ['userInfo', 'friends','chat','messages'], () => import('../pages/chat')),
    },
  };
  return routerConfig
}