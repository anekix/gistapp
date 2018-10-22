<template>
		<div>
			<img 
				:src="userAvatarUrl"
				class="user__avatar" 
				 />
			 <div> {{userName}}</div>
		</div>
</template>
<script>
	
	export default {
		name: 'userAvatar',
		props:[ 'userAvatarUrl','userName']
	}

</script>

<style lang="stylus" scoped>
.user__avatar
	border-radius 50%
	width 50px
	height 50px
</style>