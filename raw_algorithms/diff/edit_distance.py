"""
edit distance algorithm ( recursive )
"""
def edit_distance(a, b, i, j):
	if i + j == 0:
		return diff(a, b, 0, 0)
	elif i == 0:
		return edit_distance(a, b, i, j-1) + 1
	elif j == 0:
		return edit_distance(a, b, i-1, j) + 1
	else:
		return min(edit_distance(a, b, i-1, j) + 1,edit_distance(a, b, i, j-1) + 1, edit_distance(a, b, i-1, j-1) + diff(a, b, i, j))

def diff(a, b, i, j):
	return 1 if a[i] != b[j] else 0

def test():
	#test
	a = "hakuna"
	b = "matata"
	#print edit_distance(a,b,len(a) - 1, len(b) - 1)
	print edit_distance(a ,b ,len(a) - 1, len(b) - 1)

	"""
	e(i,j) = min(e(i-1,j), e(i,j -1) + diff(i,j))
	"""

if __name__ == '__main__':
	test()


	
