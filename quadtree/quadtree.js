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
var Rectangle = function(a, b){
	this.a = a;
	this.b = b;
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
Quadtree.prototype.getSection = function(p){
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
	var a = new Point(0, 0);
	var b = new Point(512, 512);
	var t = new Point(3,3);
	var q = new Quadtree(new Rectangle(a, b));
 	assertEqual(1, q.getSection(t),  "getSection() test 1");

 	b = new Point(4, 4);
	q = new Quadtree(new Rectangle(a, b));
	assertEqual(3, q.getSection(t), "getSection() test 2");

}

this.Quadtree = Quadtree;
})(this);