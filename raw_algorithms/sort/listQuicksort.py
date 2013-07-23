def partition(a, st, ed):
	print "part", st, ed, a
	p = st
	q = ed
	key = a[st]
	while p < q:
		while a[p] <= key:
			p += 1
			print "p",p
		while a[q] > key:
			q -= 1
			print "q",q
		a[p], a[q] = a[q], a[p]
		p += 1
		q -= 1
	a[st], a[q] = a[q], a[st]
	return q

def testpartition():
	lst = [1,1,2,3,4,5]
	partition(lst, 0, len(lst) - 1)
	print lst

def qsort(a, st, ed):
	print "qsort", st, ed
	if ed - st < 2:
		return a
	mid = partition(a, st, ed)
	qsort(a, st, mid - 1)
	qsort(a, mid + 1, ed)
	return a

def testqsort():
	lst = [3,1,4,1,5,9,2,6,5,3,5]
	qsort(lst, 0, len(lst) - 1)
	print lst


#testpartition()
testqsort()