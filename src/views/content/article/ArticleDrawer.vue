<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    title="文章设置"
    width="36%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" :actionColOptions="{ span: 24 }" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import { BasicForm, useForm } from '@/components/Form';
  import { formSchema } from './data';
  import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
  import { editArticle } from '@/api/content/article';

  import { message } from 'ant-design-vue';

  defineOptions({ name: 'CategoryDrawer' });

  const emit = defineEmits(['success', 'register']);

  const articleId = ref('');

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { span: 24 },
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    resetFields();
    setDrawerProps({ confirmLoading: false });
    articleId.value = data.articleId;

    data.articleData.sortId = data.articleData.category ? data.articleData.category.id : '';
    data.articleData.tagIds = data.articleData.tagList
      ? data.articleData.tagList.map((item) => item.id)
      : [];
    setFieldsValue({
      ...data.articleData,
    });
  });

  async function handleSubmit() {
    try {
      const values = await validate();
      setDrawerProps({ confirmLoading: true });
      values.id = unref(articleId);
      await editArticle(values);
      message.success('修改成功');
      closeDrawer();
      emit('success');
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }
</script>
