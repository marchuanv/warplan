function ModelFactory(){
	function Model(name, startPoints) {

	  this.name = name;
	  this.points = startPoints;
	  
	  this.weapons=[];
	  this.abilites=[];
	  this.factions=[];
	  this.keywords=[];

	  this.addWeapon=(name, description) => {
	  	this.weapons.push({name, description});
	  }
	  this.addAbility=(name, description) => {
	  	this.abilites.push({name, description});
	  }
	  this.addFaction=(name, description) => {
	  	this.factions.push({name, description});	
	  }
	  this.addKeyword=(keyWord) => {
	  	this.keywords.push(keyWord);
	  }

	}
	this.create=(name, category)=>{
		return new Model(name, category);
	}
};
