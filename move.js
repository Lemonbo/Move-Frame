function move(obj,name,target){
	clearInterval(obj.timer)
	obj.timer=setInterval(function () {
		let nowStyle=parsedInt(getComputedStyle(obj)[name])
		
		if (nowStyle==target) {
			clearInterval(obj.timer)
		} else{
			let speed=(target-nowStyle)/10
			obj.style[name]=nowStyle+speed+'px'
		}
	},30)
}