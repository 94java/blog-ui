import type { App } from 'vue';
import { Button } from './Button';
import { Input, Layout, Popconfirm, Dropdown, Menu, Avatar, Pagination } from 'ant-design-vue';
import VXETable from 'vxe-table';

export function registerGlobComp(app: App) {
  app
    .use(Input)
    .use(Button)
    .use(Layout)
    .use(VXETable)
    .use(Popconfirm)
    .use(Dropdown)
    .use(Menu)
    .use(Avatar)
    .use(Pagination);
}
