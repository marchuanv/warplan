function Rule(id, description, rule, key, value, failedMsg) {
	
	this.id = id;
	this.description = description;
	this.rule=rule;
	this.messages=[];

  this.validate = (data) => {
    if (this.rule){
    	if (this.rule.validate(data) === true){
        this.messages = this.messages.concat(this.rule.messages);
    	}
    }
    if (data[key]){
    	if (data[key] !== value){
       this.messages.push(failedMsg);
    	}
    } else {
    	this.messages.push(`${key} key not found in data.`);
    }
    return this.messages.length === 0;
  };
}