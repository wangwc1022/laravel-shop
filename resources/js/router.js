/* jshint esversion: 6 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [

        // =============================  首页  ===============================
        {
            name: "index",
            path: '/',
            component: resolve => void(require(['./views/pages/Index.vue'], resolve))
        },

        // =============================  商品管理  ===============================
        {
            name: "SpuList",
            path: "/spu-list",
            component: resolve => void (require(['./views/pages/goods/SpuList.vue'], resolve))
        },
        {
            name: "SpuDetail",
            path: "/spu-detail",
            component: resolve => void (require(['./views/pages/goods/SpuDetail.vue'], resolve))
        },
        {
            name: "SpuAdd",
            path: "/spu-add",
            component: resolve => void (require(['./views/pages/goods/SpuEdit.vue'], resolve))
        },
        {
            name: "SpuSpecAdd",
            path: "/spu-spec-add",
            component: resolve => void (require(['./views/pages/goods/SpuSpecAdd.vue'], resolve))
        },
        {
            name: "SpuBannerAdd",
            path: "/spu-banner-add",
            component: resolve => void (require(['./views/pages/goods/SpuBannerAdd.vue'], resolve))
        },
        {
            name: "SpuSpecOption",
            path: "/spu-spec-option",
            component: resolve => void (require(['./views/pages/goods/SpuSpecOption.vue'], resolve))
        },
        {
            name: "SkuEdit",
            path: "/sku-edit",
            component: resolve => void (require(['./views/pages/goods/SkuEdit.vue'], resolve))
        },
        {
            name: "CategoryList",
            path: "/category-list",
            component: resolve => void (require(['./views/pages/goods/CategoryList.vue'], resolve))
        },
        {
            name: "CategoryEdit",
            path: "/category-edit",
            component: resolve => void (require(['./views/pages/goods/CategoryEdit.vue'], resolve))
        },
        {
            name: "BrandList",
            path: "/brand-list",
            component: resolve => void (require(['./views/pages/goods/BrandList.vue'], resolve))
        },
        {
            name: "BrandAdd",
            path: "/brand-add",
            component: resolve => void (require(['./views/pages/goods/BrandAdd.vue'], resolve))
        },
        {
            name: "AttrList",
            path: "/attr-list",
            component: resolve => void (require(['./views/pages/goods/AttrList.vue'], resolve))
        },
        {
            name: "AttrGroupAdd",
            path: "/attr-group-add",
            component: resolve => void (require(['./views/pages/goods/AttrGroupAdd.vue'], resolve))
        },
        {
            name: "SpuAttrAdd",
            path: "/spu-attr-add",
            component: resolve => void (require(['./views/pages/goods/SpuAttrAdd.vue'], resolve))
        },
        {
            name: "AttrAdd",
            path: "/attr-add",
            component: resolve => void (require(['./views/pages/goods/AttrAdd.vue'], resolve))
        },
        {
            name: "SpecList",
            path: "/spec-list",
            component: resolve => void (require(['./views/pages/goods/SpecList.vue'], resolve))
        },

        // =============================  交易管理  ===============================
        {
            name: "OrderList",
            path: "/order-list",
            component: resolve => void (require(['./views/pages/trade/OrderList.vue'], resolve))
        },
        {
            name: "OrderDetail",
            path: "/order-detail",
            component: resolve => void (require(['./views/pages/trade/OrderDetail.vue'], resolve))
        },
        {
            name: "CommentList",
            path: "/comment-list",
            component: resolve => void (require(['./views/pages/trade/CommentList.vue'], resolve))
        },

        // ================================================  营销管理  =================================================
        {
            name: "CouponList",
            path: "/coupon-list",
            component: resolve => void (require(['./views/pages/market/CouponList.vue'], resolve))
        },
        {
            name: "CouponAdd",
            path: "/coupon-add",
            component: resolve => void (require(['./views/pages/market/CouponAdd.vue'], resolve))
        },

        // ================================================  用户管理  =================================================
        {
            name: "UserList",
            path: "/user-list",
            component: resolve => void (require(['./views/pages/user/UserList.vue'], resolve))
        },
        {
            name: "AddrList",
            path: "/addr-list",
            component: resolve => void (require(['./views/pages/user/AddrList.vue'], resolve))
        },

        // =============================  广告  ===============================
        {
            name: "AdList",
            path: '/ad-list',
            component: resolve => void(require(['./views/pages/ad/AdList.vue'], resolve))
        },
        {
            name: "AdAdd",
            path: '/ad-add',
            component: resolve => void(require(['./views/pages/ad/AdAdd.vue'], resolve))
        }
    ]
})