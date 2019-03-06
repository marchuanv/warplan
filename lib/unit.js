function Unit(id ,description, rule){
	
	this.id = id;
	this.description = description;
	this.rule = rule;

	this.models = [];
	this.add = (model) => {
	    if (this.rule.validate(this.models) === false){
			const errors = this.rule.messages.toString().replace(",","\n");
			throw new Error(errors);
	    }
	    this.models.push(model);
	}
	
};