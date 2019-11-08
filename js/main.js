
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

		//console.log(first +" "+middle+" "+last+" "+passPortNumber+" "+country)
		$("#first-name").val('');
		$("#middle-name").val('');
		$("#last-name").val('');
		$("#passPort-number").val('');
		 $("#country").val('');

		 if ( first === '' || middle === '' || passPortNumber === '' || country === '' ) {
		 	  alert("Plase enter Full Informstion ");
		 }else{

		var passanger = Passenger(first,middle,last,passPortNumber,country,gender)
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

		// if (data.passengers.length === 0) {

		// 	alert("please enter the info")


		// }

		var info = data.passengers[data.passengers.length - 1]
		var html = '';
	  	var infoDisplay = 
			` <div class="container mx-5">
                <div class="row">
                    <div class="col">
                    <label>FullName : </label>
                        <h3>${info.name+" "+info.middle+" "+info.last}</h3>
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
        if(info.name === undefined ) {
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
                        <h3>${info.name+" "+info.middle+" "+info.last}</h3>
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
        if(info.name === undefined ) {
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


	// The end of the main.js 

})





