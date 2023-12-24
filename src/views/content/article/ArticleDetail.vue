<template>
  <PageWrapper :title="articleData.title" contentBackground @back="goBack">
    <template #extra>
      <a-button preIcon="ant-design:cloud-upload-outlined"> 导入 </a-button>
      <a-button preIcon="ant-design:eye-outlined"> 预览 </a-button>
      <a-button preIcon="ant-design:save-outlined" @click="handleSave(false)"> 保存 </a-button>
      <a-button
        preIcon="ant-design:setting-outlined"
        @click="handleSetting(articleData)"
        :hidden="settingHidden"
      >
        设置
      </a-button>
      <a-button type="primary" @click="handlePublish">
        <SendOutlined class="send-icon" />
        发布
      </a-button>
    </template>
    <MarkDown
      :height="height"
      v-model:value="articleData.content.articleContent"
      @change="handleChange"
      ref="markDownRef"
      placeholder="请输入文章内容"
    />
    <ArticleDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref, unref, computed } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import { useGo } from '@/hooks/web/usePage';

  import { MarkDown, MarkDownActionType } from '@/components/Markdown';
  import { type Nullable } from '@vben/types';

  import { SendOutlined } from '@ant-design/icons-vue';

  import { useDrawer } from '@/components/Drawer';
  import ArticleDrawer from './ArticleDrawer.vue';

  import { saveArticle, getArticleDetail, publishArticle } from '@/api/content/article';

  import { message } from 'ant-design-vue';

  import { useRouter } from 'vue-router';
  import { useTabs } from '@/hooks/web/useTabs';

  const [registerDrawer, { openDrawer }] = useDrawer();

  defineOptions({ name: 'ArticleDetail' });

  const { setTitle } = useTabs();

  const height = window.innerHeight * 0.74;

  const articleData = ref({
    id: '',
    title: '文章详情',
    img: '',
    imgType: '',
    remark: '',
    user: {},
    category: {},
    content: {
      articleContent: '',
    },
    tagList: [],
    status: '',
    visibility: '',
    browse: 0,
    comments: 0,
    likes: 0,
    stars: 0,
    createBy: '',
    createTime: '',
    updateBy: '',
    updateTime: '',
  });

  const markDownRef = ref<Nullable<MarkDownActionType>>(null);
  const articleContent = ref('');

  const { currentRoute, replace } = useRouter();

  // 根据articleId参数控制设置按钮的显示
  const param = computed(() => unref(currentRoute).params);
  const settingHidden = ref(true);
  if (param.value.id === 'undefined') {
    settingHidden.value = true;
  } else {
    // 显示设置按钮
    settingHidden.value = false;
    // 查询文章内容
    getArticleInfo();
  }

  async function getArticleInfo() {
    let resp = await getArticleDetail({
      id: param.value.id,
    });
    articleData.value = resp;
    // 设置tab标题
    setTitle(resp.title);
  }

  function handleChange(v: string) {
    articleContent.value = v;
  }

  const go = useGo();

  // 页面左侧点击返回链接时的操作
  function goBack() {
    // 本例的效果时点击返回始终跳转到账号列表页，实际应用时可返回上一页
    go('/content/article');
  }

  function handleSetting(articleData: any) {
    openDrawer(true, {
      articleData,
      articleId: param.value.id,
    });
  }

  async function handleSave(flag) {
    let articleId = await saveArticle({
      id: param.value.id,
      articleContent: articleData.value.content.articleContent,
      name: '',
      tag: undefined,
      category: undefined,
      visibility: '',
    });
    if (!flag) {
      message.success('保存成功');
    }

    const { name } = unref(currentRoute);
    replace({ name: name!, params: { id: unref(articleId) } });
  }

  async function handlePublish() {
    // 先调用一下保存
    handleSave(true);
    // 发布文章
    await publishArticle({
      id: param.value.id,
    });
    message.success('发布成功');
    go('/content/article');
  }

  async function handleSuccess() {
    getArticleInfo();
  }
</script>

<style scoped>
  .send-icon {
    transform: rotate(-45deg);
  }
</style>
