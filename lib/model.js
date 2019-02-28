function Model() {
  this.name="";
  this.points=0;
  this.attributes=[];
  this.getPoints=()=>{
    this.points = 0;
    for(const att in this.attributes){
      this.points = this.points + att.points;
    };
  }
}