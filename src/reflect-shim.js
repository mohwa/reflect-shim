/**
 * Created by mohwa on 2018. 2. 14..
 */

const root = window || this;

module.exports = !root.Reflect || function(){

    return {
        apply: _apply,
        construct: _construct,
        defineProperty: _defineProperty,
        deleteProperty: _deleteProperty,
        get: _get
    }
}();

/**
 *
 * @param fn
 * @param context
 * @param args
 * @private
 */
function _apply(fn = function(){}, context = null, args = []){
    return fn.apply(context, args);
}

/**
 *
 * @param fn
 * @param args
 * @returns {fn.bind.apply}
 * @private
 */
function _construct(fn = function(){}, args = []){
    return new (fn.bind.apply(fn, [fn].concat(args)));
}

/**
 *
 * @param o
 * @param k
 * @param disc
 * @returns {Object}
 * @private
 */
function _defineProperty(o = null, k = '', disc = null){
    return Object.defineProperty(o, k, disc);
}

/**
 *
 * @param o
 * @param k
 * @private
 */
function _deleteProperty(o = null, k = ''){
    delete o[k];
}

/**
 * 구현해야하는 메서드
 *
 * @param o
 * @param k
 * @private
 */
function _get(o = null, k = ''){
    //delete o[k];
}


