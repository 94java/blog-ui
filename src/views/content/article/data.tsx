import { FormSchema } from '@/components/Form';

import { getArticlePage } from '@/api/content/article';

import { getCategoryTree } from '@/api/content/category';
import { getTagList } from '@/api/content/tag';
import { uploadApi } from '@/api/sys/upload';
import { ref } from 'vue';

export const articleData = ref({});

export const paginationProp = ref({
  showSizeChanger: false,
  showQuickJumper: true,
  pageSize: 10,
  current: 1,
  total: 100,
  showTotal: (total: number) => `总 ${total} 条`,
  // onChange: pageChange,
  // onShowSizeChange: pageSizeChange,
});

export function getPageList(data?: any) {
  getArticlePage(data).then((resp) => {
    articleData.value = resp;
    paginationProp.value.total = resp.total;
  });
}

export const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'InputSearch',
    label: '文章名',
    colProps: {
      span: 5,
    },
    componentProps: {
      onSearch: (e: any) => {
        getPageList({
          title: e,
        });
      },
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '已发布', value: '1' },
        { label: '草稿', value: '0' },
      ],
      onChange: (e: any) => {
        getPageList({
          status: e,
        });
      },
    },
    colProps: { span: 4 },
  },
  {
    field: 'sortId',
    label: '分类',
    component: 'ApiSelect',
    componentProps: {
      api: getCategoryTree,
      resultField: 'data',
      optionFilterProp: 'label',
      labelField: 'name',
      valueField: 'id',
      onChange: (e: any) => {
        getPageList({
          sortId: e,
        });
      },
    },
    colProps: { span: 4 },
  },
  {
    field: 'tagIds',
    label: '标签',
    component: 'ApiSelect',
    componentProps: {
      api: getTagList,
      resultField: 'records',
      optionFilterProp: 'label',
      labelField: 'name',
      valueField: 'id',
      mode: 'tags',
      immediate: true,
      onChange: (e: any) => {
        getPageList({
          tagIds: e,
        });
      },
    },
    colProps: { span: 5 },
  },
  {
    field: 'createTimes',
    label: '创建时间',
    component: 'RangePicker',
    colProps: { span: 6 },
    componentProps: {
      onChange: (e: any) => {
        getPageList({
          createTimes: e,
        });
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
      api: getCategoryTree,
      resultField: 'data',
      optionFilterProp: 'label',
      labelField: 'name',
      valueField: 'id',
      onChange: (e, v) => {
        console.log('ApiTreeSelect====>:', e, v);
      },
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'tagIds',
    label: '标签',
    component: 'ApiSelect',
    componentProps: {
      api: getTagList,
      resultField: 'records',
      optionFilterProp: 'label',
      labelField: 'name',
      valueField: 'id',
      mode: 'tags',
      immediate: true,
      onChange: (e, v) => {
        console.log('ApiTreeSelect====>:', e, v);
      },
    },
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
    componentProps: {
      api: uploadApi,
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
