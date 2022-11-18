/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode
      this.length = this.length + 1

    };

    if (this.tail !== null) {
      this.tail.next = newNode
      this.length = this.length + 1


    };

    this.tail = newNode;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode

    };

    newNode.next = this.head
    this.head = newNode
    this.length = this.length + 1
    

  }

  /** pop(): return & remove last item. */

  pop() {


      let current = this.head;
      if(this.length === 1){
        let copyNode = current
        this.length = 0
        this.head = null
        this.tail = null
        return copyNode.val
      }
      
      while (current !== null) {
      if (current.next.next === null){
        let copyNode = this.tail
        this.tail = current
        this.tail.next = null;
        this.length--
        return copyNode.val
        


      };

      current = current.next;
    }



  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length === 0) return null
    if(this.length === 1){
      let copyNode = this.head;
      this.tail = null
      this.head = null;
      this.length--
      return copyNode.val
    }
    let copyNode = this.head
    this.head = this.head.next

    this.length--
    return copyNode.val

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx>this.length || idx < 0 ) throw "ERROR"
    let current = this.head
    for(let i = 0; i < this.length; i++){
      if(i === idx){
        return current.val

      }else{
        current =current.next 

      }
      
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

     if(idx>this.length || idx < 0 ) throw "ERROR"
        let current = this.head
    for(let i = 0; i < idx+1; i++){
      if(i === idx){
        current.val = val

      }else{
        current =current.next 
    }
  }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let current = this.head

    let newNode = new Node(val);
    for(let i = 0; i < idx+1; i++){
      if( i === idx-1){
        newNode.next = current.next;
        current.next = newNode;

      }else{
        current = current.next
      }


    }


    this.length += 1;

  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx>this.length || idx < 0 ) return 0
    if(this.length === 0 ) return 0
    let current = this.head

      
    for( let i = 0; i < this.length; i++){
      if(i === idx){
        let copyNode  = current
        this.head = null;
        this.tail = null
        // current.next = current.next.next
        // current.next.next = null
        this.length--
        return copyNode.val;

      }else{
        current =current.next 
      
    }

  }

  }

  /** average(): return an average of all values in the list */

    average() {
          if(this.length === 0 ) return 0
            let sum = 0
            let current = this.head
          while(current != null){
            sum = sum + current.val
            current = current.next
          }
          return (sum/this.length)
  }
}



module.exports = LinkedList;
