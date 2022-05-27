import request from '@/utils/request'

export default{
  //医院设置列表方法
  getHospSetList(current,limit,searchObj){
    return request ({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data:searchObj //使用json传递条件对象
    })
  },
  
  //医院删除方法
  deleteHospSet(id){
     return request ({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  //批量删除
  batchRemoveHospSet(idList){
    return request ({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data:idList //使用json传递条件对象
    })
  },
  //锁定与取消锁定
  lockHostSet(id,status){
    return request ({
      url: `/admin/hosp/hospitalSet/localHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置
  saveHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  //院设置id查询
  getHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }
}
