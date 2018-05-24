<?php

$tableData = array(
    "code" => "OM_000000",
    "data" => array(
        "theadData" => array(
            array(
                'ID','agentId'
            ),
            array(
                'status','status'
            ),
            array(
                '坐席类型','agentType'
            ),
            array(
                '姓名','name'
            ),
            array(
                '坐席工号','queueNo'
            ),
            array(
                '通话日期','talkCreateTime'
            ),
            array(
                '拨打量','callCount'
            ),
            array(
                '接通量','talkCount'
            ),
            array(
                '联系客户数','customerNumbers'
            ),
            array(
                '振铃时长','ringTimes'
            ),
            array(
                '通话时长','talkTimes'
            ),
            array(
                '话后处理时长','atferTalkTimes'
            ),
            array(
                '总登陆时长','totalLoginTime'
            ),
            array(
                '上班天数','onlineDays'
            ),
            array(
                '坐席薪资','settleMoney'
            )
        ),
        "list" => array(
            array(
                "agentId" => "60146",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "蒜薹",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60147",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "小黄瓜",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60148",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "心里美",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60149",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "油麦菜",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60150",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "西兰花",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60151",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "荆芥",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60152",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "香葱",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
            array(
                "agentId" => "60153",
                "agentType" => "蔬菜部",
                "atferTalkTimes" => 43,
                "callCount" => 6,
                "customerNumbers" => 6,
                "name" => "生菜",
                "onlineDays" => 1,
                "queueNo" => 156,
                "ringTimes" => 170,
                "settleMoney" => 7.87000,
                "status" => 0,
                "talkCount" => 6,
                "talkCreateTime" => "2018-05-09",
                "talkTimes" => 574,
                "totalLoginTime" => 1279
            ),
        ),
        "currPage" => 1,
        "pageSize" => 8,
        "totalCount" => 58,
        "totalPage" => 8
    ),
    "message" => "处理成功"
);

echo json_encode($tableData);

?>