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
    constructor() {
        // The # before the variable name indicates
        //   a private variable.
        this.#head = null;
    }

    /*
    Method to retrieve the value in the first node.
    returns null if the list is empty.
    Time Complexity: ?
    Space Complexity: ?
    */
    getFirst() {
        return this.#head !== null ? this.#head.value : null;
    }

    /*
    Method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addFirst(value) {
        if (this.#head === null) {
            this.#head = new Node(value);
        } else {
            this.#head = new Node(value, this.#head);
        }
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {
        let cur = this.#head;
        while (cur !== null) {
            if (cur.value === value) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    length() {
        let cur = this.#head;
        let len = 0;
        while (cur !== null) {
            len++;
            cur = cur.next;
        }

        return len;

    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        let cur = this.#head;
        if (cur === null) {
            return null;
        }

        let i = 0;
        while (i < index && cur.next !== null) {
            i++;
            cur = cur.next;
        }

        if (i === index) {
            return cur.value;
        }

    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        let cur = this.#head;
        while (cur !== null) {
            if (cur.next === null) {
                return cur.value;
            }
            cur = cur.next;
        }
        return null;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        let cur = this.#head;
        if (cur === null) {
            this.addFirst(value);
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }

            cur.next = new Node(value);
        }
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
    */
    findMax() {
        let cur = this.#head;
        if (cur === null) {
            return null;
        }

        let maxVal = cur.value;
        while (cur !== null) {
            if (cur.value > maxVal) {
                maxVal = cur.value;
            }

            cur = cur.next;
        }

        return maxVal;
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) {
        let cur = this.#head;

        if (cur === null) {
            return;
        }

        if (cur.value === value) {
            this.#head = cur.next;
        } else {
            let prev = cur;
            cur = cur.next;
            while (cur !== null) {
                if (cur.value === value) {
                    prev.next = cur.next;
                    return;
                }
                prev = cur;
                cur = cur.next;
            }
        }

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
        let prev = this.#head;
        if (prev === null || prev.next === null) {
            return;
        }

        let cur = this.#head.next;

        while (cur !== null) {
            let tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;
        }

        this.#head.next = null;
        this.#head = prev;



    }

    // Advanced Exercises
    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        const len = this.length();
        const mid = Math.floor(len / 2)
        return this.getAtIndex(mid);
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        const len = this.length();
        const i = len - n;
        return this.getAtIndex(i);
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
