function Observer(name){
	var observer = {};
	this.name = name || "nameless observer";
	this.update = function(content){
		this.email = content.email || "test email";
		this.news = content.news || "no news";
	}
}

Observer.prototype.sayName = function(){
	return this.name;
};

Observer.prototype.myContent = function(){
	return "Email: " + this.email + " " + "News: " + this.news;  
}

module.exports = exports = Observer;