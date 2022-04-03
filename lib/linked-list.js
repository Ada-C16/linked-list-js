// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    // #head;
    constructor() {
        // The # before the variable name indicates
        //   a private variable.
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /* 
    Method to retrieve the value in the first node.
    returns null if the list is empty.
    Time Complexity: O(1)
    Space Complexity: O(n)
    */
    getFirst() {
        return this.head
    }

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(n)
    */
    addFirst(value) {
        if(this.head != null){
            this.head = (new Node(value, this.head));            
            this.size++;
        }else{
            this.head = (new Node(value));
            this.size++;
        }

    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    search(value) {
        let current = this.head;
        while(current != null){
            if(current.value == value){
                return true;
            }else{
                current = current.next;
            }
        }
        return false //never found it.

        //throw new Error("This method hasn't been implemented yet!");

    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(n)
     */
    length() {
        //throw new Error("This method hasn't been implemented yet!");
        let counter = 0;
        let current = this.head;
        while (current != null){
            counter++;
            current = current.next;
        }
        return counter;

        // Alternatively, since we added .size to the list constructor and keep track of it,
        // you could just return this.size which would have a time complexity of O(1)
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(n)
     */
    getAtIndex(index) {
        if(index < 0 || index >= this.size){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current.value;


    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode.value;
    }
    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    addLast(value){
        //throw new Error("This method hasn't been implemented yet!");
        let node = new Node(value)
        let current;
        if (this.head == null){
            this.head = node;
        }
        else {
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;        
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    findMax() {
        //throw new Error("This method hasn't been implemented yet!");
        let current = this.head;
        let maxVal = 0;
        if (current == null) return null;
        while(current){
            if (current.value > maxVal){
                maxVal = current.value;
            }
            current = current.next;
        }        
        return maxVal;
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    delete(value) {        
        let current = this.head;

        // if there is no list, just return true
        if (current == null) return false;

        //if the value exists at head and the list is only head, delete it
        if (current.next == null){
            if (current.value == value){
                this.head = null;
                this.size--;
                return true;
            }else{
                return false;
            }
        }

        if (current.value == value){
            this.head = current.next
            this.size--;
            return true
        }

        while(current){
            let next = current.next;
            if (next.value == value){
                current.next = next.next
                this.size--;
                return true
            }else{
                current = current.next            
            }
        }        
        return false
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    visit() {
        const helper_list = []
        current = this.head;

        while (current) {
            helper_list.push(current.value);
            current = current.next;
        }

        console.log(helper_list.toString());
    }


    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    reverse() {

        if (this.head === null) return;
    
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
      
        // traverse list and adjust links
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = null;
        }
        this.head = prevNode; // reset head
        
    }

    // Advanced Exercises
    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    Helper method for tests
    Creates a cycle in the linked list for testing purposes
    Assumes the linked list has at least one node
    */
    createCycle() {
        if (!this.head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.head;
    }

    end

}

module.exports = LinkedList;