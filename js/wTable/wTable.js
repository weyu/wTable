/*! 
Version：wTable v1.0
Author: Charles
Github: https://github.com/weyu/wTable.git
License: Apache License 2.0
*/

( function( $, win ) {
    $.fn.extend({
        wTable: function(options){

            //默认参数
            var defaults = {
                
            };

            var options =  $.extend(defaults, options),
                $table = this, //表格
                $paging = $(options.paging), //分页容器
                apiurl = options.url, //接口地址
                currPage = options.currPage || 1, //页码
                totalPage = 0, //总页数
                tableId = this.attr('id'), //表格ID
                numClass = tableId+'-paging_num_btn', //数字分页按钮class
                flClass = tableId+'-paging_fl_btn', //首尾按钮class
                resetOptions = {}, //重设参数
                // 刷新及重设方法
                wTable = {
                    //刷新
                    reload: function(elm){
                        resetOptions = "";
                        $(elm+'_reload').click();
                    },
                    //重设
                    reset: function(reset_options){
                        resetOptions = {
                            table:reset_options.table, //表格ID
                            apiurl:reset_options.apiurl, //接口地址
                            currPage:reset_options.currPage ? reset_options.currPage : 1 //页码
                        }
                        $(reset_options.table+'_reload').click();
                    }
                },
                //搜索方法
                getSearchData = function(){
                    if(!options.search){
                        return false;
                    }

                    var searchData = {},
                        arr_temp=[];
                    $.each(options.search.searchkey, function(index, value){
                        if(typeof(value) == 'object'){
                            arr_temp = [];
                            $.each(value, function(i,v){
                                arr_temp.push( $(v).val() );
                            });
                        }
                        searchData[index] = arr_temp.length > 1 ? arr_temp : $(value).val();
                    });
                    return searchData;
                },
                getPostData = function(){

                    //原始请求数据
                    var _post = {currPage:currPage, rows:options.rows, search:getSearchData()};

                    // 调试信息
                    options.debug ? console.log("原始请求数据：",_post) : '';

                    if(options.postData){

                        //自定义请求数据：
                        var __post = options.postData(_post);

                        // 调试信息
                        options.debug ? console.log("自定义请求数据：", __post) : '';
                        return __post;
                    }
                    return _post;
                },
                //table数据请求方法
                getTable = function (reset_options){

                    //接收重设参数
                    apiurl = reset_options && reset_options.apiurl ? reset_options.apiurl : apiurl; //接口地址
                    currPage = reset_options && reset_options.currPage ? reset_options.currPage : currPage; //页码

                    //加载动画
                    var tableLoad = layer.msg('正在获取数据，请稍后...', {
                      icon: 16,
                      shade: .05,
                      time: 0
                    });

                    //开始请求
                    $.ajax({
                        type: 'post',
                        url: apiurl,
                        data: getPostData(),
                        dataType: "json",
                        success: function(data){

                            //调试信息
                            options.debug ? console.log("后台返回数据：", data) : '';

                            var trList = data.data.list,  //后台返回的表格数据
                                totalCount = data.data.totalCount, //后台返回的总条数
                                theadData = options.theadData ? options.theadData : data.data.theadData, //表头，优先支持本地返回的表头数据
                                thHtml = '',
                                trHtml = '',
                                pagHtml = '';

                            //计算总页数
                            totalPage = Math.ceil(totalCount / options.rows);

                            //根据数据类型返回对应的值
                            function rtData(_data,_obj){
                                var rtStr = '';
                                //数据项为null
                                if(_obj[_data] === null){
                                    rtStr = '';
                                }
                                //数据项为字段
                                else if(_obj[_data] != undefined){
                                    rtStr = _obj[_data];
                                }
                                //数据项为数组
                                else if(typeof(_data) == 'object'){
                                    rtStr = [];
                                    $.each(_data, function(arrnum, arrdata){
                                        rtStr.push(_obj[arrdata] === null ? '' : _obj[arrdata] != undefined ? _obj[arrdata] : arrdata);
                                    })
                                }
                                //数据项为普通字符串
                                else{
                                    rtStr = _data;
                                }
                                return rtStr;
                            }

                            //生成表头
                            $.each(theadData, function(index, value){
                                thHtml += '<th>'+ value[0] +'</th>';
                            });

                            //生成表格内容
                            $.each(trList, function(index, obj){
                                var tdStr = '';
                                //遍历后台返回的表格数据
                                $.each(theadData, function(num, arr){
                                    //如果存在自定义方法
                                    if(typeof(arr[2]) == 'function'){
                                        //生成td，内容为自定义方法的返回值
                                        tdStr += '<td>'+ arr[2](rtData(arr[1], obj)) +'</td>';
                                    } else{
                                        tdStr += '<td>'+ rtData(arr[1], obj) +'</td>';
                                    }
                                });

                                var trData = "";
                                if(options.trdata != undefined){
                                    //如果存在自定义方法
                                    if(typeof(options.trdata[2]) == 'function'){
                                        trData = options.trdata[0]+'="'+ options.trdata[2](rtData(options.trdata[1], obj)) +'"';
                                    } else{
                                        trData = options.trdata[0]+'="'+ rtData(options.trdata[1], obj) +'"';
                                    }
                                }

                                trHtml += '<tr '+ trData +'>'+ tdStr +'</tr>';
                            });

                            thHtml = '<theadData>'+ thHtml +'</theadData>';
                            trHtml = '<tbody>'+ trHtml +'</tbody>';

                            //生成表格
                            $table.html(thHtml+trHtml);
                            
                            //当前页数小于5 页总数小于等于5且大于1
                            if(currPage < 5 && totalPage <= 5 && totalPage > 1){
                                for(var i=1; i<= totalPage; i++){
                                    var pagClass = i == currPage ? 'active' : '';
                                    pagHtml += '<li class="'+numClass+' '+ pagClass +'"><a href="#">'+ i +'</a></li>';
                                }

                            }

                            //当前页数小于5 页总数大于5
                            if(currPage < 5 && totalPage > 5){
                                for(var i=1; i<= 5; i++){
                                    var pagClass = i == currPage ? 'active' : '';
                                    pagHtml += '<li class="'+numClass+' '+ pagClass +'"><a href="#">'+ i +'</a></li>';
                                }
                            }

                            //当前页数大于等于5 当前页小于页总数
                            else if(currPage>=5 && currPage < totalPage){
                                var drNum=totalPage - currPage == 1 ? 1 : 0;
                                for(var i=currPage+1-3-drNum; i<= currPage+2-drNum; i++){
                                    var pagClass = i == currPage ? 'active' : '';
                                    pagHtml += '<li class="'+numClass+' '+ pagClass +'"><a href="#">'+ i +'</a></li>';
                                }
                            } 

                            //当前页数等于页总数
                            else if(currPage == totalPage && totalPage >= 5){
                                for(var i=currPage-4; i<= currPage; i++){
                                    var pagClass = i == currPage ? 'active' : '';
                                    pagHtml += '<li class="'+numClass+' '+ pagClass +'"><a href="#">'+ i +'</a></li>';
                                }
                            } 

                            //显示首页和尾页按钮
                            if(totalPage > 1){
                                pagHtml = '<li class="'+flClass+' prev-page"><a href="#">首页</a></li>' + pagHtml + '<li class="'+flClass+' next-page"><a href="#">末页</a></li>';
                            }
                            
                            //表格重置事件所属按钮
                            var reloadElm = $('#'+tableId+'_reload').length < 1 ? '<span id="'+tableId+'_reload"></span>' : '';
                            
                            //当前页码信息
                            var nowPageInfo = totalPage > 1 ? '当前页码'+ currPage +'，共'+ totalPage +'页' : '';
                            $paging.parent().find('#'+tableId+'_nowPage').length < 1 ? $paging.parent().append('<p id="'+tableId+'_nowPage" class="nowpage-tips"></p>') : '';

                            //生成分页
                            $paging.html(pagHtml).after(reloadElm);

                            //填充页码信息
                            $paging.parent().find('#'+tableId+'_nowPage').html(nowPageInfo);

                            //关闭加载动画
                            layer.close(tableLoad);

                            //回调函数
                            options.callbacks != undefined ? options.callbacks(data) : '';

                        },
                        error: function(){
                            layer.msg('数据加载失败，请刷新页面重试');
                        }
                    });
                };


            //数字分页按钮
            $(document).on('click', '.'+numClass, function(){
                currPage = Number($(this).text());
                getTable();
            });

            //首页和尾页按钮
            $(document).on('click', '.'+flClass, function(){
                $(this).hasClass('prev-page') ? currPage = 1 : $(this).hasClass('next-page') ? currPage = totalPage : '';
                getTable();
            });

            // 重载
            $(document).on('click', '#'+tableId+'_reload', function(){
                getTable(resetOptions);
            });

            //搜索按钮
            if(options.search){
                //点击搜索按钮生成搜索对象
                $(document).on('click', options.search.searchbtn, function(){

                    //执行搜索前方法
                    if(typeof(options.search.searchpre) == 'function'){
                        var power = options.search.searchpre();
                        if(power === false){
                            return power;
                        }
                    }

                    //页码归1
                    currPage = 1;

                    //获取表格
                    getTable();
                });
            }
            
            getTable();

            win.$wTable = wTable;
        }

    });

}( jQuery, window ));