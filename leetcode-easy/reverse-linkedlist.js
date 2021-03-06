/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

const Node = function (data) {
  this.data = data;
  this.next;
}

const reverseLinkedList = (ll) => {
  if (!ll) {
    return; 
  }
  
  const head = new Node();
  const reversedLL = head;
  
  reverse(ll, reversedLL);
  return head.next;
}

const reverse = (ll, reversedLL) => {
  if (ll) {
    reversedLL = reverse(ll.next, reversedLL);
    reversedLL.next = new Node(ll.data);
    reversedLL = reversedLL.next;
  } 
  return reversedLL;
}

/*

******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************
******************************************************************

*/

const Node = function (data) {
  this.data = data;
  this.next;
}

const reverseLinkedList = (head) => {
  if (!head) {
    return null;
  }
  
  const reversedListHead = new Node();
  const reversedList = reversedListHead;
  reverse(head, reversedList);
    
  return reversedListHead.next;
}

const reverse = (node, reversedList) => {
  if (node) {
    reversedList = reverse(node.next, reversedList);
    reversedList.next = new Node(node.data);
  	reversedList = reversedList.next;
  }
 
  return reversedList;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

a.next = b;
b.next = c;
c.next = null;

let n = reverseLinkedList(a);
while(n){
	console.log(n.data);
  n = n.next;
}














