import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {//get提交方式
      type,
      page
    }
  })
}
