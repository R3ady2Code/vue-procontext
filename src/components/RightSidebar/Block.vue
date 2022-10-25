<template>
	<div class="selected-item" :style="{ 'backgroundColor': color }" @click="clickToBlock"></div>
</template>

<script>
export default {
	name: 'Block',
	props: ['color', 'idItem', 'idList'],
	methods: {
		clickToBlock() {
			this.$store.commit('removeItem', { idList: this.idList, idItem: this.idItem })
		}
	}
}
</script>

<style>

</style>