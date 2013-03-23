
var MandelbrotSet = function(canvasWidth,canvasHeight){
	this._x = canvasWidth;
	this._y = canvasHeight;
	this._precision = 512;
	this._boundary = 1000;
	// zoom
	this._x1 = -2.0;
	this._y1 = 1.0;
	this._x2 = 1.0;
	this._y2 = -1.0;
	// zoomParameters
	this.fixedRatio = false;
	// color range scale
	this.colorscale = 1;
	// rollback
	this.history = [];
}

// (x1,y1)  (x2,y2) should be a rectangle 
MandelbrotSet.prototype.zoomIn = function(x1,y1,x2,y2){
	if(x1 > x2 || y1 > y2)return;
	this.history.push([this._x1,this._y1,this._x2,this._y2]);
	history.pushState(null,null,"");
	if(this.fixedRatio){
		var ratio = this._x / this._y;
		var t;
		if((x2-x1)/(y2-y1) > ratio){
			t = (x1 + x2) / 2;
			x1 = t - 0.5 * (y2 - y1) * ratio;
			x2 = t + 0.5 * (y2 - y1) * ratio;
		}else{
			t = (y1 + y2) / 2;
			y1 = t - 0.5 * (x2 - x1) / ratio;
			y2 = t + 0.5 * (x2 - x1) / ratio;
		}
	}
	// translate pixel
	var scaleX = ( x2 - x1 ) / this._x;
	var scaleY = ( y2 - y1 ) / this._y;
	var lx = this._x2 - this._x1;
	var ly = this._y1 - this._y2;

	this._x1 += x1 * lx/ this._x;
	this._y1 -= y1 * ly/ this._y;
	this._x2 = this._x1 + scaleX * lx;
	this._y2 = this._y1 - scaleY * ly;
	


};

MandelbrotSet.prototype.zoomOut = function(){
	if(this.history.length == 0)return;
	var his = this.history.pop();
	this._x1 = his[0];
	this._y1 = his[1];
	this._x2 = his[2];
	this._y2 = his[3];
};

MandelbrotSet.prototype.computePixel = function(x , y) {
	// translate x,y to c
	var cr = ( this._x2 - this._x1 ) * x / this._x + this._x1;
	var ci = ( this._y2 - this._y1 ) * y / this._y + this._y1;
	var zr = 0.0;
	var zi = 0.0;
	// temporary real
	var r = 0;
	for(var i=0,il=this._precision; i<il; i++){
		r = zr * zr - zi * zi + cr;
		zi = 2.0 * zr * zi + ci;
		zr = r;
		// diverges
		if((zr * zr + zi * zi) > this._boundary){
			return i/this._precision;
		}
	}
	// Converges
	return 0;
};

MandelbrotSet.prototype.computePicture = function(pixels){
	// color ( currently grayscale)
	var c;
	var o = 0;
	var cMax = -1;
	var cMin = 2;
	var cScale = this.colorscale;
	for(var y=0,yl=this._y; y<yl; y++){
		for(var x=0,xl=this._x; x<xl; x++){
			c = this.computePixel(x,y);
			o = 4 * (xl * y + x);
			// r
			pixels[o]   = 0xFF * c * cScale;
			// g
			pixels[o+1] = 0xFF * c * cScale;
			// b
			pixels[o+2] = 0xFF * c * cScale;

			// alpha
			pixels[o+3] = 0xFF;
			if(cMax < c)cMax = c;
			if(cMin > c)cMin = c;
		}
	}
	if((cMax-cMin) != 0)
		this.colorscale = 1 / (cMax - cMin);
	return pixels;
}
