function DetachmentFactory(){
	function Detachment(type) {
	  this.type = type;
	  this.addModel=(model)=>{
	  	this.models.push(model);
	  }
	  this.getModel=(name)=>{
	  	return this.models.find(x => x.name === name);
	  }
	}
	this.create=(type)=>{
		return new Detachment(type);
	}
};
