function Model(armoury, name, basePoints) {

	this.name = name;
	this.points = basePoints;

	this.weapons=[];
	this.equipment=[];

	this.abilites=[];
	this.factions=[];
	this.keywords=[];

	this.addWeapon=(id) => {
		const weapon = armoury.weapons.find(x => x.id === id);
		this.points = (this.points + weapon.points);
		this.weapons.push(weapon);
	}

	this.addEquipment=(id) => {
		const equipment = armoury.equipment.find(x => x.id === id);
		this.points = (this.points + equipment.points);
		this.equipment.push(equipment);
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
};