/*! 移动端字体大小自适应
* 这里设置宽750，字号100方便计算
* 直接在页面中引入此文件或复制代码
* 对需要用到值（宽、高、大小等）直接按比例设置
* eg:苹果6的宽375，根据比例750/100=375/* 此时*=50
* 那么我就把一个宽度为375px的写成7.5rem;
* 通过这个方法可以做到自适应屏幕大小
*
* author: shaowen.jiang
* */
function Base(){
	this.width=750,
	this.fontSize=100,
	this.renderDOM()
}
Base.prototype.renderDOM=function(){
	var a=this;
	a.width=this.width,
	a.fontSize=this.fontSize,
	a.widthProportion=function(){
		var b=document.getElementsByTagName("html")[0].offsetWidth/a.width;
		return b
	},
	a.changePage=function(){
		document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+a.widthProportion()*a.fontSize+"px !important")
	},
	a.changePage(),window.addEventListener("resize",function(){
		a.changePage()
	},!1)
};
var a=new Base;
	a.renderDOM();