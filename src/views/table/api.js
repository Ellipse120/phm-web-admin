import request from '@/utils/request'

const baseUrl = '/test'

export function getById (id, source) {
  return request({
    url: `${baseUrl}/info`,
    method: 'get',
    params: {
      id
    },
    cancelToken: source.token
  })
}

export function exportExcel (params) {
  return request({
    url: `${baseUrl}/export`,
    method: 'get',
    params,
    responseType: 'blob'
  })
}
