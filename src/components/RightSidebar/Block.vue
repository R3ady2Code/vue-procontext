<template>
	<div class="selected-item" :style="{ 'backgroundColor': colorOfBlock }" @click="clickToBlock"></div>
</template>

<script>
export default {
	name: 'Block',
	props: ['idItem', 'idList'],
	methods: {
		clickToBlock() {
			this.$store.commit('removeItem', { idList: this.idList, idItem: this.idItem })
		}
	},
	computed: {
		colorOfBlock() {
			return this.$store.getters.whatIsBlockColor(this.idList, this.idItem)
		}
	}
}
</script>

<style>

</style>