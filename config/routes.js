export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                  name: 'sql.interface-mana',
                  icon: 'BoxPlot',
                  path: '/interface',
                  component: './InterfaceMana',
                },
              // {
              //   name: 'list.table-list',
              //   icon: 'table',
              //   path: '/list',
              //   component: './TableList',
              // },
              {
                name: 'sql.sql-edit',
                icon: 'ConsoleSql',
                path: '/sql',
                component: './SqlEdit',
              },{
                name: 'sql.source-mana',
                icon: 'Form',
                path: '/source',
                component: './SourceMana',
              },
              {
                name: 'sql.system-mana',
                icon: 'table',
                path: '/system',
                // component: './SystemMana',
                routes: [
                  {
                    path: '/system/user',
                    name: 'user-mana',
                    icon: 'User',
                    component: './SystemMana/UserMana',
                  },
                  {
                    path: '/system/third',
                    name: 'third-mana',
                    component: './SystemMana/ThirdMana',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
