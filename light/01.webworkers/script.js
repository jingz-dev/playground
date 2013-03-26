self.addEventListener("message",function(event){
	arr=event.data;
	arr[2]++;
	self.postMessage(arr);
},false);