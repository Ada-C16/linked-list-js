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
    #head;
    #length;

    constructor(head = null, tail = null, length = 0) {
        // The # before the variable name indicates
        //   a private variable.
        this.#head = head;
        this.tail = tail;
        this.#length = length;
    }

    /* 
    Method to retrieve the value in the first node.
    returns null if the list is empty.
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    getFirst() {
        return this.#head.value;
    }

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
        // If there is no head, create a new node and set it to the head and tail
        if (!this.#head) {
            this.#head = new Node(value);
            this.tail = this.#head;
        } else {
            const oldHead = this.#head;
            this.#head = new Node(value);
            this.#head.next = oldHead;
        }
        this.#length++;
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(N)
    Space Complexity: O(1)
    */
    search(value) {
        // Loop through linked list nodes
        // Start at head
        // Loop while current is not none
        let current = this.#head;
        while (current) {
            if (current.value === value) {
                return true
            } else {
                current = current.next
            }
        }

        return false
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
     */
    length() {
        return this.#length
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(N)
    Space Complexity: O(1)
     */
    getAtIndex(index) {
        // if (index >= this.length || !this.#head) { return null }
        // if (index === 0) { return this.#head.value }
        // Loop through index
        let i = 0;
        let current = this.#head;
        while (current) {
            if (i === index) {
                return current.value
            } else {
                i++ // increment index value
                current = current.next // increment value of current
            }
        }

        return null
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    getLast() {
        return this.tail.value
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addLast(value) {
        // If tail, store value
        // Else, set new node to tail
        if (!this.tail) {
            this.addFirst(value);
        } else {
            const newNode = new Node(value);
            this.tail.next = newNode; // set current tail next node to new node
            this.tail = newNode; // set current tail to new node
            this.#length++
        }
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(N)
    Space Complexity: O(1)
    */
    findMax() {
        let maxVal;

        if (!this.#head) { maxVal = null }
        else {
            maxVal = 0;
            let current = this.#head; // Start at head node
            // Traverse the list finding the max
            // Compare current value to current max
            while (current) { // Current is not null, should reach tail
                if (current.value > maxVal) { maxVal = current.value } // If node value > maxVal, update maxVal
                current = current.next; // Move to the next node
            }
        }
        return maxVal
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: O(N)
    Space Complexity: O(1)
    */
    delete(value) {
        if (!this.#head || !this.search(value)) { return }
        // Find the value in the list
        // Using traverse function
        // We can assume the value exists in the list:
        let current = this.#head;
        let prev = this.#head;

        while (current) { // Gets us to the end of the tail
            if (current.value === value) {
                if (!current.next) {
                    // 0->2->3->4
                    prev.next = null;
                    this.tail = prev;
                }
                else {
                    // 0->2->3->4
                    if (current === this.#head) {
                        this.#head = current.next;
                        break;
                    }
                    prev.next = current.next
                }
                break;
            } else {
                // 0->2->3->4
                prev = current
                current = current.next
            }
        }
        this.#length--;
        // Keep track of current val and position before
        // Update reference of position before
        // If list length is 1 and the value is that number, then head and tail need to be null
    }

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {
        const helper_list = []
        current = this.#head;

        while (current) {
            helper_list.push(current.value);
            current = current.next;
        }

        console.log(helper_list.toString());
    }


    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        throw new Error("This method hasn't been implemented yet!");
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
        if (!this.#head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.#head;
    }

    end

}

module.exports = LinkedList;