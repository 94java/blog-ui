import {
  CategoryParams,
  CategoryListItem,
  CategoryAddParams,
  CategoryListGetResultModel,
} from './model/categoryModel';
import { defHttp } from '@/utils/http/axios';

enum Api {
  CategoryTreeList = '/category/tree',
  CategoryAdd = '/category/add',
  CategoryEdit = '/category/edit',
  CategoryDelete = '/category/delete',
}

export const getCategoryTree = (data: CategoryParams) =>
  defHttp.post<CategoryListGetResultModel>({ url: Api.CategoryTreeList, data });
export const addCategory = (data: CategoryAddParams) =>
  defHttp.post<CategoryListItem>({ url: Api.CategoryAdd, data });
export const editCategory = (data: CategoryAddParams) =>
  defHttp.post<CategoryListItem>({ url: Api.CategoryEdit, data });
export const deleteCategory = (data: any[]) =>
  defHttp.post<CategoryListItem>({ url: Api.CategoryDelete, data });
