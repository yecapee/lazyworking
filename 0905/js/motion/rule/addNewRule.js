(function(){

	$.dataSet([
		function(finish){
			$.get('./testdata/quaryAllDevice.json',function(rs){
				dataTemp.device = rs.return_result.device_list;
				finish();
			});
		},
		function(finish){
			$.get('./js/config/deviceConfig.json',function(rs){
				dataTemp.deviceConfig = rs;
				finish();
			});
		}],
		init
	);

	function init(){
		$('#addNewRule_condition_list_view').html(
			conditionListRender(dataTemp.device)
		);
		$('#addNewRule_action_list_view').html(
			actionListRender(dataTemp.device)
		);
	};



	function conditionListRender(data){
		var html = '';

			for(var key in data){
				if( dataTemp.deviceConfig[ data[key].type ].type === "Condition" ){
					
	   				var htmlTemp = $.tmpPaser(' <li data-obj="{obj}">\
							                		<div class="deviceIcon">\
							                			<i class="fa {icon} aria-hidden="true"></i>\
							                		</div>\
							                    	{displayName}\
							                    </li>');

		            	html += htmlTemp({
			            			obj: dataTemp.db.set(data[key]),
			            			icon: dataTemp.deviceConfig[ data[key].type ].icon,
			            			displayName: data[key].display_name
		            	});
				}
			}

		return html;
	}

	function actionListRender(data){
		var html = '';

			for(var key in data){
				if( dataTemp.deviceConfig[ data[key].type ].type === "Action" ){

					var htmlTemp = $.tmpPaser(' <li data-obj="{obj}">\
							                		<div class="deviceIcon">\
							                			<i class="fa {icon} aria-hidden="true"></i>\
							                		</div>\
							                    	{displayName}\
							                    </li>');

		            	html += htmlTemp({
			            			obj: dataTemp.db.set(data[key]),
			            			icon: dataTemp.deviceConfig[ data[key].type ].icon,
			            			displayName: data[key].display_name
		            	});
	            }
			}

		return html;
	}

})();