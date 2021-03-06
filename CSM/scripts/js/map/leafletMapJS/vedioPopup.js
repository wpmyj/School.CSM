﻿var vedioPopup = null;//视频弹窗

$(document).ready(function () {
    //videoClassify.Init();//初始登录播放视频平台
    addVedioPopup();
    csm.mapContainer.setView(csm.center, 17);
    mapOperaEvent();
});


//地图相关交互事件与视频控件的联动
function mapOperaEvent() {
    csm.mapContainer.on('move ', function () {
        //控件随地图的移动而移动
        var marginTop = $("#h3c_IMOS_ActiveX").css("margin-top");
        if (marginTop == "2px") {
            $("#h3c_IMOS_ActiveX").css("margin-top", "1px");
        } else {
            $("#h3c_IMOS_ActiveX").css("margin-top", "2px");
        }
    });
    csm.mapContainer.on('moveend ', function () {
        //控件随地图的移动而移动
        var marginTop = $("#h3c_IMOS_ActiveX").css("margin-top");
        if (marginTop == "2px") {
            $("#h3c_IMOS_ActiveX").css("margin-top", "1px");
        } else {
            $("#h3c_IMOS_ActiveX").css("margin-top", "2px");
        }
    });
    csm.mapContainer.on('movestart ', function () {
        //控件随地图的移动而移动
        var marginTop = $("#h3c_IMOS_ActiveX").css("margin-top");
        if (marginTop == "2px") {
            $("#h3c_IMOS_ActiveX").css("margin-top", "1px");
        } else {
            $("#h3c_IMOS_ActiveX").css("margin-top", "2px");
        }
    });
}

