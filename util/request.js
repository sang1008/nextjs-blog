import axios from "axios";


const codeMessage = {
	200: '服务器成功返回请求的数据。',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）。',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。'
}

const service = axios.create({
  baseURL: 'http://blog.isnake.cn',
  timeout: 20000
})

// 获取token
function getToken() {
  return ''
}

// request拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken() // 让每个请求携带自定义token
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 路由白名单（没有返回code）
const whiteList = []

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const code = response.data.success
    if(code === 1){
      return response.data
    } else {
      Promise.reject(response)
    }
    /* if (code === 401) {
      // token失效返回登录
      localStorage.removeItem('token')
      return Promise.reject(response.message)
    } else if (code !== 200) {
      // 判断是否是导出的接口
      if (whiteList.indexOf(response.config.url) !== -1) {
        return response
      } else {
        if (response.message) {
          message.error(response.data.msg || '接口错误，请联系管理员')
        }
        return Promise.reject(response.message)
      }
    } else {
      return response.data
    } */
  },
  (error) => {
    let code = 0
    try {
      code = error.response.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        message.error('网络请求超时')
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        message.error('网络请求错误')
        return Promise.reject(error)
      }
    }
    // message.error(codeMessage[code])
    return Promise.reject(error)
  }
)

export default service