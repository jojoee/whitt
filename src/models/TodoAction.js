/**
 * TodoAction model
 * 
 * @param {string} type
 * @param {number} id
 * @param {string} text
 * @param {boolean} [isCompleted=false]
 */
let TodoAction = function(type, id, text, isCompleted = false) {
  this.type = type;
  this.id = id;
  this.text = text;
  this.isCompleted = isCompleted;
};

export default TodoAction;
