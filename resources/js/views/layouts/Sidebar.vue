<template>
    <div>
        <el-menu :unique-opened="true"
                 background-color="#222d32"
                 text-color="#b8c7ce"
                 active-text-color="#fff"
                 :router="true" default-active="1">
            <el-menu-item index="index">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="goods">
                <template slot="title"><i class="el-icon-goods"></i>商品管理</template>
                <el-menu-item index="spu-list">商品列表</el-menu-item>
                <el-menu-item index="category-list">商品分类</el-menu-item>
                <el-menu-item index="brand-list">品牌管理</el-menu-item>
                <el-menu-item index="spec-list">规格管理</el-menu-item>
                <el-menu-item index="attr-list">属性管理</el-menu-item>
            </el-submenu>
            <el-submenu index="order">
                <template slot="title"><i class="el-icon-sold-out"></i>交易管理</template>
                <el-menu-item index="order-list">订单管理</el-menu-item>
                <el-menu-item index="comment-list">评论管理</el-menu-item>
                <el-menu-item index="after-sale-list">售后管理</el-menu-item>
                <el-menu-item index="post-model-list">运费策略</el-menu-item>
            </el-submenu>
            <el-submenu index="market">
                <template slot="title"><i class="el-icon-share"></i>营销管理</template>
                <el-menu-item index="coupon-list">优惠券管理</el-menu-item>
            </el-submenu>
            <el-submenu index="user">
                <template slot="title"><i class="el-icon-tickets"></i>用户管理</template>
                <el-menu-item index="user-list">用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="ad">
                <template slot="title"><i class="el-icon-picture-outline"></i>广告管理</template>
                <el-menu-item index="ad-list">广告列表</el-menu-item>
            </el-submenu>
            <el-submenu index="permit">
                <template slot="title"><i class="el-icon-circle-check-outline"></i>权限管理</template>
                <el-menu-item index="admin-list">管理员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="settings">
                <template slot="title"><i class="el-icon-setting"></i>设置</template>
                <el-menu-item index="shop-set">店铺设置</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>