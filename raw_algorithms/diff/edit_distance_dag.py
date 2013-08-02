
def e(a, b, i, j, mn):
	pass

def diff(a, b, i, j):
	return 1 if a[i] != b[j] else 0

def edit_distance(a, b):
	m = len(a)
	n = len(b)
	mn = [[0 for x in xrange(n+1)] for x in xrange(m+1)]
	for i in range(m + 1):
		mn[i][0] = i
	for j in range(n + 1):
		mn[0][j] = j
	for j in range(1, n + 1):
		for i in range(1, m + 1):
			mn[i][j] = min(mn[i-1][j] + 1, mn[i][j-1] + 1, mn[i-1][j-1] + diff(a, b, i-1, j-1))
	return mn

def test():
	a = [3,2,3,5,5,5]
	b = [2,3,4,5]
	mn = edit_distance(a, b)
	print [0,0]+b
	# a little bit sloppy when printing the diff matrix
	for i in range(len(mn)):
		print [a[i-1]] + mn[i]



if __name__ == '__main__':
	test()