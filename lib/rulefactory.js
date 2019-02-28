function RuleFactory(){
	function Rule(name, category) {
	  this.name = name;
	  this.category = category;
	}
	this.create=(name, category) => {
		return new Rule(name, category);
	}
};
