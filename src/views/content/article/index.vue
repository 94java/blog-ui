<template>
  <PageWrapper title="文章管理" :class="prefixCls">
    <template #extra>
      <a-button type="primary" @click="handleView"> 发布文章 </a-button>
    </template>
    <template #headerContent>
      <BasicForm
        :class="`${prefixCls}__header-form`"
        :labelWidth="100"
        :schemas="schemas"
        :showActionButtonGroup="false"
      />
    </template>

    <div :class="`${prefixCls}__container`">
      <List :pagination="paginationProp">
        <template v-for="item in articleData.records" :key="item.id">
          <List.Item>
            <List.Item.Meta>
              <template #description>
                <div :class="`${prefixCls}__content`">
                  <span
                    >分类: {{ item.category.name == undefined ? '无' : item.category.name }}</span
                  >
                  <span>可见性: {{ item.visibility === '1' ? '可见' : '隐藏' }}</span>
                  <span>状态: {{ item.status === '1' ? '已发布' : '草稿' }}</span>
                </div>
                <div :class="`${prefixCls}__action`">
                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="ant-design:eye-outlined"
                      color="#018ffb"
                    />
                    {{ item.browse }}
                  </div>
                  <div :class="`${prefixCls}__action-item`">
                    <Icon :class="`${prefixCls}__action-icon`" icon="bx:bxs-like" color="#459ae8" />
                    {{ item.likes }}
                  </div>
                  <div :class="`${prefixCls}__action-item`">
                    <Icon
                      :class="`${prefixCls}__action-icon`"
                      icon="bx:bxs-message-dots"
                      color="#42d27d"
                    />
                    {{ item.comments }}
                  </div>
                  <span :class="`${prefixCls}__time`">{{ item.time }}</span>
                </div>
              </template>
              <template #title>
                <a :class="`${prefixCls}__title`" @click="handleView(item.id)">
                  {{ item.title }}
                </a>
                <div>
                  <template v-for="tag in item.tagList" :key="tag.id">
                    <Tag class="mb-2">
                      {{ tag.name }}
                    </Tag>
                  </template>
                  <div class="more">
                    <div class="more-info">
                      <a-avatar
                        class="more-info-avatar"
                        src="https://www.hellocode.top/images/qq.jpg"
                        title="sss"
                      />
                      {{ item.createTime }}
                    </div>
                    <a-dropdown :trigger="['click']" placement="bottom" arrow>
                      <template #overlay>
                        <a-menu @click="handleMenuClick" class="drop-menu">
                          <a-menu-item class="drop-menu-item" key="1" @click="handleView(item.id)"
                            ><FormOutlined class="icon" />编辑</a-menu-item
                          >
                          <a-menu-item class="drop-menu-item" key="2" @click="handleEdit(item)"
                            ><SettingOutlined class="icon" />设置</a-menu-item
                          >
                          <a-menu-item class="drop-menu-item" key="3"
                            ><RocketOutlined class="icon" />导出</a-menu-item
                          >
                          <a-menu-divider />
                          <a-menu-item class="drop-menu-item" key="4" style="color: orangered"
                            ><DeleteOutlined class="icon" />删除</a-menu-item
                          >
                        </a-menu>
                      </template>
                      <a-button :icon="h(EllipsisOutlined)" />
                    </a-dropdown>
                  </div>
                </div>
              </template>
            </List.Item.Meta>
          </List.Item>
        </template>
      </List>
    </div>
    <ArticleDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { Tag, List, MenuProps } from 'ant-design-vue';
  import {
    EllipsisOutlined,
    FormOutlined,
    SettingOutlined,
    RocketOutlined,
    DeleteOutlined,
  } from '@ant-design/icons-vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { BasicForm } from '@/components/Form';

  import { schemas, getPageList, articleData, paginationProp } from './data';
  import { PageWrapper } from '@/components/Page';
  import { h } from 'vue';
  import { useGo } from '@/hooks/web/usePage';
  // import type { MenuProps } from 'ant-design-vue';

  import { useDrawer } from '@/components/Drawer';
  import ArticleDrawer from './ArticleDrawer.vue';

  const [registerDrawer, { openDrawer }] = useDrawer();

  const go = useGo();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  const prefixCls = 'list-search';

  getPageList(paginationProp);

  function handleView(id: any) {
    go('/content/article_detial/' + id);
  }

  function handleEdit(record: Recordable) {
    openDrawer(true, {
      articleData: record,
      articleId: record.id,
    });
  }

  function handleSuccess() {
    getPageList(paginationProp);
  }
</script>
<style lang="less" scoped>
  .list-search__container {
    font-size: 14px;
  }

  .list-search__container .list-search__content span {
    margin-right: 14px;
  }

  .list-search__container .list-search__title {
    display: inline-block;
    height: 22px;
    margin-left: 2px;
    font-size: 16px;
  }

  .more {
    float: right;
  }

  .more .more-info {
    display: inline-block;
    margin-right: 30px;
    color: #8b949e;
    font-size: 14px;
    font-weight: normal;
  }

  .more .more-info .more-info-avatar {
    margin-right: 20px;
  }

  .drop-menu {
    width: 140px;
    font-size: 20px;
  }

  .drop-menu .drop-menu-item {
    height: 25px;
    line-height: 25px;
  }

  .drop-menu .drop-menu-item .icon {
    margin-right: 10px;
  }

  .list-search {
    &__header {
      &-form {
        margin-bottom: -16px;
      }
    }

    &__container {
      padding: 12px;
      background-color: @component-background;
    }

    &__title {
      margin-bottom: 12px;
      font-size: 18px;
    }

    &__content {
      color: @text-color-secondary;
    }

    &__action {
      margin-top: 10px;

      &-item {
        display: inline-block;
        padding: 0 16px;
        color: @text-color-secondary;

        &:nth-child(1) {
          padding-left: 0;
        }

        &:nth-child(1),
        &:nth-child(2) {
          border-right: 1px solid @border-color-base;
        }
      }

      &-icon {
        margin-right: 3px;
      }
    }

    &__time {
      position: absolute;
      right: 20px;
      color: rgb(0 0 0 / 45%);
    }
  }
</style>
