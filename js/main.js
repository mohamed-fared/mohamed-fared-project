
$(document).ready(function() {

	var body = $("body");
	var data = DataBase();
	//var passngerss = [];



	$("body").on("submit","#create-passenger-form",function(e){

		e.preventDefault();

		var first = $("#first-name").val();
		var middle = $("#middle-name").val();
		var last = $("#last-name").val();
		var passPortNumber = $("#passPort-number").val();
		var country = $("#country").val();
		var gender = $("#list-gender-select option:selected").val();
		var birthDay = $("#Date-Of-Birth").val();
		console.log(birthDay);

		//console.log(first +" "+middle+" "+last+" "+passPortNumber+" "+country)
		$("#first-name").val('');
		$("#middle-name").val('');
		$("#last-name").val('');
		$("#passPort-number").val('');
		$("#country").val('');
		$("#Date-Of-Birth").val('')


		 if ( first === '' || middle === '' || passPortNumber === '' || country === '' || last === '' || birthDay === ""  ) {
		 	  alert("Plase enter Full Informstion ");
		 }
		  else {
		 	for ( var i = 0 ; i < redFlagPassengers.length ; i++ ){
		 		if (passPortNumber === redFlagPassengers[i].passPortNumber && last === redFlagPassengers[i].last ) {
		 			 alert("This person Wanted ");
		 			 return searchRedFalg(passPortNumber,last);

		 		}
		 	}
		 		var passanger = Passenger(first,middle,last,passPortNumber,country,gender,birthDay)
				data.addPassenger(passanger);
				//passngerss.push(data);
		  		console.log(data);
		  		//console.log(redFlagPassengers[0]);
		  		displaySaveInfo();
		 }
		 
		
	 })

	$("body").on("submit","#search-passenger-form",function(e){

		e.preventDefault();
		var passPortNumber = $("#search-passPort-nu").val();
		var last = $("#search-last").val();
		getInfo(passPortNumber,last)
		$("#search-passPort-nu").val('');
		$("#search-last").val('');
	})

	function displaySaveInfo(){
		var info = data.passengers[data.passengers.length - 1]
		var html = '';
	  	var infoDisplay = 
			` <div class="container mx-5" id="displayInfo">
                <div class="row">
                    <div class="col">
                    <label>FullName : </label>
                        <h3>${info.first+" "+info.middle+" "+info.last}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>country : </label>
                        <h3>${info.country}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>gender : </label>
                        <h3>${info.gender}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>birthDay : </label>
                        <h3>${info.birthDay}</h3>
                    </div>
                </div>
            </div>`;
        if(info.first === undefined ) {
        	var infoDisplay = 
			` <div class="container mx-5">
                <div class="row">
                    <div class="col">
                        <h3>${"please enter correct information "}</h3>
                    </div>
                </div>
              <div>`
        }

	  	$("#display").html(infoDisplay)


	}


	function getInfo(passPortNumber,last) {
		var html = '';
	 	var info = data.getPassenger(passPortNumber,last);
	  	console.log(info);
	  	var infoDisplay = 
			` <div class="container mx-5">
                <div class="row">
                    <div class="col">
                    <label>FullName : </label>
                        <h3>${info.first+" "+info.middle+" "+info.last}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>country : </label>
                        <h3>${info.country}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>gender : </label>
                        <h3>${info.gender}</h3>
                    </div>
                </div>
            </div>`;
        if(info.first === undefined ) {
        	var infoDisplay = 
			` <div class="container mx-5">
                <div class="row">
                    <div class="col">
                        <h3>${info}</h3>
                    </div>
                </div>
              <div>`
        }

	  	$("#display").html(infoDisplay)

	}

	// function display(){
		
	// 	for (var i )
	// }	

function searchRedFalg(passPortNumber,last){
	var html = '';
	for (var person in redFlagPassengers){
		if ( passPortNumber === redFlagPassengers[person].passPortNumber && last === redFlagPassengers[person].last )
		{
			var info = redFlagPassengers[person]
	  		console.log(info);
	  		var infoDisplay = 
			` <div class="container mx-5"id="redFlag">
                <div class="row">
                    <div class="col">
                    <label>FullName : </label>
                        <h3>${info.first+" "+info.middle+" "+info.last}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>country : </label>
                        <h3>${info.country}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <label>gender : </label>
                        <h3>${info.gender}</h3>
                    </div>
                </div>
            </div>`;
	  	$("#display").html(infoDisplay)

		}
	}
	 	

}
	// ==================The end of the main.js ==================

})









