<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <router-link :to="{path: 'post-model-edit', query: {type: 'create'}}">
                <el-button type="primary" size="medium">添加新模版</el-button>
            </router-link>
        </div>
        <el-table v-loading="loading">

        </el-table>
    </el-card>
</template>

<script>
    export default {
        name: "PostModelList",
        data: function () {
            return {
                token: "",
                adminId: ""
            }
        }
    }
</script>

<style scoped>

</style>