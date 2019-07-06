import { dataStructor, sort, dynamicPrograming, search } from '../src';

const {
    Stack,
    Queue,
    LinkedList,
    DoublyLinkedList,
    BinarySearchTree,
    Graph
} = dataStructor;

const {
    bubbleSort,
    selectSort,
    insertSort,
    mergeSort,
    quickSort,
    heapSort
} = sort;

const {
    fibonacci,
    LCS
} = dynamicPrograming;

const {
    binarySearch
} = search;

const arr = [5, 4, 6, 3, 7, 2, 8, 1, 9, 0];

// Stack 使用用例
let stack = new Stack();

console.log('stack', stack.isEmpty());
stack.push(5);
stack.push(8);
console.log('stack', stack.peek());
stack.push(11);
console.log('stack', stack.size());
console.log('stack', stack.isEmpty());
stack.pop();
stack.pop();
console.log('stack', stack.size());


// Queue 使用用例
let queue = new Queue();

console.log('queue', queue.isEmpty());
queue.enqueue(5);
queue.enqueue(8);
console.log('queue', queue.front());
queue.enqueue(11);
console.log('queue', queue.size());
console.log('queue', queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log('queue', queue.size());

// LinkedList 使用用例
let linkedList = new LinkedList();
console.log('linkedList.isEmpty', linkedList.isEmpty());
linkedList.append(15);
console.log('linkedList', linkedList);
linkedList.append(10);
console.log('linkedList', linkedList);
linkedList.append(11);
console.log('linkedList.size', linkedList.size());
console.log('linkedList.isEmpty', linkedList.isEmpty());
console.log('linkedList.getHead', linkedList.getHead());
console.log('linkedList.indexOf', linkedList.indexOf(10));
linkedList.remove(10);
console.log('linkedList.size', linkedList.size());
console.log('linkedList.isEmpty', linkedList.isEmpty());
console.log('linkedList.getHead', linkedList.getHead());
console.log('linkedList.indexOf', linkedList.indexOf(10));
linkedList.insert(1, 12);
console.log('linkedList.isEmpty', linkedList.isEmpty());
console.log('linkedList.getHead', linkedList.getHead());
console.log('linkedList.indexOf', linkedList.indexOf(12));
linkedList.removeAt(2);
linkedList.append(76);
linkedList.append(88);
console.log('linkedList.size()', linkedList.size());
console.log('linkedList.toString()', linkedList.toString());

// 双向链表
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(15);
console.log('doublyLinkedList', doublyLinkedList);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.append(10);
console.log('doublyLinkedList', doublyLinkedList);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.append(11);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.removeAt(1);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

doublyLinkedList.append(18);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.remove(11);
console.log('doublyLinkedList.size', doublyLinkedList.size());
console.log('doublyLinkedList.isEmpty', doublyLinkedList.isEmpty());
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead());
console.log('doublyLinkedList.getTail', doublyLinkedList.getTail());
console.log('doublyLinkedList.indexOf', doublyLinkedList.indexOf(10));
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(1, 6);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(0, 8);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(-1, 1);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
doublyLinkedList.insert(19, 6);
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());
console.log('doublyLinkedList.toString()', doublyLinkedList.toString());

console.log(arr);

// 冒泡排序 使用用例
console.log('bubbleSort', bubbleSort(Array.from(arr)));

// 选择排序 使用用例
console.log('selectSort', selectSort(Array.from(arr)));

// 插入排序 使用用例
console.log('insertSort', insertSort(Array.from(arr)));

// 归并排序 使用用例
console.log('mergeSort', mergeSort(Array.from(arr)));

// 快速排序 使用用例
console.log('quickSort', quickSort(Array.from(arr)));

// 堆排序 使用用例
console.log('heapSort', heapSort(Array.from(arr)));

// 动态规划相关

// 斐波那契数列
// console.log('fibonacci', fibonacci(0));
console.log('fibonacci', fibonacci(1));
console.log('fibonacci', fibonacci(2));
console.log('fibonacci', fibonacci(3));
console.log('fibonacci', fibonacci(10));
console.log('fibonacci', fibonacci(20));

// 最长公共子序列
console.log('LCS', LCS('educational', 'advantage'));
console.log('LCS', LCS('didactical', 'advantage'));


// 二分查找
console.log('binarySearch', binarySearch(quickSort(Array.from(arr)), 5));

// 二叉树

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insertNode(7);
binarySearchTree.insertNode(15);
binarySearchTree.insertNode(5);
binarySearchTree.insertNode(3);
binarySearchTree.insertNode(9);
binarySearchTree.insertNode(8);
binarySearchTree.insertNode(10);
binarySearchTree.insertNode(13);
binarySearchTree.insertNode(12);
binarySearchTree.insertNode(14);
console.log('binarySearchTree', binarySearchTree);
console.log('binarySearchTree.preOrderRec', binarySearchTree.preOrderRec());
console.log('binarySearchTree.inOrderRec', binarySearchTree.inOrderRec());
console.log('binarySearchTree.inOrderRec', binarySearchTree.postOrder());

// 图
let graph = new Graph();
let myVertices=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i=0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');
console.log('graph', graph.toString());
console.log('graph.BFS', graph.BFS());
console.log('graph.getShortestPath', graph.getShortestPath());
console.log('graph.DFS', graph.DFS());
console.log('graph.DFSRec', graph.DFSRec());


graph = new Graph(true);//有向图
myVertices=['A','B','C','D','E','F'];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('B','D');
graph.addEdge('B','E');
graph.addEdge('C','F');
graph.addEdge('F','E');
console.log('graph.DAG', graph.DAG());


