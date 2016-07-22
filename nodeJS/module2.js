console.log("console logging stuff directly from module 2");

var m2_roar = "module 2 is on fire too";


// MODULE EXPORTS 
module.exports.m2_roar = m2_roar;

module.exports = function(){
	console.log("yee. calling function 'as module' directly from module 2");
};
