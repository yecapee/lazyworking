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
		}]
		,init
	);


	function init(){
		$('#deviceList_view').html(deviceListRender(dataTemp.device));
		
	};

	function deviceListRender(data){

		var html = '';

			for(var key in data){

				var htmlTmp = $.tmpPaser('  <li data-obj="{obj}">\
												<div class="locIcon">\
												<i class="fa {icon}" aria-hidden="true"></i>\
												</div>\
													{displayName}\
												<!--<i class="fa fa-circle-o light" aria-hidden="true"></i>-->\
												<i class="fa fa-trash-o icon_del" aria-hidden="true"></i>\
												<i class="fa fa-cog  icon_del device_edit" aria-hidden="true"></i>\
					                		</li>');

					html += htmlTmp({
						obj: dataTemp.db.set(data[key]),
						icon: dataTemp.deviceConfig[getType(data[key].bundle_name)].icon,
						displayName: data[key].display_name
					});

			}

			return html;
	};

	function deviceDetailRender(data){

		var html = '';

		var htmlTmp = $.tmpPaser('  <h4>{displayName}</h4>\
									<p><label>Status</label>{status}</p>\
					                <p><label>BundleName</label>\
						                {bundleName}\
					                </p>\
					               	<p><label>Location</label>\
						                {roomName}\
					                </p>\
					                <p><label>Gateway</label>\
						                {gatewayId}\
					                </p>\
					                <p><label>Polling time(m)</label>\
					               		20\
					               	</p>');

			return  htmlTmp({
				displayName: data.display_name,
				status: data.online,
				bundleName: data.bundle_name,
				roomName: data.room_name,
				gatewayId: data.gateway_id
			});
	};


	$('#deviceList_view').on('click','.device_edit',function(){
		var data = dataTemp.db.get( $(this).parents('li').data('obj') );

			enterDeviceEdit(data);
	    	amios.blockSlideTo('device_edit');
	});

	$('#deviceList_view').on('click','.locIcon',function(){
		var data = dataTemp.db.get( $(this).parents('li').data('obj') );

	    	$('#deviceDetail_view').html( deviceDetailRender( data ) );
	});

})();
