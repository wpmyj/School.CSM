﻿var alarmVideo = {};


//初始化登录视频平台
alarmVideo.initLogin = function () {
    var activeXhtml = "";
    switch (definedVideoPlatform) {
        case 1://宇视
            activeXhtml = '<object classid="clsid:067A4418-EBAC-4394-BFBE-8C533BA6503A" id="h3c_IMOS_ActiveX" events="true" height="100%" width="100%"></object>';
            break;
        case 2://海康
            break;
        case 3://博世
            activeXhtml = '<object classid="clsid:{B430599E-D328-4713-8DD4-DB0E93947BF0}" id="h3c_IMOS_ActiveX" events="true" height="100%" width="100%"></object>';
            break;
    }
    $("#videoplayerView").html(activeXhtml);
    videoClassify.initLogin();
}

//多路视频播放
//参数:code数组
alarmVideo.playVideo = function (codeArry) {
    videoClassify.playVideo(codeArry);
}

//停止播放视频
alarmVideo.stopPlayVideo = function () {
    videoClassify.stopPlayVideo();
}

//开始视频回放
alarmVideo.startPlayback = function (startTime,endTime) {
    
    var deviceCode = videoClassify.getCamerCodeFromActive();//获取当前窗格的设备code
    if (deviceCode == "" || deviceCode == null) {
        return;
    }
    //var myDate = new Date();
    ////获取当前年
    //var year = myDate.getFullYear();
    ////获取当前月
    //var month = myDate.getMonth() + 1;
    ////获取当前日
    //var date = myDate.getDate();
    //var h = myDate.getHours();       //获取当前小时数(0-23)
    //var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    //var s = myDate.getSeconds();
    //var ss = myDate.getTime();//获取当前时间的毫秒数
    ////当前时间
    //var end_time = year + '-' + timeFormat(month) + "-" + timeFormat(date) + " " + timeFormat(h) + ':' + timeFormat(m) + ":" + timeFormat(s);
    //var timeDifference = $("#timeDifference").text();//时间差
    ////时间差毫秒数
    //var timeDifferencess = timeDifference * 60 * 1000;
    //var startTimeSS = ss - timeDifferencess;
    //var newTime = new Date(startTimeSS);
    ////获取当前年
    //var newyear = newTime.getFullYear();
    ////获取当前月
    //var newmonth = newTime.getMonth() + 1;
    ////获取当前日
    //var newdate = newTime.getDate();
    //var newh = newTime.getHours();       //获取当前小时数(0-23)
    //var newm = newTime.getMinutes();     //获取当前分钟数(0-59)
    //var news = newTime.getSeconds();
    ////开始时间
    //var start_time = newyear + '-' + timeFormat(newmonth) + "-" + timeFormat(newdate) + " " + timeFormat(newh) + ':' + timeFormat(newm) + ":" + timeFormat(news);
    //查询是否有回访录像
    var retStr = videoClassify.DoQueryPlayback(deviceCode, startTime, endTime);
    if (retStr == "") {
        alert("该摄像头没有录像");
        return;
    }
    //停止当前视频播放
    videoClassify.stopOnePlayVideo(windowNum);
    //停止当前视频回放
    var flag = videoClassify.DoStopplayback(windowNum);
    //开始回放
    videoClassify.Doplayback(windowNum, deviceCode, startTime, endTime);
}
//停止视频回放
alarmVideo.stopPlayback = function () {
    var deviceCode = videoClassify.getCamerCodeFromActive();//获取当前窗格的设备code
    if (deviceCode == "" || deviceCode == null) {
        return;
    }
    //停止视频回放
    videoClassify.DoStopplayback(windowNum);
    //继续播放刚才视频
    //videoClassify.onePlayVideo(windowNum, deviceCode);
    //停止视频播放
    alarmVideo.stopPlayVideo();
}
//时间计算
function timeFormat(s) {
    return s < 10 ? '0' + s : s;
}