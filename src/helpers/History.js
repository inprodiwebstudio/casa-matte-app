class History {
	constructor() {
	  this.undoStack = [];  // stack to hold undo actions
	  this.redoStack = [];  // stack to hold redo actions
	  this.currentAction = null; // current action being performed
	}

	// method to add an action to the undo stack
	addToUndoStack(action) {
	  this.undoStack.push(action);
	  this.redoStack = []; // clear the redo stack
	  this.currentAction = action; // set the current action
	}

	// method to undo the last action
	undo() {
	  if (this.undoStack.length > 0) {
			const lastAction = this.undoStack.pop();
			// lastAction.undo();
			this.redoStack.push(lastAction);
			this.currentAction = null; // clear the current action
	  }
	}

	// method to redo the last undone action
	redo() {
	  if (this.redoStack.length > 0) {
			const lastUndoneAction = this.redoStack.pop();
			// lastUndoneAction.redo();
			this.undoStack.push(lastUndoneAction);
			this.currentAction = null; // clear the current action
	  }
	}
}

export default History;

