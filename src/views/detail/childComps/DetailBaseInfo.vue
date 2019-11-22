<template>
	<div class="base-info" v-if="Object.keys(goods).length !== 0">
		<h3 class="base-info__title">{{ goods.title }}</h3>
		<div class="base-info__price">
			<span class="new">{{ goods.newPrice }}</span>
			<span class="old">{{ goods.oldPrice }}</span>
			<span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
		</div>
		<div class="base-info__other">
			<span v-for="(column, index) in goods.columns" :key="index">{{ column }}</span>
		</div>
		<div class="base-info__service">
			<div class="item" v-for="index in goods.services.length - 1" :key="index">
				<img :src="goods.services[index - 1].icon" />
				<span>{{ goods.services[index - 1].name }}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'DetailBaseInfo',
	props: {
		goods: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			defaultIcon: '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png'
		};
	}
};
</script>

<style lang="less" scoped>
.base-info {
	padding: 15px 8px 0;
	background-color: #fff;
	margin-bottom: 5px;
}
.base-info__title {
	font-weight: bolder;
	line-height: 1.4;
}
.base-info__price {
	margin-top: 10px;
}
.new {
	font-size: 24px;
	color: #ff5777;
}
.old {
	font-size: 13px;
	margin-left: 5px;
	text-decoration: line-through;
	color: #999999;
}
.discount {
	font-size: 12px;
	padding: 2px 5px;
	color: #fff;
	background-color: #ff5777;
	border-radius: 5px;
	margin-left: 5px;
	position: relative;
	top: -8px;
}
.base-info__other {
	color: #999999;
	margin-top: 15px;
	line-height: 30px;
	display: flex;
	font-size: 13px;
	justify-content: space-between;
	position: relative;
}
.base-info__service {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 7px 0;
}
.item {
	display: flex;
	align-items: center;
	padding: 3px 0;
}
.item img {
	width: 14px;
	height: 14px;
	margin-right: 5px;
}
.item span {
	font-size: 12px;
}
</style>
