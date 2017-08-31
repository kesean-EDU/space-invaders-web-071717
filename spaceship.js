class Spaceship {
  constructor(name, crew, phasers, shields){
      this.name = name;
      this.phasers = phasers;
      this.shields = shields;
      this.docked = true;
      this.crew = this.setCrew(crew);
      this.cloaked = false;
      this.warpDrive = 'disengaged';
      this.phasersCharge = 'uncharged';

    }

     setCrew(crew){
      if (crew.length > 0) {
        for (var i = 0; i < crew.length; i++) {
          crew[i].currentShip = this
          debugger;
        }
        this.docked = false;
      }
    }

}
