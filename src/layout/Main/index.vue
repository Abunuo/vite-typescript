<template>
<div class="main-wrapper">
	<el-container style="min-height: 100%;">
		<el-header>
      <main-header></main-header>
    </el-header>
		<el-container>
			<el-aside width="200px">
        <main-asside></main-asside>
      </el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</div>
</template>

<script>
import MainAsside from '/src/components/Asside.vue'
import MainHeader from '/src/components/Header.vue'
export default {
	name: "MainLayout",
	components: {
		MainAsside,
		MainHeader
	},
	setup() {}
};
</script>

<style lang="scss" scoped>
.main-wrapper {
	width: 100%;
	height: 100%;
	::v-deep(.el-header) {
		padding: 0;
	}
}
</style>
