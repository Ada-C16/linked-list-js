// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the #head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    constructor() {
        // The # before the variable name indicates
        //   a private variable.
        this.#head = null;
    }

    /* 
    Method to retrieve the value in the first node.
    returns null if the list is empty.
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    getFirst() {
        if (!this.#head) {
            return null;
        } else {
            return this.#head;
        };
    };

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
        if (!this.#head) {
            this.#head = new Node(value);
        } else {
            let new_node = new Node(value);
            new_node.next = this.#head;
            this.#head = new_node;            
        };
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    search(value) {
        let current = this.#head;
        while (current) {
            if (current.value === value) {
                return true;
            };
            current = current.next;
        }
        return false;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    length() {
        let count = 0;
        let current = this.#head;
        while (current) {
            count++;
            current = current.next;
        };
        return count;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    getAtIndex(index) {
        let count = 0;
        let current = this.#head;
        while (current) {
            if (count === index) {
                return current.value;
            } else {
                count++;
                current = current.next;
            };
        };
        return null;
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    getLast() {
        let current = this.#head;
        while (current.next) {
            current = current.next;
        };
        return current.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    addLast(value) {
        let new_node = new Node(value);

        if (!this.#head) {
            this.#head = new_node;
        } else {
            let current = this.#head;
            while (current.next != null) {
                current = current.next;
            };
            current.next = new_node;
        };
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findMax() {
        if (!this.#head) {
            return null;
        };
        let max = this.#head.value;
        let current = this.#head;
        while (current) {
            if (current.value > max) {
                max = current.value;
            }
            current = current.next;
        };
        return max;
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    delete(value) { 
        if (!this.#head) {
            return;
        };

        if (this.#head.value === value) {
            this.#head = this.#head.next;
            return;
        };

        let current = this.#head
        while (current) {
            if (current.next != null && current.next.value === value){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        };
        
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n)
    Space Complexity: O(n)
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
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
   // 2 -> 3 -> 4 -> 5
    reverse() {
        if (!this.#head) {
            return;
        };
        
        let previous = null;
        let current = this.#head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;     
            current = next;     
        }
        this.#head = previous;
    }

    // Advanced Exercises
    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMiddleValue() {
        let a = 0;
        let current = this.#head;

        while (current) {
            a ++;
            current = current.next;
        };

        let b = 0;
        let middle = 0;

        if (a % 2) {
            middle = Math.floor(a/2);
        } else {
            middle = a/2;
        };
        
        let current2 = this.#head;

        while (current2) {
            if (b === middle) {
                return current2.value;
            } 
            b++;
            current2 = current2.next;
        };
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findNthFromEnd(n) {
        let a = 0;
        let current = this.#head;

        while (current) {
            a ++;
            current = current.next;
        };

        let b = 0;
        let index = a - n
        let current2 = this.#head

        while (current2) {
            if (b === index) {
                return current2.value;
            } 
            b++;
            current2 = current2.next;
        };

        return null;
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: O(n^2)
    Space Complexity: O(n)
    */
    hasCycle() {
        if (!this.#head) {
            return false;
        }

        let reference_list = [];
        let current = this.#head;

        while(current) {
            if (!current.next) {
                return false;
            } else if (reference_list.includes(current.next)) {
                return true;
            } else {
                reference_list.push(current.next);
            }
            current = current.next;
        };
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