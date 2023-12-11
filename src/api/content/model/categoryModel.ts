import { BasicPageParams, BasicFetchResult } from '@/api/model/baseModel';

export type CategoryParams = BasicPageParams & {
  name?: string;
  createTime?: string;
  status?: string;
  [key: string]: any;
};

export interface CategoryListItem {
  id: string | number;
  name: string;
  shortName: string;
  icon: string;
  status: string;
  order: string | number;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
}

export interface CategoryAddParams {
  name: string;
  shortName: string;
  parentId: string;
  order: string | number;
  icon: string;
  status: string;
}

/**
 * @description: Request list return value
 */
export type CategoryListGetResultModel = BasicFetchResult<CategoryListItem>;
