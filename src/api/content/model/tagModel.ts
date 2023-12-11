import { BasicPageParams, BasicFetchResult } from '@/api/model/baseModel';

export type TagParams = BasicPageParams & {
  name?: string;
  createBy?: string;
  createTime?: string;
  [key: string]: any;
};

export interface TagListItem {
  id: string | number;
  name: string;
  shortName: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
}

export interface TagAddParams {
  name: string;
  shortName: string;
}

/**
 * @description: Request list return value
 */
export type TagListGetResultModel = BasicFetchResult<TagListItem>;
