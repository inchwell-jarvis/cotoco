<template>
    <div class='box'>
     
    </div>
</template>
<script>
    // 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    export default {
        // 定义属性
        data() {
            return {
                // 检索项集合
                retrieval: {
                    pageNum: 1,
                    numPerPage: this.$store.state.NewDisplayNumber,
                    orderField: "",
                    orderDirection: "",
                },
                // 表格数据
                tableData: [],
                // 数据总条数
                total: 0,
            };
        },
        // 计算属性，会监听依赖属性值随之变化
        computed: {
            // 组合所有检索项
            retrievalJT() {
                return JSON.stringify(this.retrieval)
            }
        },
        // 监控data中的数据变化
        watch: {
            // 监听检索项变化启动检索
            retrievalJT(young, old) {
                this.WatchFenYe(young, old) ? this.$refs.SaxoFenYe.ReviseConNumber1() : this.start()
            }
        },
        // 方法集合
        methods: {
            // 获取数据
            start() {
            },
            // 分页
            func: function (n, p) {
                this.retrieval.numPerPage = n;
                this.retrieval.pageNum = p;
                this.start();
            },
        },
        // 生命周期 - 创建完成（可以访问当前this实例）
        created() {
            this.start();
        },
        // 生命周期 - 挂载完成（可以访问DOM元素）
        mounted() { },
        beforeCreate() { }, // 生命周期 - 创建之前
        beforeMount() { }, // 生命周期 - 挂载之前
        beforeUpdate() { }, // 生命周期 - 更新之前
        updated() { }, // 生命周期 - 更新之后
        beforeDestroy() { }, // 生命周期 - 销毁之前
        destroyed() { }, // 生命周期 - 销毁完成
        activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
    };
</script>

<style lang='scss' scoped>
</style>