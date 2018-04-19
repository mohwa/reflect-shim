/**
 * Created by mohwa on 2018. 2. 14..
 */

var ReflectShim = null;

try{ ReflectShim = require('./dist/reflect-shim');}
catch(e){ ReflectShim = require('./src/reflect-shim');}

module.exports = ReflectShim;
  
