<template>
	<div class="container">
		<ul class="lists">
			<List v-for="list in lists" :key="list.id" :idList="list.id" :name='list.name' />
		</ul>
	</div>
</template>

<script>
import List from './List';
export default {
	name: "LeftSidebar",
	components: {
		List
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