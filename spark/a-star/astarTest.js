this.onload = function(){
	var h = new DataMinHeap();
	assert(h.isEmpty());
	h.put(1,2);
	assert(!h.isEmpty());
	h.put(1,3);
	h.put(0,4);
	assert(h.popMin().key == 0);
	assert(h.popMin().key == 1);
	assert(h.popMin().key == 1);

	var q = new DataQ();
	assert(q.isEmpty());
	q.enqueue(1);
	assert(!q.isEmpty());
	assert(q.dequeue() == 1);
	assert(q.isEmpty());
	q.enqueue(2);
	assert(q.dequeue() == 2);
	q.enqueue(3);
	q.enqueue(4);
	assert(q.dequeue() == 3);
	assert(q.dequeue() == 4);
	assert(q.isEmpty());

	console.log("test passed");
};