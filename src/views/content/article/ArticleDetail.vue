<template>
  <PageWrapper :title="title" contentBackground @back="goBack">
    <template #extra>
      <a-button preIcon="ant-design:cloud-upload-outlined"> 导入 </a-button>
      <a-button preIcon="ant-design:eye-outlined"> 预览 </a-button>
      <a-button preIcon="ant-design:save-outlined" @click="handleSave"> 保存 </a-button>
      <a-button preIcon="ant-design:setting-outlined" @click="handleSetting"> 设置 </a-button>
      <a-button type="primary">
        <SendOutlined class="send-icon" />
        发布
      </a-button>
    </template>
    <MarkDown
      :height="height"
      v-model:value="valueRef"
      @change="handleChange"
      ref="markDownRef"
      placeholder="请输入文章内容"
    />
    <ArticleDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import { useGo } from '@/hooks/web/usePage';

  import { MarkDown, MarkDownActionType } from '@/components/Markdown';
  import { type Nullable } from '@vben/types';

  import { SendOutlined } from '@ant-design/icons-vue';

  import { useDrawer } from '@/components/Drawer';
  import ArticleDrawer from './ArticleDrawer.vue';

  import { saveArticle } from '@/api/content/article';

  import { message } from 'ant-design-vue';

  const [registerDrawer, { openDrawer }] = useDrawer();

  defineOptions({ name: 'ArticleDetail' });

  const height = window.innerHeight * 0.74;

  const title = '1212';

  const markDownRef = ref<Nullable<MarkDownActionType>>(null);
  const valueRef = ref(`
  # 标题h1

  ##### 标题h5

  **加粗**
  *斜体*
  ~~删除线~~
  [链接](https://github.com/vbenjs/vue-vben-admin)
  ↓分割线↓

  ---


  * 无序列表1
    * 无序列表1.1

  1. 有序列表1
  2. 有序列表2

  * [ ] 任务列表1
  * [x] 任务列表2

  > 引用示例

  \`\`\`js
  // 代码块:
  (() => {
    var htmlRoot = document.getElementById('htmlRoot');
    var theme = window.localStorage.getItem('__APP__DARK__MODE__');
    if (htmlRoot && theme) {
      htmlRoot.setAttribute('data-theme', theme);
      theme = htmlRoot = null;
    }
  })();
  \`\`\`

  | 表格 | 示例 | 🎉️ |
  | --- | --- | --- |
  | 1 | 2 | 3 |
  | 4 | 5 | 6 |
  `);

  function handleChange(v: string) {
    valueRef.value = v;
  }

  const go = useGo();

  // 页面左侧点击返回链接时的操作
  function goBack() {
    // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
    go('/content/article');
  }

  function handleSetting(record: Recordable) {
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  }

  async function handleSave() {
    await saveArticle({
      articleContent: valueRef.value,
      name: '',
      tag: undefined,
      category: undefined,
      visibility: '',
    });
    message.success('保存成功');
  }
</script>

<style scoped>
  .send-icon {
    transform: rotate(-45deg);
  }
</style>
