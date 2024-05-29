```vue
<template>
	<div class="menu_bar">
		<el-menu background-color="rgb(0, 0, 0)" active-text-color="red" :default-active="activeIndex"
			class="el-menu" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">第一</el-menu-item>
			<el-sub-menu index="2" popper-class="test">
				<template #title>第二</template>
				<el-menu-item index="2-1">item one</el-menu-item>
				<el-menu-item index="2-2">item two</el-menu-item>
				<el-menu-item index="2-3">item three</el-menu-item>
			</el-sub-menu>
			<el-menu-item index="3">第三</el-menu-item>
			<el-menu-item index="4">第四</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
	name: 'menu_bar',
	components: {
	},
	setup() {

		const activeIndex = ref('1')
		const activeIndex2 = ref('1')
		const handleSelect = (key, keyPath) => {
			console.log(key, keyPath)
	 
		}
		return {
			activeIndex,
			activeIndex2
		}
	}
})
</script>

<style lang="scss" scoped>

// 取消下划线
.el-menu--horizontal,
.el-menu-item,
.el-menu-item.is-active,
::v-deep .el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
	border-bottom: none;
}

// 一级菜单颜色
.el-menu-item,
::v-deep .el-sub-menu .el-sub-menu__title {
	color: #fff;
}

// 有二级菜单的标题及子菜单菜单字体颜色
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
	color: #fff !important;
}

// 二级菜单hover状态下字体颜色
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
color: red  !important;
}
</style>


<style lang="scss" >
// 有二级菜单的标题时鼠标悬停的颜色
.el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger:hover {
    color: red;
}
</style>
```