//点击播放和报警弹窗
function addVedioPopup() {
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
    var vedioPopuptHtml = '<div class="videoplayer-title">' +
        '<b id="cameraName">宇视球机</b>' +
        '<a href="#" class="videoplayer-link">详情>></a>' +
        '<div class="about-close" onclick="vedioPopupClose();closeHardware()"></div>' +
    '</div>' +
    '<div class="videoplayer-content">' +
        '<div class="videoplayer-top">' +
            '<div class="videoplayer-view" id="videoplayerView">' +
            activeXhtml +
            '</div>' +
            '<div id="my3">' +
                '<div class="videoplayer-view camera-box" id="alarmflowChartBox" style="display:none">' +
                    '<div class="camera-title">' +
                        '<b id="flowChartTitle">预案流程图</b>' +
                        '<div class="camera-close" onclick="Alarm.imgFlowClose() "></div>' +
                    '</div>' +
                    '<textarea id="SavedModel" style="display:none"></textarea>' +
                    '<div class="camera-content" id="alarmflowChart"></div>' +
                '</div>' +
                '<div class="videoplayer-view videolist-box" id="correctAlarmInfoBox" style="display:none">' +
                    '<div class="videolist-title">' +
                        '<b>确警信息框</b>' +
                        '<div class="videolist-close" onclick="Alarm.closeConfirm()"></div>' +
                    '</div>' +
                    '<div class="videolist-content">' +
                        '<form  role="form">' +
                            '<table style="margin:0 auto">' +
                                '<tr>' +
                                    '<td>报警编号：</td>' +
                                    '<td><input type="text"  style="cursor:not-allowed" class="form-control" id="alarmid" readonly="readonly" ></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警人：</td>' +
                                    '<td><input type="text"  style="cursor:not-allowed" class="form-control" readonly="readonly" id="confirmAlarmname"></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警结论：</td>' +
                                    '<td>' +
                //$("confirmResult").html() +
                                    $("#confirmResultDiv").html() +
                                    '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警位置：</td>' +
                                    '<td><input type="text" class="form-control" id="Alarmlocation"></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警描述：</td>' +
                                    '<td><textarea class="form-control formStyle" rows="3" id="confirmAlarmText"></textarea></td>' +
                                '</tr>' +
                            '</table>' +
                            '<div class="tabFoot btnCancel">' +
                                '<button type="button" class="btn btn-primary query" onclick="Alarm.confirm()">确定</button>' +
                                '<button type="button" class="btn btn-default queryD" onclick="Alarm.closeConfirm()">取消</button>' +
                            '</div>' +
                        '</form>' +
                    '</div>' +
                '</div>' +
                '<div class="videoplayer-view videolist-box1" style="display:none;" id="checkCorrectInfo">' +
                    '<div class="videolist-title">' +
                        '<b id="checkConfirmAlarmId">查看确警信息</b>' +
                        '<div class="videolist-close" onclick="Alarm.closeCheckConfirm()"></div>' +
                    '</div>' +
                    '<div class="videolist-content">' +
                        '<form  role="form">' +
                            '<table style="margin:0 auto">' +
                                '<tr>' +
                                    '<td>确警人：</td>' +
                                    '<td><input type="text"  style="cursor:not-allowed" class="form-control" readonly="readonly" id="checkConfirmAlarmname"></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警结论：</td>' +
                                    '<td>' +
                                    '<input type="text"  style="cursor:not-allowed" class="form-control" readonly="readonly" id="checkConfirmResult">' +
                                    '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警位置：</td>' +
                                    '<td><input type="text"  style="cursor:not-allowed" class="form-control" readonly="readonly" id="checkAlarmlocation"></td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td>确警描述：</td>' +
                                    '<td><textarea style="cursor:not-allowed"  class="form-control formStyle" rows="3" id="confirmContent" readonly="readonly"></textarea></td>' +
                                '</tr>' +
                            '</table>' +
                        '</form>' +
                    '</div>' +
                '</div>' +
                '<div class="videoplayer-right">' +
                    '<div class="videoplayer-function videoplayer-one" style="display:block" id="alarmRightTop">' +
                        '<div class="videoimg">' +
                            '<span class="videoimg1" style="cursor:pointer" onclick="Alarm.fourLampAndLedClose()"></span>' +
                            '<span class="videoimg2" style="cursor:pointer" onclick="Alarm.confirmOpen()"></span>' +
                            '<span class="videoimg3" style="cursor:pointer" onclick="Alarm.imgFlowOpen()"></span>' +
                        '</div>' +
                        '<ul>' +
                            '<li onclick="Alarm.fourLampAndLedClose()" style="cursor:pointer">关闭声光</li>' +
                            '<li onclick="Alarm.confirmOpen()" style="cursor:pointer">确警</li>' +
                            '<li onclick="Alarm.imgFlowOpen() " style="cursor:pointer">流程图</li>' +
                        '</ul>' +
                    '</div>' +
                    '<div class="videoplayer-function videoplayer-two" id="videoRoundness">' +
                        '<h4>云台控制器</h4>' +
                        '<div class="videoplayer-round" id="playControllDiv">' +
                            '<span class="playerionc1" id="playTop" onmousedown="mapVideo.topDown()" onmouseup="mapVideo.topUp()"></span>' +
                            '<span class="playerionc2" id="playBottom" onmousedown="mapVideo.bottomDown()" onmouseup="mapVideo.bottomUp()"></span>' +
                            '<span class="playerionc3" id="playLeft" onmousedown="mapVideo.leftDown()" onmouseup="mapVideo.leftUp()"></span>' +
                            '<span class="playerionc4" id="playRight" onmousedown="mapVideo.rightDown()" onmouseup="mapVideo.rightUp()"></span>' +
                            '<span class="playerionc5" id="playLeftTop" onmousedown="mapVideo.lefttopDown()" onmouseup="mapVideo.lefttopUp()"></span>' +
                            '<span class="playerionc6" id="playRightTop" onmousedown="mapVideo.righttopDown()" onmouseup="mapVideo.righttopUp()"></span>' +
                            '<span class="playerionc7" id="playLeftBottom" onmousedown="mapVideo.leftbottomDown()" onmouseup="mapVideo.leftbottomUp()"></span>' +
                            '<span class="playerionc8" id="playRightBottom" onmousedown="mapVideo.rightbottomDown()" onmouseup="mapVideo.rightbottomUp()"></span>' +
                            '<span class="playerionc9" id="playMiddle"></span>' +
                        '</div>' +
                        '<div class="change-num">' +
                            '<p>变倍：</p>' +
                            '<ul>' +
                                '<li onmousedown="mapVideo.amplificationDown()" onmouseup="mapVideo.amplificationUp()" class="changeAdd" ></li>' +
                                '<li onmousedown="mapVideo.shrinkDown()" onmouseup="mapVideo.shrinkUp()" class="changeMinus"></li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                    '<div class="videoplayer-function videoplayer-three">' +
                        '<h4>预置位</h4>' +
                        '<ul>' +
                            '<li onclick="mapVideo.usePresetting(1)">1</li>' +
                            '<li onclick="mapVideo.usePresetting(2)">2</li>' +
                            '<li onclick="mapVideo.usePresetting(3)">3</li>' +
                        '</ul>' +
                    '</div>' +
                    '<div class="videoplayer-function videoplayer-four">' +
                        '<h4>视频回放</h4>' +
                        '<div class="adjust">' +
                            '<ul>' +
                                '<li><p>调整分钟</p></li>' +
                                '<li><button onclick="mapVideo.playbackTimeControll(1)">-</button></li>' +
                                '<li><p class="adjust-num" id="timeDifference">5</p></li>' +
                                '<li><button onclick="mapVideo.playbackTimeControll(0)">+</button></li>' +
                            '</ul>' +
                            '<div class="adjust-direction">' +
                                '<span class="adjustLeft" id="retrogress" onclick="mapVideo.retrogressPlayback()" title="快退" value="2"></span>' +
                                '<span class="adjustCenter" id="pauseContinue" onclick="mapVideo.pausePlayback()" title="暂停" value="1"></span>' +
                                '<span class="adjustRight" id="advance" onclick="mapVideo.advancePlayback()" title="快进" value="2"></span>' +
                            '</div>' +
                            '<div class="adjust-btn">' +
                                '<button onclick="mapVideo.startPlayback()">加载</button>' +
                                '<button onclick="mapVideo.stopPlayback()">停止</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div id="alarmList">' +
            '<div class="videoplayer-list" id="videoPlayFrame" style="display:block">' +
                '<h4>报警列表</h4>' +
                '<div class="videoplayer-scroll">' +
                    '<div class="videoplayer-alarm">' +
                        '<div class="alarm-num" id="alarmNum"></div>' +
                    '</div>' +
                    '<div class="videoplayer-ionc1" id="scrollLeft"><span class="scrollLeft"></span></div>' +
                    '<div class="videoplayer-ul">' +
                        '<ul id="alarmInfo"></ul>' +
                    '</div>' +
                    '<div class="videoplayer-ionc2 " id="scrollRight"><span class="scrollRight"></span></div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div id="videoBottom">' +
            '<div class="videoplayer-footer videoplayer-footer2">' +
                '<ul>' +
                    '<li onclick="eventRecord()">' +
                        '<span class="footionc1"></span>' +
                        '<p>事件记录</p>' +
                    '</li>' +
                    '<li onclick="cameraEventAlarm()">' +
                        '<span class="footionc2"></span>' +
                        '<p>人工上报</p>' +
                    '</li>' +
                    '<li onclick="gotoMonitor()">' +
                        '<span class="footionc3"></span>' +
                        '<p>上大屏</p>' +
                    '</li>' +
                    '<li onclick="fastGotoMonitor()">' +
                        '<span class="footionc4"></span>' +
                        '<p>快速上大屏</p>' +
                    '</li>' +
                    '<li>' +
                        '<span class="footionc5"></span>' +
                        '<p class="footword5" onclick="mapVideo.timelyPlayback()">及时回放</p>' +
                    '</li>' +
                    '<li>' +
                        '<span class="footionc6"></span>' +
                        '<p>语音对讲</p>' +
                    '</li>' +
                    '<li>' +
                        '<span class="footionc7"></span>' +
                        '<p onclick="mapVideo.downloadVideoDialog()">视频下载</p>' +
                    ' </li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
    '</div>';

    vedioPopup = L.popup({ closeButton: false, autoClose: false, autoPan: true }).setLatLng([0, 0]).setContent(vedioPopuptHtml).openOn(csm.mapContainer);
}
function vedioPopupClose() {
    if (currentClickMarker) {
        if (currentClickMarker.device_status == 1) {//如果marker状态正常，关闭弹框的时候将图标设置为正常的图标
            currentClickMarker.setIcon(L.icon({ iconUrl: currentClickMarker.normal_image, iconSize: [15.15, 23] }));
        }
        else {//如果marker的状态不正常，关闭弹框的时候将图标设置为问题图标
            currentClickMarker.setIcon(L.icon({ iconUrl: currentClickMarker.error_image, iconSize: [15.15, 23] }));
        }
        if ($("#semiCircleControl").attr("isShow") == 0 && currentClickMarker.semiCircle) {//如果扇形没有全部显示，那么关闭popup的时候清除扇形的图层
            semiCircleGroup.clearLayers();
        }
    }
    //var currentCenter = csm.mapContainer.getCenter();
    if ($("#mapContainer").attr("currentMapType") == 1) {
        vedioPopup.setLatLng([0, 0]);
        csm.mapContainer.setView(csm.center);
    }
    else if ($("#mapContainer").attr("currentMapType") == 2) {
        vedioPopup.setLatLng([0, 0]);
        csm.mapContainer.setView(csm.mapCenter25D);
    }
    else if ($("#mapContainer").attr("currentMapType") == 3) {
        var center = csm.mapContainer.getCenter();
        vedioPopup.setLatLng([0, 0]);
        csm.mapContainer.setView(center);
    }
    //停止播放当前视频
    videoClassify.stopPlayVideo();
}

