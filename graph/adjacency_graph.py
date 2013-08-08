import Queue

class Vertex:
	def __init__(self, key, value = None):
		self.key = key
		self.value = value

class UndirectedGraph:
	vertices = dict()
	edges = dict()
	def addEdge(self, v1, v2):	
		if v1.__class__.__name__ == v2.__class__.__name__ == "int":
			v1 = Vertex(v1)
			v2 = Vertex(v2)
		self.vertices[v1.key] = v1.value
		self.vertices[v2.key] = v2.value
		d = self.edges
		if v1.key not in d:
			d[v1.key] = set()
		if v2.key not in d:
			d[v2.key] = set()
		d[v1.key].add(v2.key)
		d[v2.key].add(v1.key)

	def get_adjacent(self, key):
		if key in self.edges:
			return self.edges[key]
		else:
			raise Exception("key not found in graph")

	def traverse(self, key):
		"""
		traverse graph starting from given Vertex's key
		breadth first traverse
		"""
		q = Queue.Queue()
		visited = []
		q.put(key)
		while not q.empty():
			curr = q.get()
			visited.append(curr)
			adj = self.get_adjacent(curr)
			for n in adj:
				if n not in visited:
					q.put(n)
		return visited

	def is_connected(self, key1, key2):
		"""
		sloppy algorithm
		"""
		if key1 not in self.vertices.keys() or key2 not in self.vertices.keys():
			raise Exception("vertex does not exist in graph")
		all_connected = self.traverse(key1)
		return key2 in all_connected

g = UndirectedGraph()
g.addEdge(1,2)
g.addEdge(1,3)
g.addEdge(1,4)
g.addEdge(5,6)
print g.traverse(2)
print g.is_connected(3,4)

