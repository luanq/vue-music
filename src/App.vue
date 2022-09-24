<template>
    <el-container>
        <el-aside>
            <SideBar></SideBar>
        </el-aside>
        <el-main>
            <Header></Header>
            <router-view></router-view>
        </el-main>
        <Login v-show="loginDialogVisible" />
        <play-bar></play-bar>
    </el-container>
</template>
<script setup>
    import Sidebar from '@/components/SideBar.vue';
    import Login from '@components/Login.vue';
    import Header from '@components/Header.vue';
    import Playbar from '@components/PlayBarTmp/PlayBar.vue';

    import { computed, onMounted, ref } from 'vue';
    import { useStore } from './store/index';


    const store = useStore();
    const loginDialogVisible = computed(() => store.loginDialogVisible);

</script>
<style scoped>

.el-main{
    background-color: #5b5b5b;
}

</style>