//关闭告警执行硬件 乔
function closeHardware() {
    if (Alarm.alarmState == true) {
        AlarmPopupClose();
    }
}
//事件记录
function eventRecord() {
    alert("正在开发中...");
}
//点击上大屏 
function gotoMonitor() {
    alert("正在开发中...");
}
//快速上大屏
function fastGotoMonitor() {
    if (!IsMain) {
        alert("只有主终端才能调用此功能！");
    }
    else {
        if ($.cookie("mainControlRegionId")) {
            regionId = $.cookie("mainControlRegionId");
            $.ajax({
                url: "/Schedule/GetGalleryConfigByRegionId",
                type: "post",
                data: { regionId: regionId },
                datatype: 'json',
                async: false,
                success: function (data) {
                    if (data.status == 0 && data.msg != null) {
                        var datas = data.msg;
                        var arr = new Array();
                        for (var i = 0; i < datas.length; i++) {
                            arr.push(datas[i].screenCode);
                        }
                        if (arr.length > 0) {
                            videoClassify.StartMonitorLive(arr[0], currentClickMarker.device_code);
                        }
                        else {
                            alert("该园区无快速上大屏的屏或大屏未配置！");
                        }
                    }
                    else {
                        alert("该园区无快速上大屏的屏或大屏未配置！");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status + "错误请联系管理员！");
                }
            })
        }
        else {
            alert("未获取到当前主控园区！");
        }

    }
}