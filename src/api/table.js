import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/phm-app/table/list',
    method: 'get',
    params
  })
}
