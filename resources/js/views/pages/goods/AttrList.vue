<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <router-link to="/attr-group-add">
                <el-button type="primary" size="medium">添加属性组</el-button>
            </router-link>
        </div>
        <el-table ref="groupList" :data="groupList" tooltip-effect="dark" width="100%" v-loading="loading">
            <el-table-column label="属性组名称" prop="name" width="150px">
            </el-table-column>
            <el-table-column label="所属分类" prop="category_id" width="150px">
            </el-table-column>
            <el-table-column label="包含属性" prop="" min-width="1">
                <template slot-scope="scope">
                    <el-tag
                            v-for="attr in scope.row.attrs"
                            :key="attr.id"
                            type="primary"
                            :disable-transitions="true">
                        {{attr.name}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop=""
                    width="200"
                    label="操作">
                <template slot-scope="scope">
                    <router-link :to="{path:'/attr-add', query: {attrGroupId: scope.row.id}}">
                        <el-button
                                size="mini"
                                type="primary">添加属性
                        </el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next, jumper"
                       :total="totalGroup"
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
        name: "AttrList",
        data: function () {
            return {
                groupList: [],
                pageNo: 1,
                loading: true,
                token: "",
                adminId: "",
                totalGroup: 0,
            }
        },
        mounted: function () {
            let that = this,
                user = sessionStorage.getItem('user');
            user = JSON.parse(user);
            that.token = user.token;
            that.adminId = user.id;
            that.getAttrGroupList();

        },
        methods: {
            getAttrGroupList: function () {
                let that = this;
                axios.get("/attr/group-list?pageNo=" + that.pageNo + "&adminId=" + that.adminId + "&token=" + that.token)
                    .then(res => {
                        that.loading = false;
                        if (res.data.code === 2000) {
                            that.groupList = res.data.data.groupList;
                            that.totalGroup = res.data.data.total;
                        }
                    }).catch(err => {
                })
            },
            onPageNoChanged: function (e) {
                let that = this;
                that.pageNo = e;
                that.getAttrGroupList();
            }
        }
    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
</style>