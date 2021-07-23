import axios from "./axios";

// 一级分类
export function getCategory() {
  return axios({
    url: '/category'
  })
}

// 二级分类
export function getSubCategory(maitKey) {
  return axios({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

// 分类下商品信息
export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
