<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <router-link to="/coupon-add">
                <el-button type="primary" size="medium">添加优惠券</el-button>
            </router-link>
        </div>
        <el-table ref="couponList" tooltip-effect="dark" width="100%" :data="couponList" v-loading="loading">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="发放类型">
                            <span>{{ props.row.send_type}}</span>
                        </el-form-item>
                        <el-form-item>
                        </el-form-item>
                        <el-form-item label="使用说明">
                            <span>{{ props.row.describe}}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="优惠券名称" prop="name" width="150"/>
            <el-table-column label="优惠券编号" prop="sn" width="150"/>
            <el-table-column label="折扣类型" prop="discount_type" width="150">
                <template slot-scope="scope">
                    <span v-if="scope.row.discount_type===1">金额减免</span>
                    <span v-else>折扣</span>
                </template>
            </el-table-column>
            <el-table-column label="减免金额\折扣" prop="value" width="150">
                <template slot-scope="scope">
                    <span v-if="scope.row.discount_type === 1">{{scope.row.value}}</span>
                    <span v-else>{{scope.row.discount}}</span>
                </template>
            </el-table-column>
            <el-table-column label="数量" prop="number" width="150"/>
            <el-table-column label="状态" prop="state" width="150">
                <template slot-scope="scope">
                    <span v-if="scope.row.state === 1">已启用</span>
                    <span v-else>已禁用</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" prop="">
                <template slot-scope="scope">
                    <!--<el-button size="mini" type="info" @click="">修改</el-button>-->
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
                       :total="totalCoupon"
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
        name: "CouponList",
        data: function () {
            return {
                pageNo: 1,
                couponList: [],
                loading: true,
                token: "",
                adminId: "",
                totalCoupon: 0
            }
        },
        mounted: function () {
            let that = this,
                user = sessionStorage.getItem('user');
            user = JSON.parse(user);
            that.token = user.token;
            that.adminId = user.id;
            that.getCouponList();
        },
        methods: {
            getCouponList: function () {
                let that = this;
                that.loading = true;
                axios.get("/coupon/list?pageNo=" + that.pageNo + "&adminId=" + that.adminId + "&token=" + that.token)
                    .then(res => {
                        that.loading = false;
                        if (res.data.code === 2000) {
                            that.couponList = res.data.data.couponList;
                            that.totalCoupon = res.data.data.total;
                        }
                    }).catch(err => {
                });
            },
            onPageNoChanged: function (e) {
                let that = this;
                that.pageNo = e;
                that.getCouponList();
            }
        }
    }
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>