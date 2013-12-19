(function(global){

function assertEqual(expected, actual, desc){
	if(expected != actual){
		throw "assertion failed " + desc + "\nexpected:" + expected + "\nactual:"+ actual;
	}
}
function isFunction(obj){
	return !!(obj && obj.constructor && obj.call && obj.apply);
}

// new Point(num, num)
var Point = function(x, y){
	this.x = x;
	this.y = y;
}
// new Rectangle(Point, Point)
var Rectangle = function(ax, ay, bx, by){
	var t = 0;
	// flip points to ensure a is the upper left, b is lower right
	if(ax > bx){
		t = ax;
		ax = bx;
		bx = t;
	}
	if(ay > by){
		t = ay;
		ay = by;
		by = t;
	}
	this.a = new Point(ax, ay);
	this.b = new Point(bx, by);
}
// cmp: 0 overlap / 1 include / -1 other
Rectangle.prototype.compareTo = function(rect){
	if(this.a.x == rect.a.x && this.a.y == rect.a.y &&
		this.b.x == rect.b.x && this.b.y == rect.b.y
		){
		return 0;
	}

	if(this.a.x <= rect.a.x && this.b.x >= rect.b.x &&
		this.a.y <= rect.a.y && this.b.y >= rect.b.y
		){
		return 1;
	}
	return -1;
}


var QuadData = function(id, rect, data){
	this.range = rect;
	this.id = id;
	this.data = data;
}

var Quadtree = function(rect, depth){
	this.range = rect;
};

Quadtree.prototype.MAXOBJCOUNT = 16;
Quadtree.prototype.x = 0;
Quadtree.prototype.y = 0;
Quadtree.prototype.node = null;
Quadtree.prototype.list = [];
Quadtree.prototype.getSection = function(r){
	return 0;
	// returns the quadrant of point p in the quadtree range
	var v = {};
	v.x = p.x - (this.range.a.x + this.range.b.x) / 2;
	v.y = p.y - (this.range.a.y + this.range.b.y) / 2;
	if(v.x * v.y == 0){
		return -1;
	}
	if(v.x * v.y > 0){
		if(v.x > 0)
			return 3;
		else
			return 1;
	}else{
		if(v.x > 0)
			return 2;
		else
			return 0;
	}
}
Quadtree.prototype.split = function(){
	// splits the quadtree into 4 quadtrees
	for(var i = 0; i < this.list.length; i++){

	}
}
Quadtree.prototype.insert = function(p){
	// this.list

}

Quadtree.prototype.retrieve = function(p){

}
Quadtree.runTests = function(){
	for(var f in Quadtree.test){
		var func = Quadtree.test[f];
		if(isFunction(func)){
			func();
			console.log(f + "() test case complete");
		}
	}
}
Quadtree.test = {};
Quadtree.test.getSection = function(){
	var q = new Quadtree(new Rectangle(4, 4, 8, 8));
	var t = [];
	t.push(new Rectangle(4,4,6,6));
	t.push(new Rectangle(6,6,8,8));
	t.push(new Rectangle(4,6,6,8));
	t.push(new Rectangle(6,4,8,6));
	for(var i = 0; i < t.length; i++){
		assertEqual(-1, q.getSection(t[i]), "bounds test" + i);
	}
}

this.Quadtree = Quadtree;
this.Rectangle = Rectangle;
})(this);