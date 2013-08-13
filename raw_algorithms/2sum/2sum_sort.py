def two_sum(arr, x):
	d = dict()
	for i in range(len(arr)):
		d[arr[i]] = i
	sarr = sorted(arr)
	i = 0
	j = len(sarr) - 1
	while i != j:
		if sarr[i] + sarr[j] == x:
			return d[sarr[i]],d[sarr[j]]
		elif sarr[i] + sarr[j] > x:
			j -= 1
		elif sarr[i] + sarr[j] < x:
			i += 1
	return -1, -1

arr = [3,2,5,6,1,9,10,-1,200,23,31]
print two_sum(arr,19)
