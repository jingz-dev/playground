(function(global){

function assert(bool){
	if(!bool){
		throw "assertion failed";
	}
}

var Quadtree = function(p, depth){
	this.x = p.x;
	this.y = p.y;
};
Quadtree.to2D = function(p){
	return {x: p.x, y: p.y};
}

Quadtree.prototype.MAXOBJCOUNT = 16;
Quadtree.prototype.x = 0;
Quadtree.prototype.y = 0;
Quadtree.prototype.node = null;
Quadtree.prototype.list = [];
Quadtree.prototype.getSection = function(p){
	var v = {};
	v.x = p.x - this.x / 2;
	v.y = p.y - this.y / 2;
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

}
Quadtree.prototype.insert = function(p){
	this.list.push(Quadtree.to2D(p));
	if(list.length < this.MAXOBJCOUNT){
		return;
	}

}
Quadtree.prototype.retrieve = function(p){

}

Quadtree.test = {};
Quadtree.test.getSection = function(){
	var p = {};
	p.x = 512;
	p.y = 512;
	var t = {};
	t.x = 3;
	t.y = 3;
	var q = new Quadtree(p);
	assert(q.getSection(t) == 1);
}
this.Quadtree = Quadtree;
})(this);