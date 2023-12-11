import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const content: AppRouteModule = {
  path: '/content',
  name: 'Content',
  component: LAYOUT,
  redirect: '/content/article',
  meta: {
    orderNo: 20,
    icon: 'ant-design:read-outlined',
    title: t('routes.content.content'),
  },
  children: [
    {
      path: 'article',
      name: 'Article',
      meta: {
        title: t('routes.content.article'),
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/demo/system/account/index.vue'),
    },
    {
      path: 'category',
      name: 'Category',
      meta: {
        title: t('routes.content.category'),
        ignoreKeepAlive: false,
      },
      component: () => import('@/views/content/category/index.vue'),
    },
    // {
    //   path: 'account_detail/:id',
    //   name: 'AccountDetail',
    //   meta: {
    //     hideMenu: true,
    //     title: t('routes.demo.system.account_detail'),
    //     ignoreKeepAlive: true,
    //     showMenu: false,
    //     currentActiveMenu: '/system/account',
    //   },
    //   component: () => import('@/views/demo/system/account/AccountDetail.vue'),
    // },
    {
      path: 'tag',
      name: 'Tag',
      meta: {
        title: t('routes.content.tag'),
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/content/tag/index.vue'),
    },

    {
      path: 'resource',
      name: 'Resource',
      meta: {
        title: t('routes.content.resource'),
        ignoreKeepAlive: true,
      },
      component: () => import('@/views/demo/system/menu/index.vue'),
    },
  ],
};

export default content;
