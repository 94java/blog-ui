import {
  ArticleParams,
  ArticleListItem,
  ArticleAddParams,
  ArticleListGetResultModel,
} from './model/articleModel';
import { defHttp } from '@/utils/http/axios';

enum Api {
  ArticlePage = '/article/page',
  ArticleSave = '/article/save',
  ArticlePublic = '/article/public',
  ArticleDetail = '/article/detail',
  ArticleEdit = '/article/edit',
}

export const saveArticle = (data: ArticleAddParams) =>
  defHttp.post<ArticleListItem>({ url: Api.ArticleSave, data });
export const getArticlePage = (data: ArticleListItem) =>
  defHttp.post<ArticleListItem>({ url: Api.ArticlePage, data });
export const getArticleDetail = (data: ArticleListItem) =>
  defHttp.post<ArticleListItem>({ url: Api.ArticleDetail, data });
export const editArticle = (data: ArticleAddParams) =>
  defHttp.post<ArticleListItem>({ url: Api.ArticleEdit, data });
