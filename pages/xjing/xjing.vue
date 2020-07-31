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
		<view class="navs_box frowsa" v-bind:class="{'postfix':postfix}">
			<view class="nav_item" v-for="(item,index) in navlists" :key="index" @click="item.linkto">
				<view class="navico"><image class="icoimg" :src="item.icopath"></image></view>
				<view class="nitemname"><text>{{item.tname}}</text></view>
			</view>
		</view>
		<view class="content_box" :style="'padding-top:'+ paddingtp +'px;'">
			<text>cjdgudf</text>
		</view>
		<image src="/static/image/wem.jpg" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paddingtp : 0,
				postfix:false,
				screenHeight: this.$hdev,	 //屏幕高度
				isLoading: false, 	//防止频繁触发
				navlists:[
					{
						tname:'景点',
						icopath:'/static/image/wem.jpg',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'文章',
						icopath:'/static/image/wem.jpg',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'话题',
						icopath:'/static/image/wem.jpg',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'点评',
						icopath:'/static/image/wem.jpg',
						linkto:function(){
							console.log('跳转方法...')
						}
					},
					{
						tname:'拜访',
						icopath:'/static/image/wem.jpg',
						linkto:function(){
							console.log('跳转方法...')
						}
					}
				]
			}
		},
		methods: {
			
		},
		onPageScroll: function(e) {
						//防止重复触发
						if(this.isLoading){
							return;
						}
						const query = uni.createSelectorQuery().in(this);
						query.select('.xjing_banner').boundingClientRect(data => {
							const { height } = data
							const { top } = data
							if(top <= -412){
								this.postfix = true
							} else{
								this.postfix = false
								this.paddingtp = 0
							}
						}).exec();
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
		background-color: #fff;
	}
	.nav_item{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.content_box{
		width: 100%;
		background-color: #FAECD8;
		
	}
</style>
