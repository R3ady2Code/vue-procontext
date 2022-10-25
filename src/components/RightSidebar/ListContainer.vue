<template>
	<div class="list-container">
		<div class="list-container__head">
			<h3>{{ list.name }}</h3>
			<button v-if="selectedItems.length" @click="onClickToSorted">
				{{ sorted ? 'Перемешать' : 'Сортировать' }}
			</button>
		</div>
		<div v-if="sorted">
			<div class="list-container__foot" v-for="(item, i) in selectedItems" :key="i">
				<Block v-for="(block, i) in item.blocks" :key="i" :idItem="item.id" :idList="list.id" />
			</div>
		</div>
		<div class="list-container__foot" v-else>
			<Block v-for="(block, i) in selecedBlocks" :key="i" :idItem="block.idItem" :idList="list.id" />
		</div>

	</div>
</template>

<script>
import Block from './Block'

export default {
	name: 'ListContainer',
	props: ['list'],
	components: {
		Block
	},
	data: () => ({
		sorted: true
	}),
	computed: {
		selectedItems() {
			return this.$store.getters.getSelectedItems(this.list.id)
		},
		selecedBlocks() {
			return this.$store.getters.getSelectedBlocks(this.list.id)
		}
	},
	methods: {
		onClickToSorted() {
			if (this.sorted) {
				this.selecedBlocks = this.selecedBlocks.sort(() => Math.random() - 0.5)
			} else {
				this.$store.commit('setItems', { idList: this.list.id, items: this.selectedItems.sort((a, b) => a.id - b.id) })
			}

			this.sorted = !this.sorted
		}
	}
}
</script>

<style>

</style>