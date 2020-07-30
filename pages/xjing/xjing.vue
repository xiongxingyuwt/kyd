<template>
	<view class="xiejing">
		<view class="hodes" :style="'height:'+ this.$hdev +';'"></view>
		<view class="xjing_banner">
			<view class="container">
				<view class="xjing_top">
					<view class="xlable"><text>汉服</text></view>
					<view class="xlable"><text>唯美</text></view>
				</view>
				<view class="xjing_botton">
					<view class="hanfu_title"><text>汉服穿搭小技巧</text></view>
					<view class="hanfu_name"><text>唯美的龙母</text></view>
				</view>
			</view>
		</view>
		<view class="navs_box">
			<view class="nav_item" v-for="(item,index) in navlists" :key="index" @click="item.linkto">
				<view class="navico"><image class="icoimg" :src="item.icopath"></image></view>
				<view class="nitemname"><text>{{item.tname}}</text></view>
			</view>
		</view>
		<view class="content_box">
			<text>cjdgudf</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navlists:[
					{
						tname:'景点',
						icopath:'',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'文章',
						icopath:'',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'话题',
						icopath:'',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'点评',
						icopath:'',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'拜访',
						icopath:'',
						linkto:function(){
							console.log('跳转方法...')
						}
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import '/static/css/common.css';
	.hodes{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		background-color: #fff;
	}
	.container{
		margin-top: 28px;
	}
	.xjing_banner{
		width: 100%;
		height: 400rpx;
		background-color: #E1F3D8;
	}
	.navs_box.postfix{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.nav_item{
		display: inline-block;
		margin:0 38rpx ;
	}
	.content_box{
		width: 100%;
		height: 9000px;
		background-color: #FAECD8;
	}
</style>
