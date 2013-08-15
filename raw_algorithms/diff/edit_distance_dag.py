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
	return mn[i][j]

def test():
	a = "b"
	b = "aaaba"
	print edit_distance(a, b)
	



if __name__ == '__main__':
	test()