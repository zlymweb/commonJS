/*! 源品优购 */ 
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