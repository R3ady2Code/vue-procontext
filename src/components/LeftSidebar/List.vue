<template>
	<li class="list" @click="isOpen = !isOpen">
		<div class="list__head">
			<Triangle :isOpen="isOpen" />
			<p class="dot" v-if="isHasSelectedItem & !isAllItemsSelected" @click.stop="onClickToCheckBox">&#8226;</p>
			<input type='checkbox' v-model="isAllItemsSelected" @click.stop="onClickToCheckBox" />
			<span>{{ name }}</span>
		</div>
		<ul v-if="isOpen" class="items">
			<Item :idList="idList" v-for="item in items" :key="item.id" :idItem="item.id" />
		</ul>
	</li>
</template>

<script>
import Triangle from '../UI/Triangle';
import Item from './Item'

export default {
	name: 'List',
	components: {
		Triangle, Item
	},
	data: () => ({
		isOpen: false,
		checked: false
	}),
	props: ['idList', 'name'],
	computed: {
		items() {
			return this.$store.getters.getItems(this.idList);
		},
		isAllItemsSelected() {
			return this.$store.getters.isAllItemsSelected(this.idList)
		},
		isHasSelectedItem() {
			return this.$store.getters.isHasSelectedItem(this.idList)
		}
	},
	methods: {
		onClickToCheckBox() {
			this.$store.commit('setCheckedAllItems', { idList: this.idList, value: !this.isAllItemsSelected });
			this.isOpen = true;
		}
	}
}
</script>

<style>

</style>