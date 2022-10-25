<template>
	<div class="list-container">
		<div class="list-container__head">
			<h3>{{ list.name }}</h3>
			<button v-if="selectedItems.length" @click="onClickToSorted">
				{{ sorted ? 'Перемешать' : 'Сортировать' }}
			</button>
		</div>
		<div class="list-container__foot">
			<Block v-for="(item, i) in selectedItems" :key="i" :color="item.color" :idItem="item.id"
				:idList="list.id" />
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
			return this.$store.getters.getSelecedItems(this.list.id)
		}
	},
	methods: {
		onClickToSorted() {
			if (this.sorted) {
				this.$store.commit('setItems', { idList: this.list.id, items: this.selectedItems.sort(() => Math.random() - 0.5) })
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