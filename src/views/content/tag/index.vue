<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
        <a-popconfirm title="确定删除吗?" ok-text="确定" cancel-text="取消" @confirm="batchDelete">
          <a-button type="error" :disabled="getSelectRows().length == 0"> 删除 </a-button>
        </a-popconfirm>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <TagModel @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getTagList, deleteTag } from '@/api/content/tag';

  import { useModal } from '@/components/Modal';
  import TagModel from './TagModal.vue';

  import { columns, searchFormSchema } from './tag.data';

  import { message } from 'ant-design-vue';

  defineOptions({ name: 'TagManagement' });

  const [registerModal, { openModal }] = useModal();

  const [registerTable, { reload, getSelectRows }] = useTable({
    title: '标签列表',
    api: getTagList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: true,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
      // fixed: undefined,
    },
    rowSelection: {
      type: 'checkbox',
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  async function handleDelete(record: Recordable) {
    await deleteTag([record.id]);
    message.success('删除成功');
    reload();
  }

  async function batchDelete() {
    const ids = getSelectRows().map((item) => item.id);
    await deleteTag(ids);
    message.success('删除成功');
    reload();
  }

  function handleSuccess() {
    reload();
  }
</script>
