import { TagParams, TagListItem, TagListGetResultModel, TagAddParams } from './model/tagModel';
import { defHttp } from '@/utils/http/axios';

enum Api {
  TagList = '/tag/list',
  TagDetail = '/tag/detail',
  TagAdd = '/tag/add',
  TagEdit = '/tag/edit',
  TagDelete = '/tag/delete',
}

export const getTagList = (params: TagParams) =>
  defHttp.post<TagListGetResultModel>({ url: Api.TagList, params });
export const addTag = (data: TagAddParams) => defHttp.post<TagListItem>({ url: Api.TagAdd, data });
export const editTag = (data: TagAddParams) =>
  defHttp.post<TagListItem>({ url: Api.TagEdit, data });
export const deleteTag = (data: any[]) => defHttp.post<TagListItem>({ url: Api.TagDelete, data });
