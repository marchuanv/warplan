function createRule(name, description){
	function Rule(name, description) {
	  this.name = name;
	  this.description = description;
	}
	return new Rule(name, description);
};