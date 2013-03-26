var JulietSet = function(canvasD){
	this.dimension = canvasV;
	this.precision = 512;
	this.boundary = 1000;
	// 
	
	// zoom
	this.zoom = new Rect(new Dimension2(-2.0,1.0),new Dimension2(1.0,-1.0));
	// zoomParam
	this.fixedRatio = true;
	// color range scale
	this.colorscale = 1;
	// zoom rollback
	this.history = [];
};

JulietSet.prototype.set

JulietSet.prototype.zoomIn = function(zoomRect){

};

JulietSet.prototype.zoomOut = function(){

};

JulietSet.prototype.computePixel=function(point){

};

var Dimension2 = function(x,y){
	this.x = x;
	this.y = y;
};

var Rect = function(d1,d2){
	this.d1 = d1;
	this.d2 = d2;
};

Rect.prototype.getXlength = function(){
	return Math.abs(this.d1.x-this.d2.x);
};

Rect.prototype.getYlength = function(){
	return Math.abs(this.d2.y-this.d2.y);
};