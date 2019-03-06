function Rule(id, attributeTemplate, message, rule) {
	
    this.id = id;
    this.attributeTemplate = attributeTemplate;
    this.message = message;
    this.rule=rule;

    this.messages=[];

    const getAttribute = (data, attribute) => {
        for(const att in attribute){
            if (data[att] === undefined || data[att] === null){
                return;
            } else {
                return getAttribute(data[att], attributeTemplate[att]);
            }
        };
    };

   

    this.validate = (data) => {
        if (this.rule){
        	if (this.rule.validate(data) === false){
                this.messages = this.messages.concat(this.rule.messages);
        	}
        }

        for(const attName in attribute){

        };

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