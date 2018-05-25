### wTable ###
自动生成表格及分页插件
 
## 使用方法 ###
```javascript
//表头 (前台设置或后台设置均可，以前台为准)
options.theadData 
//格式：支持单字段、多字段，自定义输出
[
    [显示名称, [字段名1,字段名2], function(key){
        return "<span>"+key[0]+"-"+key[1]+"</span>";
    }] 
]

options.trdata //tr属性值
options.paging //分页容器
options.url //接口地址
options.rows //记录条数

options.search //搜索条件 (可不填)
options.search.searchkey.keyword //关键词选择器 (支持数组)
options.search.searchkey.classid //分类选择器 (支持数组)
options.search.searchpre //搜索前执行方法
options.search.searchbtn //搜索按钮选择器

options.callbacks //回调方法 (可不填)

wTable.reload("表格选择器") //刷新表格
 
//重设表格
$wTable.reset({
    table: "表格选择器",
    apiurl: "接口地址",
    currPage: 页码
})
```

具体可以在本项目根目录的index.html文件查看效果

### 更新记录： ###
<a href="https://github.com/weyu/wTable/tree/v1.0">v1.0 2018年5月24日</a><br/>
说明：第一个版本
