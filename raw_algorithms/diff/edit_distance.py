import sys
"""
edit distance algorithm ( recursive )
"""

"""
this is so wrong because of the case
a = "a"
b = "bbbab"
def edit_distance(a, b, i, j):
	if i + j == 0:
		return diff(a, b, 0, 0)
	elif i == 0:
		return edit_distance(a, b, i, j-1) + 1
	elif j == 0:
		return edit_distance(a, b, i-1, j) + 1
	else:
		return min(edit_distance(a, b, i-1, j) + 1,edit_distance(a, b, i, j-1) + 1, edit_distance(a, b, i-1, j-1) + diff(a, b, i, j))
"""
def edit_distance(a, b, i, j):
	if i < 0:
		return abs(j) + 1
	if j < 0:
		return abs(i) + 1
	else:
		return min(edit_distance(a, b, i-1, j) + 1,edit_distance(a, b, i, j-1) + 1, edit_distance(a, b, i-1, j-1) + diff(a, b, i, j))

def diff(a, b, i, j):
	return 1 if a[i] != b[j] else 0

def test():
	#test
	a = ["hakuna","a"]
	b = ["matata","bbbab"]
	expected = [4,4]
	try:
		for x,y,z in zip(a,b,expected):
			assert(edit_distance(x, y, len(x)-1, len(y)-1) == z)
	except Exception as e:
		print "test failed: %s" % e
	else:
		print "test passed"

	"""
	e(i,j) = min(e(i-1,j), e(i,j -1) + diff(i,j))
	"""

if __name__ == '__main__':
	test()


	
