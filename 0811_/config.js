var config = {

	power:{
		location:{
			locationList:0,
			addNewLocation:0,
			addNewGeteways:0,
			addNewDevice:0
		},
		account:{
			accountList:0,
			createNewAccount:0,
			changeMyPassword:0,
			roleOfRightsManagement:0
		},
		monitor:{
			deviceRepair:1,
			deviceRepairList:1,
			appErrorLog:0,
			logingLog:0
		},
		system:{
			about:1
		},
		chart:{
			chart:0,
			report:0
		},
		rule:{
			ruleList:0,
			addNewRule:0
		}
	}

};

function powerSet () {

	var path = location.pathname.match(/\/(.*).html/)[1];
	var source = config.power[path];

	for(var key in source){
		$('.'+key).each(function(){
			if( source[key] === 1) 
			$(this).removeClass('hide');
		});
	};

};

powerSet();