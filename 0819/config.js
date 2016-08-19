var config = {

	power:{
		location:{
			locationList:1,
			groupSeting:1,
			addNewLocation:1,
			addNewGateways:1,
			addNewDevice:1
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
			about:0
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

	var path = location.href.match(/(http\:\/\/(.*)\/)(.*)\.html/)[3];

	var source = config.power[path];

	for(var key in source){
		$('.'+key).each(function(){
			if( source[key] === 1) 
			$(this).removeClass('hide');
		});
	};

};

powerSet();


