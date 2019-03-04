function createModel(name, points){
	function Model(name, points) {

	  this.name = name;
	  this.points = points;
	  
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
	return new Model(name, points);
};