/**
 * [description] 数据报表自动化 API 接口
 * 新的接口地址添加在 apiList
 */

import CreateApiList from './index';
import type { ApiListInterface } from './index'

const ApiList: ApiListInterface = [
  {
    url: '/api/login',
    name: 'login',
    method: 'post',
  }
]

const autoReportApiList = new CreateApiList(ApiList).export()

export default autoReportApiList