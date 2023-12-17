import { BasicPageParams, BasicFetchResult } from '@/api/model/baseModel';

export type ArticleParams = BasicPageParams & {
  name?: string;
  createTime?: string;
  status?: string;
  tag?: string;
  category?: string;
  [key: string]: any;
};

export interface ArticleListItem {
  id: string | number;
  name: string;
  tag: any;
  category: any;
  visibility: string | number;
  status: string | number;
  browse: number;
  likes: number;
  comments: number;
  user: any;
  updateTime: Date;
}

export interface ArticleAddParams {
  name: string;
  tag: any;
  category: any;
  visibility: string | number;
  articleContent: string | any;
}

/**
 * @description: Request list return value
 */
export type ArticleListGetResultModel = BasicFetchResult<ArticleListItem>;
