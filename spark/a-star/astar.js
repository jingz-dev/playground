var assert = function(bool){
	if(!bool){
		throw "assertion failed";
	}
};
(function(glob){
	var inf = Number.POSITIVE_INFINITY;
	var AStarPathfinder = function(rows,columns){
		var matrix = [];
		for(var i=0; i<rows;i++){
			var row = [];
			for(var j=0;j<columns;j++){
				row.push(1);
			}
			matrix.push(row);
		}
		this.matrix = matrix;
		this.rows = rows;
		this.columns = columns;
	};
	AStarPathfinder.prototype.setCost = function(row,col,cost) {
		assert(row < this.rows);
		assert(col < this.columns);
		if(cost>0){
			this.matrix[row][col] = cost;
		}else{
			this.matrix[row][col] = inf;
		}
	};
	AStarPathfinder.prototype.calculatePath = function(){
		var heuristic = function(posX,posY,goalX,goalY){
			// return manhattan distance
			return Math.abs(goalX - posX) + Math.abs(goalY - posY);
		};
		// TODO : finish the simple path finding algorithm
	};

	glob.AStarPathfinder = AStarPathfinder;
}(this));

(function(glob){
	var QNode = function(item){
		this.item = item;
		this.next = null;
	};
	var TNode = function(key,value){
		this.key = key;
		this.value = value;
		this.left = null;
		this.right = null;
	};
	var HNode = function(key,value){
		this.key = key;
		this.value = value;
	};
	var Q = function(){
		this.first = null;
		this.last = null;
	};
	var MinHeap = function(){
		this.data = [];
	};
	Q.prototype.enqueue = function(item) {
		var newNode = new QNode(item);
		if(this.isEmpty()){
			this.first = this.last = newNode;
		}else{
			this.last.next = newNode;
			this.last = newNode;
		}
	};
	// NO boundary check beware
	Q.prototype.dequeue = function() {
		assert(this.first != null);
		var item = this.first.item;
		this.first = this.first.next;
		if(this.isEmpty()){
			this.last = null;
		}
		return item;
	};
	Q.prototype.isEmpty = function() {
		return this.first == null;
	};
	MinHeap.prototype.put = function(key,value) {
		var hNode = new HNode(key,value);
		this.data.push(hNode);
		this.data.sort(function(a,b){
			// sort in descending order
			if(a.key > b.key)
				return -1;
			else if (a.key < b.key)
				return 1;
			else
				return 0;	
		});
	};
	MinHeap.prototype.isEmpty = function() {
		return this.data.length == 0;
	};
	MinHeap.prototype.popMin = function(){
		// NO boundary check beware
		assert(this.data.length > 0);
		return this.data.pop();
	};
	glob.DataQ = Q;
	glob.DataMinHeap = MinHeap;
}(this));