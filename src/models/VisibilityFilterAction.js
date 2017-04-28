/**
 * VisibilityFilterAction model
 * 
 * @todo update type of filter's param
 * @param {string} type
 * @param {string} filter SHOW_ACTIVE|SHOW_COMPLETED|SHOW_ALL
 */
let VisibilityFilterAction = function(type, filter) {
  this.type = type;
  this.filter = filter;
};

export default VisibilityFilterAction;
