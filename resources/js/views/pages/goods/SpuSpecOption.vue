<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <span>规格列表</span>
        </div>
        <div>
            <el-tag
                    v-for="option in optionList"
                    :key="option"
                    :type="primary"
                    disable-transitions=true>
                {{option.name}}
            </el-tag>
            <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="optionInput"
                    size="small"
                    @keyup.enter.native="addOption"
                    @blur="addOption">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加规格</el-button>
        </div>
    </el-card>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SpuSpecOption",
        data: function () {
            return {
                optionList: [],
                inputVisible: false,
                inputValue: '',
                spuId: "",
                specId: "",
                token: "",
                adminId: "",
            }
        },
        mounted: function () {
            let that = this,
                spuId = that.$route.query.spuId,
                specId = that.$route.query.specId,
                user = sessionStorage.getItem('user');
            user = JSON.parse(user);
            that.token = user.token;
            that.adminId = user.id;
            that.spuId = spuId;
            that.specId = specId;
            axios.get("/spu/optionList?spuId=" + spuId + "&specId=" + specId + "&adminId=" + that.adminId + "&token=" + that.token)
                .then(res => {
                    if (res.data.code === 2000) {
                        that.optionList = res.data.data;
                    }
                })
                .catch(err => {
                })
        },
        methods: {
            showInput: function () {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.optionInput.$refs.input.focus();
                });
            },
            addOption: function () {
                let that = this,
                    inputValue = that.inputValue;
                if (inputValue) {
                    let data = {
                        name: inputValue,
                        spuId: that.spuId,
                        specId: that.specId,
                        token: that.token,
                        adminId: that.adminId
                    };
                    axios.post("/spu/createOption", data)
                        .then(res => {
                            if (res.data.code === 2000) {
                                that.optionList.push({name: inputValue});
                            } else {
                                that.$message({
                                    type: 'error',
                                    message: '添加失败!'
                                });
                            }
                        })
                        .catch(err => {
                        });
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>

<style scoped>
    .el-tag {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .button-new-tag {
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .input-new-tag {
        margin-bottom: 10px;
        width: 90px;
        vertical-align: bottom;
    }
</style>