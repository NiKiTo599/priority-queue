const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let a = new Node(data,priority);
		this.insertNode(a);
		this.shiftNodeUp(a);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return this.size() == 0;
	}

	clear() {
		root = null;
		parentNodes = [];
	}

	insertNode(node) {
		this.size_heap++;
		if(this.isEmpty()) {
			this.root = node;
		} else {
			if(this.parentNodes[0].left === null) {
				this.parentNodes[0].appendChild(node);
			} else {
				this.parentNodes[0].appendChild(node);
				this.parentNodes.push(node);				
				this.parentNodes.shift();
				return;
			}
		}
		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		let node = this.size() - 1;
		while (node > top && this._greater(node, parent(node))) {
		  this._swap(node, parent(node));
		  node = parent(node);
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
