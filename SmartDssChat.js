"use strict";
var VideoPlay = function() {
	if(!!window.ActiveXObject || 'ActiveXObject' in window) {
		this.isIE = true
		this.visible = true
		this.focus = true
	} else {
		this.websocket = null
		this.isIE = false
		this.visible = document.visibilityState === "visible"
		this.focus = true
	}
	
	this.iframeX = 0
	this.iframeY = 0
	this.timerId = null
	this.cbMap = {}
	this.logined = false
	this.loginCb = null
	this.browserType = this.isIE ? 3 : 1			// 1：Chrome  2：Firefox  3：IE  4：Edge
	
	this.defaults = {
		letLoginIp: "10.35.183.74",
		letPort: "80",
		letUserName: "system",
		letUserPwd: "admin123@",
		wsUri: "ws://localhost:1234",
		openVideoBySN: 0,			// 0：以N8000通道id操作摄像头 1：以通道SN操作摄像头
		showTree: 0,				// 0：不显示设备树 1：显示设备树
		updateUrl: '',				// 插件增量升级地址，格式：http://10.35.116.250:9080/download/Plugin_IncrementalUpdate
		cb: {
			windowSelectedCb: null,
			snapPictureCb: null,
			localRecordCb: null,
			closeSingleVideoResultCb: null,
			closeAllVideosResultCb: null
		}
	}
}
