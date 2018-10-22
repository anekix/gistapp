<template>
		<div>
			<a :href="userForkLink">
			<img 
				:src="userAvatarUrl"
				class="user__avatar" 
				 />
			</a>
			 <div> {{userName}}</div>
		</div>
</template>
<script>
	
	export default {
		name: 'User',
		props:[ 'userAvatarUrl','userName','userForkLink']
	}

</script>

<style lang="stylus" scoped>
.user__avatar
	border-radius 50%
	width 50px
	height 50px
</style>