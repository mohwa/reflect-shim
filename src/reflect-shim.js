/**
 * Created by mohwa on 2018. 2. 14..
 */

const root = window || this;
const msg = 'Reflect.{{methodName}} called on non-object';

module.exports = !root.Reflect || function(){

    return {
        apply: _apply,
        construct: _construct,
        defineProperty: _defineProperty,
        deleteProperty: _deleteProperty,
        get: _get,
        set: _set,
        getOwnPropertyDescriptor: _getOwnPropertyDescriptor,
        getPrototypeOf: _getPrototypeOf,
        has: _has,
        isExtensible: _isExtensible,
        preventExtensions: _preventExtensions,
        ownKeys: _ownKeys,
        setPrototypeOf: _setPrototypeOf
    }
}();

/**
 * 전달받은 아규먼트로(target, thisArgument ..) target 함수를 호출한다.
 *
 * @param fn
 * @param thisArgument
 * @param args
 * @private
 */
function _apply(fn = function(){}, thisArgument = null, args = []){

    if (typeof fn !== 'function'){
        throw new Error(_replaceErrorMsg('apply'));
    }

    return fn.apply(thisArgument, args);
}

/**
 * 전달받은 아규먼트로(target, thisArgument ..) 새로운 인스턴스를 반환한다.
 *
 * @param fn
 * @param args
 * @returns {function(this:Function)}
 * @private
 */
function _construct(fn = function(){}, args = []){

    if (typeof fn !== 'function'){
        throw new Error(_replaceErrorMsg('construct'));
    }

    return new (fn.bind.apply(fn, [fn].concat(args)));
}

/**
 * 객체 속성을 정의한다.
 *
 * @param o
 * @param k
 * @param disc
 * @returns {Object}
 * @private
 */
function _defineProperty(o = null, k = '', disc = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('defineProperty'));
    }

    let ret = false;

    try{
        Object.defineProperty(o, k, disc);
        ret = true;
    }
    catch(e){
        console.warn(e.message);
    }

    return ret;
}

/**
 * 객체 속성을 삭제한다.
 *
 * @param o
 * @param k
 * @private
 */
function _deleteProperty(o = null, k = ''){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('deleteProperty'));
    }

    let ret = false;

    try{
        delete o[k];
        ret = true;
    }
    catch(e){
        console.warn(e.message);
    }

    return ret;
}

/**
 *
 * @param o
 * @param k
 * @param receiver
 * @returns {*}
 * @private
 */
function _get(o = null, k = '', receiver = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('get'));
    }

    const disc = _getOwnPropertyDescriptor(o, k);

    if (
        disc &&
        typeof disc.get === 'function'){

        _defineProperty(o, k, {
            get: disc.get.bind(receiver || o)
        });
    }

    return o[k];
}

/**
 *
 * @param o
 * @param k
 * @param v
 * @param receiver
 * @returns {boolean}
 * @private
 */
function _set(o = null, k = '', v, receiver = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('set'));
    }

    let ret = false;
    const disc = _getOwnPropertyDescriptor(o, k);

    if (
        disc &&
        typeof disc.set === 'function'){

        _defineProperty(o, k, {
            set: disc.set.bind(receiver || o)
        });
    }

    try{
        o[k] = v;
        ret = true;
    }
    catch(e){
        console.warn(e.message);
    }

    return ret;
}

/**
 *
 * @param o
 * @param v
 * @returns {Object}
 * @private
 */
function _getOwnPropertyDescriptor(o = null, v = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('getOwnPropertyDescriptor'));
    }

    return Object.getOwnPropertyDescriptor(o, v);
}


/**
 *
 * @param o
 * @returns {Object}
 * @private
 */
function _getPrototypeOf(o = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('getPrototypeOf'));
    }

    return Object.getPrototypeOf(o);
}

/**
 *
 * @param o
 * @param k
 * @returns {boolean}
 * @private
 */
function _has(o = null, k = ''){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('has'));
    }

    return k in o;
}

/**
 *
 * @param o
 * @returns {boolean}
 * @private
 */
function _isExtensible(o = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('isExtensible'));
    }

    return Object.isExtensible(o);
}

/**
 *
 * @param o
 * @returns {boolean}
 * @private
 */
function _preventExtensions(o = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('preventExtensions'));
    }

    return Object.preventExtensions(o);
}

/**
 *
 * @param o
 * @returns {Object}
 * @private
 */
function _ownKeys(o = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('ownKeys'));
    }

    return Object.keys(o);
}

/**
 *
 * @param o
 * @returns {Array}
 * @private
 */
function _setPrototypeOf(o = null, prototype = null){

    if (typeof o !== 'object'){
        throw new Error(_replaceErrorMsg('setPrototypeOf'));
    }

    if (typeof prototype !== 'object'){
        throw new Error(_replaceErrorMsg('setPrototypeOf'));
    }

    let ret = false;

    try{

        Object.setPrototypeOf(o, prototype);

        ret = true;
    }
    catch(e){
        console.warn(e.message);
    }

    return ret;
}

/**
 *
 * @param methodName
 * @returns {*}
 * @private
 */
function _replaceErrorMsg(methodName = ''){
    return msg.replace(/\{\{(methodName)\}\}/, methodName);
}


