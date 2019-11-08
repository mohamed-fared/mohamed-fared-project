var Passenger = function(name,middle,last,passPortNumber,country,gender){
	var instence = {};
	instence.name = name;
	instence.middle = middle;
	instence.last = last;
	instence.passPortNumber = passPortNumber;
	instence.gender = gender;
	instence.timeOfCreation = new Date().toLocaleString();
	instence.country = country;

	return instence;

}

var DataBase = function(passenger) {
	var instence = {};
	instence.passengers = [];
	instence.addPassenger = addPassenger;
	instence.removePassenger = removePassenger;
	instence.getPassenger = getPassenger;

	return instence;


}

var redFlagPassengers = [ {
	name : "mohaemd",
	last : "salah",
	passPortNumber : "1234"
	
		}

	]

var addPassenger = function(passenger){

	this.passengers.push(passenger);

}

var removePassenger = function(passPortNumber,last){
	var index = this.passengers.findIndex(function(elemnt) {
		return passPortNumber === elemnt.passPortNumber && last === elemnt.last
	});

	if(index >= 0 ) {
		this.passengers.splice(index,1)
	}else{
		console.warn("This Passenger Not Found")
	}
}

var getPassenger = function(passPortNumber,last) {

	var index = this.passengers.findIndex(function(elemnt) {
		return passPortNumber === elemnt.passPortNumber && last === elemnt.last
	});

	if(index >= 0 ) {
		 return this.passengers[index];
	}else{
		return "This Passenger Not Found"
	}
	

}


	// var data = DataBase();
	// var pass1 = Passenger("name","middle","last","passportNumber","gender")
	// var pass2 = Passenger("nfffame","mifffdle","lfffast","pasfffsportNumber","genfffder")
	// var pass3 = Passenger("moahmed","fared","salah","1234","libya")
	// data.addPassenger(pass1)
	// data.addPassenger(pass2)
	// data.addPassenger(pass3)



