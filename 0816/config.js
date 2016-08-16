var config = {

	power:{
		location:{
			locationList:1,
			addNewLocation:1,
			addNewGateways:1,
			addNewDevice:1
		},
		account:{
			accountList:1,
			createNewAccount:1,
			changeMyPassword:1,
			roleOfRightsManagement:1
		},
		monitor:{
			deviceRepair:1,
			deviceRepairList:1,
			appErrorLog:1,
			logingLog:1
		},
		system:{
			about:1
		},
		chart:{
			chart:1,
			report:1
		},
		rule:{
			ruleList:1,
			addNewRule:1
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