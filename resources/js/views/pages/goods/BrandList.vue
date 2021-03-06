<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <router-link :to="{path: '/brand-edit',query :{type: 'create'}}">
                <el-button type="primary" size="medium">添加品牌</el-button>
            </router-link>
            <el-button type="danger" size="medium" @click="deleteBrands()">批量删除</el-button>
        </div>
        <el-table ref="multipleTable" :data="brandList" tooltip-effect="dark" style="width: 100%" v-loading="loading">
            <el-table-column type="selection" width="55"/>
            <el-table-column prop="name" label="名称" width="120"/>
            <el-table-column prop="cover" label="品牌图片" width="120">
                <template slot-scope="scope">
                    <el-popover placement="right" title="图片预览" trigger="hover">
                        <img :src="scope.row.logo"/>
                        <img slot="reference" :src="scope.row.logo" :alt="scope.row.logo"
                             style="max-height: 50px;max-width: 130px"/>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="region" label="地区" width="120"/>
            <el-table-column prop="describe" label="描述" min-width="1"/>
            <el-table-column prop="state" label="状态" width="120">
                <template slot-scope="scope">
                    <span v-if="scope.row.state===0">已禁用</span>
                    <span v-else>已启用</span>
                </template>
            </el-table-column>
            <el-table-column width="300" label="操作">
                <template slot-scope="scope">
                    <router-link :to="{path: '/brand-edit',query :{type: 'modify', brandId:scope.row.id}}">
                        <el-button size="mini" type="info">修改</el-button>
                    </router-link>
                    <el-button v-if="scope.row.state" size="mini" type="warning"
                               @click="modifyState('disable', scope.$index, scope.row.id)">禁用
                    </el-button>
                    <el-button v-else size="mini" type="success"
                               @click="modifyState('enable', scope.$index, scope.row.id)">启用
                    </el-button>
                    <el-button size="mini" type="danger"
                               @click="deleteBrand(scope.$index, scope.row.id)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next, jumper"
                       :total="totalBrand"
                       :page-sizes="[20, 50, 100]"
                       :page-size="20"
                       @current-change="onPageNoChanged"
                       :current-page.sync="pageNo"
                       style="margin-top: 20px; margin-bottom: 20px; float: right;"/>
    </el-card>
</template>

<script>
    import axios from "axios";

    export default {
        name: "BrandList",
        data: function () {
            return {
                brandList: [],
                pageNo: 1,
                loading: true,
                token: "",
                adminId: "",
                totalBrand: 0
            }
        },
        mounted: function () {
            let that = this,
                user = sessionStorage.getItem('user');
            user = JSON.parse(user);
            that.token = user.token;
            that.adminId = user.id;
            that.getBrandList();

        },
        methods: {
            getBrandList: function () {
                let that = this;
                that.loading = true;
                axios.get('brand/page-list?pageNo=' + that.pageNo + "&adminId=" + that.adminId + "&token=" + that.token)
                    .then(res => {
                        that.loading = false;
                        if (res.data.code === 2000) {
                            that.brandList = res.data.data.brandList;
                            that.totalBrand = res.data.data.total;
                        }
                    }).catch(err => {
                });
            },
            onPageNoChanged: function (e) {
                let that = this;
                that.pageNo = e;
                that.getBrandList();
            },
            modifyState: function (type, index, id) {
                let that = this,
                    state = 1;
                if (type === "disable") state = 0;
                let message = state ? "启用" : "禁用";
                that.$confirm("确认" + message + "品牌?", '提示', {
                    confirmButtonText: "确认",
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios.post("brand/modState", {
                        state: state,
                        id: id,
                        token: that.token,
                        adminId: that.adminId
                    }).then(res => {
                        if (res.data.code === 2000) that.brandList[index].state = state;
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消' + message
                    });
                });
            },
            deleteBrand: function (index, id) {
                let that = this;
                this.$confirm("删除品牌可能会导致严重的问题，是否确认删除！", '提示', {
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
                    axios.post("brand/delete", data)
                        .then(res => {
                            if (res.data.code === 2000) {
                                that.brandList.splice(index, 1);
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
            deleteBrands: function () {
                let that = this;
                let selections = that.$refs.multipleTable.selection;
                if (selections.length) {
                    that.$confirm("删除品牌可能会导致严重的问题，是否确认删除！", '提示', {
                        confirmButtonText: "确认",
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        let ids = [];
                        for (let section of selections) {
                            ids.push(section.id);
                        }
                        let data = {
                            ids: ids,
                            token: that.token,
                            adminId: that.adminId
                        };
                        axios.post("brand/delete", data)
                            .then(res => {
                                if (res.data.code === 2000) {
                                    that.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                    that.$router.reload();
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
    }
</script>

<style scoped>
    .logo {
        width: 48px;
        height: 48px;
    }
</style>