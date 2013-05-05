import "dart:math";

void main(){
  testTree();
}

void testQueue(){
  var q = new Queue();
  assert(q.isEmpty());
  q.enqueue(1);
  assert(!q.isEmpty());
  assert(q.dequeue() == 1);
  assert(q.isEmpty());
  // 1 item twice
  q.enqueue(2);
  assert(!q.isEmpty());
  assert(q.dequeue() == 2);
  assert(q.isEmpty());
  // 2 - item
  q.enqueue(3);
  q.enqueue(4);
  assert(q.dequeue()== 3);
  assert(q.dequeue()== 4);
  assert(q.isEmpty());
}

void testTree(){
  List lst = new List();
  for(var i = 0; i < 7; i++){
    lst.add(i);
  }
  lst = shuffle(lst);
  print(lst);
  Llrb tree = new Llrb();
  for(var i = 0,il=lst.length; i<il; i++){
    tree.put(lst[i], i);
  }
  print(tree.getTree());
}

List shuffle(List lst){
  var rnd = new Random();
  for(var i=lst.length-1; i>0; i--){
    var j = rnd.nextInt(i);
    var t = lst[j];
    lst[j] = lst[i];
    lst[i] = t;
  }
  return lst;
}

class Node{
  static const bool RED = true;
  static const bool BLACK = false;
  Node(this.key,this.value);
  bool color = RED;
  Node left;
  Node right;
  var key;
  var value;
}

class Llrb{
  Node _root;
  bool put(var key, var value){
    _root = _put(key,value,_root);
    _root.color = Node.BLACK;
  }
  Node _put(var key, var value, Node node){
    if(node == null){
      // print("added " + key.toString());
      return new Node(key,value);
    }
    if(key < node.key)
      node.left = _put(key,value,node.left);
    else if(key > node.key)
      node.right = _put(key,value,node.right);
    else if(key == node.key)
      node.value = value;
    
    if(_isRed(node.right) && !_isRed(node.left))
      node = _rotateLeft(node);
    if(_isRed(node.left) && _isRed(node.left.left))
      node = _rotateRight(node);
    if(_isRed(node.left) && _isRed(node.right))
      _flipColors(node);
    
    return node;
  }
  Node _rotateLeft(Node node){
    assert(_isRed(node.right));
    
    Node r = node.right;
    node.right  = r.left;
    r.left = node;
    r.color = r.left.color;
    r.left.color = Node.RED;
    return r;
  }
  Node _rotateRight(Node node){
    assert(_isRed(node.left));
    
    Node l = node.left;
    node.left = l.right;
    l.right = node;
    l.color = l.right.color;
    l.right.color = Node.RED;
    return l;
  }
  Node _flipColors(Node node){
    assert(node.color == Node.BLACK);
    node.left.color = Node.BLACK;
    node.right.color = Node.BLACK;
    node.color = Node.RED;
    return node;
  }
  // null nodes count as black
  bool _isRed(Node node){
    if(node == null)
      return false;
    if(node.color == Node.RED)
      return true;
    return false;
  }
  
  List getTree(){
    var lst = [];
    var fringe = new Queue();
    fringe.enqueue(_root);
    while(!fringe.isEmpty()){
      Node n = fringe.dequeue();
      lst.add(n.key);
      if(n.left!=null)
        fringe.enqueue(n.left);
      if(n.right!=null)
        fringe.enqueue(n.right);
    }
    return lst;
  }
}

class Queue{
  Item _first;
  Item _last;
  void enqueue(var value){
    var newItem = new Item(value);
    if(isEmpty()){
      _first = _last = newItem;
      return;
    }
    _last.next = newItem;
    _last = newItem;
  }
  bool isEmpty(){
    return _first == null;
  }
  dynamic dequeue(){
    var value = _first.value;
    _first = _first.next;
    if(isEmpty()){
      _last = null;
    }
    return value;
  }
}
class Item{
  var value;
  Item next;
  Item(this.value);
}