function Detachment(id, description, rule) {
  
  this.id = id;
  this.description = description;
  this.rule = rule;

  this.units = [];
  this.add = (unit) => {
    if (this.rule.validate(this.units) === false){
      const errors = this.rule.messages.toString().replace(",","\n");
		  throw new Error(errors);
    }
    this.units.push(unit);
  }
  
}