<template>
    <el-card shadow=" never">
        <div slot="header" class="clearfix">
            <span>用户列表</span>
        </div>
        <el-table ref="userList" :data="userList" tooltip-effect="dark" width="100%" v-loading="loading">
            <el-table-column prop="nickname" label="昵称" width="150"/>
            <el-table-column prop="avatar_url" label="头像" width="150">
                <template slot-scope="scope">
                    <img class="avatar" :src="scope.row.avatar_url"/>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="150"/>
            <el-table-column prop="created_at" label="注册时间" min-width="1"/>
        </el-table>
        <el-pagination background layout="prev, pager, next, jumper"
                       :total="totalUser"
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
        name: "UserList",
        data: function () {
            return {
                userList: [],
                pageNo: 1,
                loading: true,
                token: "",
                adminId: "",
                totalUser: 0
            }
        },
        mounted: function () {
            let that = this,
                user = sessionStorage.getItem('user');
            user = JSON.parse(user);
            that.token = user.token;
            that.adminId = user.id;
            that.getUserList();
        },
        methods: {
            getUserList: function () {
                let that = this;
                that.loading = true;
                axios.get("user/list-page?pageNo=" + that.pageNo + "&adminId=" + that.adminId + "&token=" + that.token)
                    .then(res => {
                        that.loading = false;
                        if (res.data.code === 2000) {
                            that.userList = res.data.data.userList;
                            that.totalUser = res.data.data.total;
                        }
                    }).catch(err => {
                });
            },
            onPageNoChanged: function (e) {
                let that = this;
                that.pageNo = e;
                that.getUserList();
            }
        }
    }
</script>

<style scoped>
    .avatar {
        width: 48px;
        height: 48px;
    }
</style>