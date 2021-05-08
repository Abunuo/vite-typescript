<template>
<div class="report-container">
	{{user_id}}
</div>
</template>

<script lang='ts' type="module">
import autoReportApi from '../../api/autoReport.api';
import { useStore } from 'vuex';
import { ref, computed } from 'vue'
export default {
	name: 'Report',
	setup(props, context) {
		const store = useStore();
		const switchValue = ref(true)
		const user_id = computed(() => store.getters.user_id)

		function login() {
			autoReportApi.login({
				user_id: store.getters.user_id
			})
		}
		return {
			switchValue,
			user_id,
			login
		}
	},
}
</script>

<style lang="scss" scoped>
  
</style>
