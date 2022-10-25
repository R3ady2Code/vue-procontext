<template>
	<h3 v-if="isOpen">&#9660;</h3>
	<h3 v-else>&#9658;</h3>
</template>

<script>
export default {
	name: 'Triangle',
	props: {
		isOpen: {
			type: Boolean,
			default: false
		}
	}
}
</script>