import service from "./util/request";

export const websiteInfo = ()=>{
  return service({
    url: '/api/blog/config/config-base/v1/list',
  })
}