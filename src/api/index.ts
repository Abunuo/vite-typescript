/**
 * [CreateApiList description] 生成 apilist
 * @param list: ApiListInterface [api 配置列表]
 * 
 */

import request from '../utils/request'
// 需要中断请求时调用
import axios from 'axios'
const CancelToken = axios.CancelToken;

export default class CreateApiList {
  private apiOptionsList: ApiListInterface;
  private apiList: {
    [key: string]: (options: any) => {}
  }
  constructor(list: ApiListInterface) {
    this.apiOptionsList = list;
    this.apiList = {};
    this._createApiList();
  }
  _createApiList() {
    this.apiOptionsList.forEach((api: ApiInterface): void => {
      this.apiList[api.name] = (options: any): any => {
        return request({
          url: api.url,
          method: api.method,
          params: 'get' == api.method ? options : undefined,
          data: 'post' == api.method ? options : undefined,
          cancelToken: api.cancelTokenName ? new CancelToken(function (cancel) {
            window[api.cancelTokenName as string] = cancel;
          }) : undefined
        });
      }
    })
  }
  export() {
    return this.apiList;
  }
}

export interface ApiInterface {
  url: string,
  name: string,
  method: 'get' | 'post',
  params?: object,
  data?: string | object,
  cancelTokenName?: string
}

export type ApiListInterface = Array<ApiInterface>;

