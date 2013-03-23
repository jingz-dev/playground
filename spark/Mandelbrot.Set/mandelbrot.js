
var MandelbrotSet = function(xwidth,ywidth){
	this._x = xwidth;
	this._y = ywidth;
	this._precision = 256;
	this._boundary = 3000;
}

MandelbrotSet.prototype.computePixel = function(x , y) {
	// translate x,y to c
	var cr = 3.0 * x / this._x - 2.0;
	var ci = -2.0 * y / this._y + 1.0;
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

var JulietSet