<template>
    <el-card shadow="never">
        <el-tabs v-model="active" type="card" @tab-click="onTabClicked">
            <el-tab-pane label="商品信息" name="info">
                <router-link :to="{path: '/spu-edit', query:{type: 'modify', spuId: spuId}}">
                    <el-button type="primary" size="medium">
                        商品编辑
                    </el-button>
                </router-link>
                <br/>
                <br/>
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>商品信息</span>
                    </div>
                    <el-row>商品名称: {{spu.name}}</el-row>
                    <el-row>品牌: {{spu.brand_name}}</el-row>
                    <el-row>分类: {{spu.category_name}}</el-row>
                    <el-row>状态:
                        <span v-if="spu.state">已上架</span>
                        <span v-else>已下架</span>
                    </el-row>
                </el-card>
                <br/>
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>商品详情</span>
                    </div>
                    <span v-html="spuDetail.html">

                </span>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="商品属性" name="attr">
                <router-link :to="{path: '/spu-attr-edit', query:{spuId:spuId,categoryId:spu.category_id}}">
                    <el-button type="primary" size="medium">
                        编辑属性
                    </el-button>
                </router-link>
                <el-table ref="attrList" :data="attrList" tooltip-effect="dark" width="100%">
                    <el-table-column label="属性名称" prop="attr_name"/>
                    <el-table-column label="属性值" prop="value"/>
                    <el-table-column label="属性组" prop="attr_group_name"/>
                    <el-table-column label="操作">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="商品规格" name="spec">
                <router-link :to="{path: '/spu-spec-edit', query: {spuId: spuId}}">
                    <el-button type="primary" size="medium">编辑规格</el-button>
                </router-link>
                <el-table ref="specList" tooltip-effect="dark" :data="specList" width="100%">
                    <el-table-column prop="name" label="名称" width="150px">
                    </el-table-column>
                    <el-table-column label="选项" min-width="1">
                        <template slot-scope="scope">
                            <el-tag
                                    v-for="option in scope.row.options"
                                    :key="option.id"
                                    type="primary"
                                    :disable-transitions="true">
                                {{option.name}}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="200px">
                        <template slot-scope="scope">
                            <router-link
                                    :to="{path: '/spu-spec-option', query: {spuId: spuId, specId: scope.row.id}}">
                                <el-button size="mini" type="info" @click="">修改选项
                                </el-button>
                            </router-link>
                            <el-button size="mini" type="danger" @click="deleteSpec(scope.$index, scope.row.id)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="产品列表" name="sku">
                <router-link :to="{path: '/sku-edit',query: {type:'create', spuId: spuId}}">
                    <el-button type="primary" size="medium">添加产品</el-button>
                </router-link>
                <el-table ref="skuList" :data="skuList" tooltip-effect="dark" width="100%">
                    <el-table-column prop="id" label="产品编号" width="100px" align="center"/>
                    <el-table-column prop="name" label="名称" width="150px" align="center"/>
                    <el-table-column prop="image_url" label="商品图片" width="150px" align="center">
                        <template slot-scope="scope">
                            <img class="avatar" :src="scope.row.image_url"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="origin_price" label="原价" width="150px" align="center"/>
                    <el-table-column prop="price" label="价格" width="150px" align="center"/>
                    <el-table-column prop="number" label="数量" width="150px" align="center"/>
                    <el-table-column prop="value" label="规格" min-width="1"/>
                    <el-table-column prop="state" label="状态" width="100px" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.state===1">已上架</span>
                            <span v-else>已下架</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="is_recom" label="是否推荐" width="100px" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.is_recom === 1">是</span>
                            <span v-else>否</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="is_hot" label="是否热销" width="100px" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.is_hot === 1">是</span>
                            <span v-else>否</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="350px">
                        <template slot-scope="scope">
                            <router-link
                                    :to="{path: '/sku-edit', query: {type: 'modify', spuId: spuId, skuId: scope.row.id}}">
                                <el-button size="mini" type="info">修改</el-button>
                            </router-link>
                            <el-button v-if="scope.row.state" size="mini" type="warning"
                                       @click="modifySkuState('disable', scope.$index, scope.row.id)">下架
                            </el-button>
                            <el-button v-else size="mini" type="success"
                                       @click="modifySkuState('enable', scope.$index, scope.row.id)">上架
                            </el-button>
                            <el-button size="mini" type="danger" @click="deleteSku(scope.$index, scope.row.id)">删除
                            </el-button>
                            <el-button type="primary" size="mini" @click="modifySkuSpecial('recom', 1, scope)"
                                       v-if="scope.row.is_recom === 0">设置推荐
                            </el-button>
                            <el-button type="primary" size="mini" @click="modifySkuSpecial('recom', 0, scope)"
                                       v-else>取消推荐
                            </el-button>
                            <el-button type="primary" size="mini" @click="modifySkuSpecial('hot', 1, scope)"
                                       v-if="scope.row.is_hot === 0">设置热销
                            </el-button>
                            <el-button type="primary" size="mini" @click="modifySkuSpecial('hot', 0, scope)"
                                       v-else>取消热销
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="Banner" name="banner">
                <router-link :to="{path: '/spu-banner-add',query: {spuId: spuId}}">
                    <el-button type="primary" size="medium">添加Banner</el-button>
                </router-link>
                <el-button type="danger" size="medium" @click="deleteBanners()">批量删除</el-button>
                <el-table ref="multipleTable" :data="bannerList" tooltip-effect="dark" style="width: 100%"
                          v-loading="loadingBanner">
                    <el-table-column type="selection" width="55"/>
                    <el-table-column label="图片" prop="imageUrl" width="150">
                        <template slot-scope="scope">
                            <el-popover placement="right" title="图片预览" trigger="hover">
                                <img :src="scope.row.image_url"/>
                                <img slot="reference" :src="scope.row.image_url" :alt="scope.row.image_url"
                                     style="max-height: 50px;max-width: 130px"/>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="排序" prop="sort_order" width="150"/>
                    <el-table-column label="状态" prop="state" width="150">
                        <template slot-scope="scope">
                            <span v-if="scope.row.state===0">已禁用</span>
                            <span v-else>已启用</span>
                        </template>
                    </el-table-column>
                    <el-table-column min-width="1" label="操作">
                        <template slot-scope="scope">
                            <el-button v-if="scope.row.state" size="mini" type="warning"
                                       @click="modifyBannerState('disable', scope.$index, scope.row.id)">禁用
                            </el-button>
                            <el-button v-else size="mini" type="success"
                                       @click="modifyBannerState('enable', scope.$index, scope.row.id)">启用
                            </el-button>
                            <el-button size="mini" type="danger"
                                       @click="deleteBanner(scope.$index, scope.row.id)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SpuDetail",
        data: function () {
            return {
                spuId: 0,
                active: "info",
                categoryId: "",
                spu: {},
                spuDetail: {},
                skuList: [],
                specList: [],
                attrList: [],
                bannerList: [],
                token: "",
                adminId: "",
                loadingBanner: true
            }
        },
        mounted: function () {
            let that = this,
                spuId = that.$route.query.spuId,
                user = sessionStorage.getItem('user');
            user = JSON.parse(user);
            that.token = user.token;
            that.adminId = user.id;
            let active = that.$route.query.active;
            console.info(active);
            if (active) that.active = active;
            that.spuId = spuId;
            axios.get("spu/detail?spuId=" + spuId + "&adminId=" + that.adminId + "&token=" + that.token)
                .then(res => {
                    if (res.data.code === 2000) {
                        that.spu = res.data.data.spu;
                        that.categoryId = res.data.data.spu.category_id;
                        that.spuDetail = res.data.data.detail;
                    }
                })
                .catch(err => {
                });
            axios.get("spu/specOptionList?spuId=" + spuId + "&adminId=" + that.adminId + "&token=" + that.token)
                .then(res => {
                    if (res.data.code === 2000) {
                        that.specList = res.data.data;
                    }
                });
            axios.get("sku/listBySpu?spuId=" + that.spuId + "&adminId=" + that.adminId + "&token=" + that.token)
                .then(res => {
                    if (res.data.code === 2000) {
                        that.skuList = res.data.data;
                    }
                })
                .catch(err => {

                });
            axios.get("/attr/value-list-spu?spuId=" + that.spuId + "&adminId=" + that.adminId + "&token=" + that.token)
                .then(res => {
                    if (res.data.code === 2000) {
                        that.attrList = res.data.data;
                    }
                });
            that.loadBanner();

        },
        methods: {
            loadBanner: function () {
                let that = this;
                that.loadingBanner = true;
                axios.get("/spu/banner-list?spuId=" + that.spuId + "&adminId=" + that.adminId + "&token=" + that.token)
                    .then(res => {
                        that.loadingBanner = false;
                        if (res.data.code === 2000) {
                            that.bannerList = res.data.data;
                        }
                    });
            },
            modifyBannerState: function (type, index, id) {
                let that = this,
                    state = 1;
                if (type === "disable") state = 0;
                let message = state ? "启用" : "禁用";
                that.$confirm("确认" + message + "Banner?", '提示', {
                    confirmButtonText: "确认",
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let data = {
                        state: state,
                        id: id,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("spu/modify-banner-state", data)
                        .then(res => {
                            if (res.data.code === 2000) that.bannerList[index].state = state;
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消' + message
                    });
                });
            },
            deleteBanner: function (index, id) {
                let that = this, ids = [];
                ids.push(id);
                that.doDeleteBanner(ids);
            },
            deleteBanners: function () {
                let that = this,
                    selections = that.$refs.multipleTable.selection;
                if (selections.length) {
                    let ids = [];
                    for (let section of selections) {
                        ids.push(section.id);
                    }
                    that.doDeleteBanner(ids);
                }
            },
            doDeleteBanner: function (ids) {
                let that = this;
                that.$confirm("确认删除Banner?", '提示', {
                    confirmButtonText: "确认",
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let data = {
                        ids: ids,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("spu/delete-banner", data)
                        .then(res => {
                            console.info();
                            if (res.data.code === 2000) {
                                that.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                that.loadBanner();
                            }
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            onTabClicked: function (tab, event) {
                let that = this;
                that.active = tab.name;
            },
            modifySkuSpecial: function (type, isSet, node) {
                let that = this,
                    messageSet = "设置为",
                    messageType = "推荐";
                if (type === 'hot') messageType = "热销";
                if (isSet === 0) messageSet = "取消";
                that.$confirm("是否" + messageSet + '首页' + messageType + '推荐商品', '警告', {
                    confirmButtonText: "确认",
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let data = {
                        id: node.row.id,
                        isSet: isSet,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("/sku/" + type, data)
                        .then(res => {
                            if (res.data.code === 2000) {
                                if (type === 'recom') node.row.is_recom = isSet;
                                else if (type === 'hot') node.row.is_hot = isSet;
                            }
                        })
                }).catch(() => {
                    that.$message({
                        type: 'info',
                        message: '已取消设置'
                    });
                });
            },
            modifySkuState: function (type, index, id) {
                let that = this,
                    state = 1;
                if (type === "disable") state = 0;
                let message = state ? "上架" : "下架";
                that.$confirm("确认" + message + "该产品?", '提示', {
                    confirmButtonText: "确认",
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let data = {
                        state: state,
                        id: id,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("sku/modify-state", data)
                        .then(res => {
                            if (res.data.code === 2000) that.skuList[index].state = state;
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消' + message
                    });
                });
            },
            deleteSpec: function (index, id) {
                let that = this;
                this.$confirm('删除规格会造成严重后果，确认是否删除?', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let ids = [];
                    ids.push(id);
                    let data = {
                        ids: ids,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("spu-spec/delete", data)
                        .then(res => {
                            if (res.data.code === 2000) {
                                that.skuList.splice(index, 1);
                                that.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            deleteSku: function (index, id) {
                let that = this;
                this.$confirm(' 确认删除当前产品?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let ids = [];
                    ids.push(id);
                    let data = {
                        ids: ids,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("sku/delete", data)
                        .then(res => {
                            if (res.data.code === 2000) {
                                that.skuList.splice(index, 1);
                                that.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }
                        });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .image {
        width: 48px;
        height: 48px;
    }
</style>