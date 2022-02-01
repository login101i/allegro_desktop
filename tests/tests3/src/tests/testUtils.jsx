/**
 * Factory function ot create a ShallowWrapper 
 * @function findByTestAtrr
 * @param {string}
 * @returns {ShallowWrapper}
 **/

export const findByTestAtrr=(wrapper, value)=>{
 return wrapper.find(`[data-test="${value}"]`)
}