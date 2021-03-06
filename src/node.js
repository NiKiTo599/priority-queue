class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
		} else if (!this.right) {
			this.right = node;
		}
	}

	removeChild(node) {
		if (node === this.left) {
			this.left = null;
			node.parent = null;
		} else if (node === this.right) {
			this.right = null;
			node.parent = null;
		} else {
			throw "Passed node is not a child of this node";
		}
	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
