def two_sum(arr, x):
	# can be treated the same as hashtable
	d = dict()
	for i in range(len(arr)):
		if x - arr[i] in d.keys():
			return d[x - arr[i]], i
		else:
			d[arr[i]] = i
	return -1,-1


arr = [3,2,5,6,1,9,10,-1,200,23,31]
print two_sum(arr,19)
