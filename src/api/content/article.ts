import {
  ArticleParams,
  ArticleListItem,
  ArticleAddParams,
  ArticleListGetResultModel,
} from './model/articleModel';
import { defHttp } from '@/utils/http/axios';

enum Api {
  ArticleList = '/article/list',
  ArticleSave = '/article/save',
  ArticlePublic = '/article/public',
}

export const saveArticle = (data: ArticleAddParams) =>
  defHttp.post<ArticleAddParams>({ url: Api.ArticleSave, data });
