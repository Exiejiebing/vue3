import axios from "./axios";

// 通过商品id获取商品信息
export function goodsDetail(id) {
  return axios({
    url: 'detail',
    params: {
      iid: id
    }
  })
}

// 推荐商品信息
export function goodsRecommend() {
  return axios({
    url: 'recommend'
  })
}


// 商品详情基本信息
export class DetailBase {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.newPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

// 商品详情店铺信息
export class DetailShop {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.url = shopInfo.shopUrl
    this.fans = shopInfo.cFans
    this.goodsCount = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score;
  }
}

export class DetailSize {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}
