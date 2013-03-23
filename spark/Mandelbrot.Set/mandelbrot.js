
var MandelbrotSet = function(canvasWidth,canvasHeight){
	this._x = canvasWidth;
	this._y = canvasHeight;
	this._precision = 512;
	this._boundary = 1000;
	this._x1 = -2.0;
	this._y1 = 1.0;
	this._x2 = 1.0;
	this._y2 = -1.0;

	this.fixedRatio = false;
}

// (x1,y1)  (x2,y2) should be a rectangle 
MandelbrotSet.prototype.setZoom = function(x1,y1,x2,y2){
	if(x1 > x2 || y1 > y2)return;
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

}

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
	for(var y=0,yl=this._y; y<yl; y++){
		for(var x=0,xl=this._x; x<xl; x++){
			c = this.computePixel(x,y);
			o = 4 * (xl * y + x);
			// r
			pixels[o]   = 0xFF * c;
			// g
			pixels[o+1] = 0xFF * c;
			// b
			pixels[o+2] = 0xFF * c;

			// alpha
			pixels[o+3] = 0xFF;

		}
	}
	return pixels;
}




// ..degree = 0..360
var Hue = function(degree){
	// this._degree = 360 * scale;
	//var h = this._degree/60; // sector 0 to 5;
	
	var h = degree / 60;
	var sector = Math.floor(h);
	// get the fatorial part
	var f = h - sector; 

	var v = 0xFF;
	var s = 0xFF;

	var p = v * (1 - s);
	var q = v * (1 - s * f);
	var t = v * (1 - s * (1 - f));

	var r = 0;
	var g = 0;
	var b = 0;
	switch(sector){
		case 0:
			r = v;
			g = t;
			b = p;
			break;
		
		case 1:
			r = q;
			g = v;
			b = p;
			break;
		
		case 2:
			r = p;
			g = v;
			b = t;
			break;
		
		case 3:
			r = p;
			g = q;
			b = v;
			break;
		
		case 4:
			r = t;
			g = p;
			b = v;
			break;

		default:
		//case 5:
			r = v;
			g = p;
			b = q;
			break;
	}
	this._r = r;
	this._g = g;
	this._b = b;
}
Hue.prototype.getR = function() {
	return this._r;
};
Hue.prototype.getG = function() {
	return this._g;
};
Hue.prototype.getB = function() {
	return this._b;
};