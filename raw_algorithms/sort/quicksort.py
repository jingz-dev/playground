import copy
def partition(arr, l, r):
	# pivot value
	p = arr[r]
	# loop stop index
	stopIndex = r-1
	# loop start
	i = 0
	while i <= stopIndex:
		if arr[i] > p:
			arr[i], arr[stopIndex] = arr[stopIndex], arr[i]
			stopIndex -= 1
		else:
			i += 1
	arr[r], arr[stopIndex+1] = arr[stopIndex+1], arr[r]
	# stopIndex + 1 is now the index of the pivot
	return stopIndex+1

def partitioned(arr, l, r, pIndex):
	for i in range(l, r+1):
		if i < pIndex:
			if arr[i] > arr[pIndex]:
				return False
		elif i > pIndex:
			if arr[i] < arr[pIndex]:
				return False
	return True

arr = [3,1,4,1,5,9,2,6,5,3,5]
def testPartition():
	for i in range(3,len(arr)):
		tArr = copy.deepcopy(arr)
		mid = partition(tArr, 0, i)
		try:
			assert(partitioned(tArr, 0, i, mid))
		except:
			print "ASSERTION ERROR", tArr[0:i+1],mid
			break

testPartition()
