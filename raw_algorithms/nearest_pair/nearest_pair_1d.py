from random import randrange
import math

def nearest_number(arr, index):
	"""
	nearest_number(arr, index)
	find the nearest number to arr[index]
	quasilinear time
	"""
	sarr = sorted(arr)
	sindex = binsearch(arr[index], sarr)
	if(abs(sarr[sindex-1] - arr[index]) > abs(sarr[sindex + 1] - arr[index])):
		return sarr[sindex+1]
	else:
		return sarr[sindex-1]

def nearest_number2(arr, index):
	"""
	nearest_number2(arr, index)
	find the nearest number to arr[index]
	linear time
	"""
	key = arr[index]
	nearest_num = arr[index-1]
	diff = abs(nearest_num - key)

	for i in range(len(arr)):
		if i == index:
			continue
		if abs(arr[i] - key) < diff:
			nearest_num = arr[i]
			diff = abs(nearest_num - key)
	return nearest_num

def binsearch(key, arr):
	"""
	arr must be sorted
	"""
	sti = 0
	edi = len(arr) - 1
	while edi - sti > 0:
		i = (edi + sti) / 2
		if arr[i] > key:
			edi = i 
		elif arr[i] < key:
			sti = i + 1
		else:
			return i
	return -1

def test_nearest_number():
	arr = [randrange(1000) for i in range(32)]
	index = randrange(32)
	print "finding nearest number to arr[%s] = %s" % (index, arr[index])
	print nearest_number(arr, index)
	print nearest_number2(arr, index)

test_nearest_number()