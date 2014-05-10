function Observer(name){
	var observer = {};
	this.name = name || "nameless observer";
	this.update = function(){
		return myName;
	}
}

Observer.prototype.sayName = function(){
	return this.name;
};

module.exports = exports = Observer;