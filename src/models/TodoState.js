/**
 * TodoState model
 * 
 * @param {number} id
 * @param {string} text
 * @param {boolean} [isCompleted=false]
 */
let TodoState = function(id, text, isCompleted = false) {
  this.id = id;
  this.text = text;
  this.isCompleted = isCompleted;
};

export default TodoState;
