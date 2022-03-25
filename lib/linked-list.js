// Defines a node in the singly linked list
class Node {
    constructor(value, next = null, flag = 0) {
        this.value = value;
        this.next = next;
        this.flag = flag;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    #listLength;
    #listMax;
    constructor() {
        // The # before the variable name indicates
        //   a private variable.
        this.#head = null;
        this.#listLength = 0;
        this.#listMax = null;
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
        }
    }

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
        this.#listLength++;

        if (!this.#head) {
            this.#head = new Node(value);
            this.#listMax = this.#head.value;
        } else {
            let new_node = new Node(value, this.#head);
            this.#head = new_node;
            if (this.#head.value > this.#listMax) {
                this.#listMax = this.#head.value;
            }
        }
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
            }
            current = current.next;
        }
        return false;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
     */
    length() {
        return this.#listLength;
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
            }
        }
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
        }
        return current.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    addLast(value) {
        let new_node = new Node(value);
        this.#listLength ++;

        if (!this.#head) {
            this.#head = new_node;
            this.#listMax = value;
        } else {
            let current = this.#head;
            while (current.next) {
                current = current.next;
            };
            current.next = new_node;
            if (value > this.#listMax) {
                this.#listMax = value;
            }
        }
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    findMax() {
        return this.#listMax;
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    delete(value) {
        if (!this.#head) return;

        if (this.#head.value === value) {
            this.#head = this.#head.next;
        }

        let current = this.#head;
        this.#listLength --;

        while (current) {
            if (current.next && current.next.value === value) {
                current.next = current.next.next;
                break
            }
            current = current.next;
        }

        if (value === this.#listMax) {
            let current = this.#head;
            this.#listMax = this.#head.value;
            while (current) {
                if (current.value > this.#listMax) {
                    this.#listMax = current.value;
                };
                current = current.next;
            }
        }

        if (this.#listLength === 0) {
            this.#listMax = null;
        }
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
    reverse() {
        if (!this.#head) return;

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
    Time Complexity: O(n) (because of getAtIndex)
    Space Complexity: O(1)
     */
    findMiddleValue() {
        let middleIndex = Math.floor(this.#listLength/2);
        return this.getAtIndex(middleIndex);      
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: O(n) (because of getAtIndex)
    Space Complexity: O(1)
    */
    findNthFromEnd(n) {
        let nthIndex = this.#listLength - n;
        return this.getAtIndex(nthIndex);
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    hasCycle() {
        if (!this.#head) return false;
        
        let current = this.#head;

        while (current.next) {
            if (current.flag == 1) {
                return true;
            }

            current.flag = 1;
            current = current.next;
        }
        return false;
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