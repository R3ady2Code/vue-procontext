<template>
	<li class="item" @click.stop="">
		<div class="item__left">
			<input v-model="item.checked" type="checkbox">
			<span>{{ item.name }}</span>
		</div>
		<div class="item__right">
			<input v-model="item.blocks.length" @change="onChangeBlocksLength" type="number" min="0">
			<input v-model="item.color" type="color">
		</div>
	</li>
</template>

<script>
export default {
	name: 'Item',
	props: ['idList', 'idItem'],
	computed: {
		item() {
			return this.$store.getters.getItemById(this.idList, this.idItem)
		}
	},
	methods: {
		onChangeBlocksLength() {
			for (let i = 0; i < this.item.blocks.length; i++) {
				this.item.blocks[i] = { idItem: this.idItem }
			}
		}
	},
}
</script>

<style>

</style>