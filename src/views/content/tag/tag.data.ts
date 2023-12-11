import { BasicColumn, FormSchema } from '@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '标签名',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '缩略名',
    dataIndex: 'shortName',
    width: 160,
  },
  {
    title: '创建者',
    dataIndex: 'createBy',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 150,
  },
  {
    title: '更新者',
    dataIndex: 'updateBy',
    width: 100,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 150,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '标签名',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'createBy',
    label: '创建者',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'createTime',
    label: '创建时间',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  // {
  //   field: 'id',
  //   label: 'id',
  //   component: 'Input',
  // },
  {
    field: 'name',
    label: '标签名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'shortName',
    label: '缩略名',
    required: false,
    component: 'Input',
  },
];
