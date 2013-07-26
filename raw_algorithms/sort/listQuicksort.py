def test_partition(l,a,b):
	pivot = l[a]
	res = partition(l,a,b)
	smaller = True
	for i in range(a,b):
		if smaller and res[i] < pivot:
			pass
		elif res[i] == pivot and smaller == True:
			smaller = False
		elif not smaller and res[i] >= pivot:
			smaller = False
		else:
			return False
	return True

def test_partition_set():
	cases =[]
	#inplace_even
	cases.append([0,1,2,3,4,5,6,7,8,9])
	#inplace_odd
	cases.append([0,1,2,3,4,5,6,7,8])
	#reverse_even
	cases.append([9,8,7,6,5,4,3,2,1,0])
	#reverse_odd
	cases.append([8,7,6,5,4,3,2,1,0])
	#random_even
	cases.append([2,7,1,7,4,3,1,4,1,5])
	#random_odd
	cases.append([2,7,1,7,4,3,1,4,1,5,9])
	#duplicate_even
	cases.append([1,1,1,1,1,1,1,1,1,1])
	#duplicate_odd
	cases.append([1,1,1,1,1,1,1,1,1,1,1])
	for l in cases:
		assert test_partition(l,0,len(l))

def run_tests():
	test_partition_set()


# partition from  == a  to  < b
def partition(l,a,b):
	
	pass

run_tests()