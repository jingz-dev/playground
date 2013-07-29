class node:
	def __init__(self,data):
		self.data = data
		self.next = None

class linked_list:
	head = None
	tail = None
	def __init__(self):
		pass

	def __iter__(self):
		p = self.head
		while p != None:
			yield p.data
			p = p.next

	def append(self,data):
		if self.head == None:
			self.head = node(data)
			self.tail = self.head
		else:
			self.tail.next = node(data)
			self.tail = self.tail.next

	@staticmethod
	def reverse(lst):
		if lst.head == None:
			return lst
		ptr1 = None
		ptr2 = lst.head
		lst.tail = lst.head
		while ptr2 != None:
			ptr3 = ptr2.next
			ptr2.next = ptr1
			ptr1 = ptr2
			ptr2 = ptr3
		lst.head = ptr1


def linked_list_test():
	ll = linked_list()
	ll.append(1)
	ll.append(2)
	ll.append(3)
	ll.append(4)
	ll.append(5)
	ll.append(6)
	for i in ll:
		print i
	linked_list.reverse(ll)
	for i in ll:
		print i

if __name__ == "__main__":
	linked_list_test()

