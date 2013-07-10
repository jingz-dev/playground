class MinHeap:
	"""
	not auto-resizable yet
	may blow up under "certain" circumstances
	"""
	size = 0
	arr = [None] * 16
	def __init__(self):
		pass
	def __swap__(self, a, b):
		return b, a
	def insert(self, val):
		arr = self.arr
		i = self.size
		self.size += 1
		arr[i] = val
		while i > 0:
			if(arr[i] < arr[i//2]):
				arr[i], arr[i//2] = self.__swap__(arr[i], arr[i//2])
			i //= 2

	def top():
		return self.arr[0]

	def delete_top(self):
		return self.delete(0)

	def delete(self, i):
		r = self.arr[i]
		arr = self.arr
		arr[i], arr[self.size - 1] = self.__swap__(arr[i], arr[self.size - 1])
		self.size -= 1
		arr[self.size] = None
		maxIndex = self.size - 1
		# sink
		i //= 2
		while i < self.size:
			if arr[i*2 + 2] != None and arr[i] > arr[i*2 + 2] and arr[i*2 + 2] < arr[i*2 + 1]:
				arr[i], arr[i*2 + 2] = self.__swap__(arr[i], arr[i*2 + 2])
				i = i*2 + 2
			elif arr[i*2 + 1] != None and arr[i] > arr[i*2 + 1]:
				arr[i], arr[i*2 + 1] = self.__swap__(arr[i], arr[i*2 + 1])
				i = i*2 + 1
			else:
				break
		return r

def testHeap():
	h = MinHeap()
	h.insert(6)
	h.insert(3)
	h.insert(5)
	h.insert(4)
	h.insert(2)
	h.insert(1)
	h.insert(7)
	print h.delete(0)
	print h.delete(0)
	print h.delete(0)
	print h.delete(0)
	print h.delete(0)
	print h.delete(0)
	print h.delete(0)

testHeap()
