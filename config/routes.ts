export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/t',
    name: 'E9表结构',
    // icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/api',
    name: 'api',
    // icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/et',
    name: 'et表结构',
    // icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/git',
    name: 'git相关使用',
    // icon: 'smile',
    component: './Welcome',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/t',
  },
  {
    component: './404',
  },
];
