<template>
	<div class="container">
		<ListContainer v-for="list in lists" :key="list.id" :list='list' />
	</div>
</template>

<script>
import ListContainer from './ListContainer'
export default {
	name: 'RightSidebar',
	components: {
		ListContainer
	},
	computed: {
		lists() {
			return this.$store.getters.getLists
		}
	}
}
</script>

<style>

</style>