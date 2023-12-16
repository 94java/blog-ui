import { FormSchema } from '@/components/Form';

export const searchList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: 'Vben Admin',
      description: ['Vben', '设计语言', 'Typescript', 'Typescript', 'Typescript'],
      content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
      // time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const actions: any[] = [
  { icon: 'ant-design:eye-outlined', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'InputSearch',
    label: '文章名',
    colProps: {
      span: 5,
    },
    componentProps: {
      onSearch: (e: any) => {
        alert(e);
      },
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
      onChange: (e: any) => {
        alert(e);
      },
    },
    colProps: { span: 4 },
  },
  {
    field: 'status',
    label: '分类',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
    colProps: { span: 4 },
  },
  {
    field: 'status',
    label: '标签',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '停用', value: '0' },
      ],
    },
    colProps: { span: 5 },
  },
  {
    field: 'createTime',
    label: '创建时间',
    component: 'RangePicker',
    colProps: { span: 6 },
    componentProps: {
      onChange: (e: any) => {
        alert(e);
      },
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '分类名',
    component: 'Input',
    required: true,
  },
  {
    field: 'shortName',
    label: '缩略名',
    component: 'Input',
  },

  {
    field: 'parentId',
    label: '父分类',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'icon',
    label: '图标',
    component: 'IconPicker',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' },
      ],
    },
    required: true,
  },
  {
    field: 'order',
    label: '排序',
    defaultValue: 5,
    component: 'InputNumber',
    required: true,
  },
];
