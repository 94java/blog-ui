import { FormSchema } from '@/components/Form';
import { treeOptionsListApi } from '@/api/demo/tree';

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
    field: 'field12',
    component: 'BasicTitle',
    label: '常规设置',
    componentProps: {
      line: true,
      span: true,
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'sortId',
    component: 'ApiTreeSelect',
    label: '分类',
    helpMessage: ['ApiTreeSelect组件', '使用接口提供的数据生成选项'],
    required: true,
    componentProps: {
      // api: treeOptionsListApi,
      resultField: 'list',
      onChange: (e, v) => {
        console.log('ApiTreeSelect====>:', e, v);
      },
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'tag',
    label: '标签',
    component: 'Select',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'remark',
    label: '摘要',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '请输入文章摘要',
      allowClear: true,
      rows: 3,
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'field13',
    component: 'BasicTitle',
    label: '高级设置',
    componentProps: {
      line: true,
      span: true,
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'img',
    component: 'ImageUpload',
    label: '封面图',
    required: true,
    defaultValue: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
    componentProps: {
      // api: uploadApi,
      accept: ['png', 'jpeg', 'jpg'],
      maxSize: 2,
      maxNumber: 3,
    },
    span: 24,
    // rules: [
    //   {
    //     required: true,
    //     trigger: 'change',
    //     validator(_, value) {
    //       if (isArray(value) && value.length > 0) {
    //         return Promise.resolve();
    //       } else {
    //         return Promise.reject('请选择上传图片');
    //       }
    //     },
    //   },
    // ],
  },

  // {
  //   field: 'imgType',
  //   label: '封面格式',
  //   component: 'Input',
  // },
  {
    field: 'visibility',
    component: 'RadioGroup',
    label: '可见性',
    defaultValue: '1',
    colProps: {
      span: 12,
    },
    componentProps: {
      options: [
        {
          label: '公开',
          value: '1',
        },
        {
          label: '隐藏',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'commentsStatus',
    component: 'RadioGroup',
    label: '允许评论',
    colProps: {
      span: 12,
    },
    defaultValue: '1',
    componentProps: {
      options: [
        {
          label: '是',
          value: '1',
        },
        {
          label: '否',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'createTime',
    label: '发布时间',
    component: 'DatePicker',
    defaultValue: Date.now(),
    colProps: {
      span: 12,
    },
  },
  {
    field: 'updateTime',
    label: '修改时间',
    component: 'DatePicker',
    defaultValue: Date.now(),
    colProps: {
      span: 12,
    },
  },
];
