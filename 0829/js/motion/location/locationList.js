
$.dataSet([
	function(finish){
		$.amiapi('/testdata/quaryAllDevice.json',{},function(rs){
			dataTemp.device = rs.return_result.device_list;
			finish();
		},{},true);
	},
	function(finish){
		$.amiapi('/js/config/deviceConfig.json',{},function(rs){
			dataTemp.deviceConfig = rs;
			finish();
		},{},true);
	}]
	,init
);


function init(){
	$('#deviceList_view').html(deviceListRender(dataTemp.device));
};

function deviceListRender(data){
	var html = '';

		for(var key in data){

			html	+= 	'<li data-val="'
					+	dataTemp.db.set(data[key])
					+	'"><div class="locIcon"><i class="fa '
                	+	dataTemp.deviceConfig[data[key].type].icon
                	+	'" aria-hidden="true"></i></div> '
                	+	data[key].display_name
                	//+	'<i class="fa fa-circle-o light" aria-hidden="true"></i>'
                	+	'<i class="fa fa-trash-o icon_del" aria-hidden="true"></i>' 
                	+	'<i class="fa fa-cog  icon_del device_edit" aria-hidden="true"></i>'
                	+	'</li>';

		}

		return html;
};

function deviceDetailRender(data){

	var html = '';

		html	+=	'<h4>'+data.display_name+'</h4>'                
                +   '<p><label>Status</label>'+data.online+'</p>'
                +   '<p><label>BundleName</label>'
                +   data.bundle_name
                +   '</p>'
                +   '<p><label>Location</label>'
                +   data.room_name
                +   '</p>'
                +   '<p><label>Gateway</label>'
                +   data.gateway_id
                +   '</p>'
                +   '<p><label>Polling time(m)</label>'
                +   '20'
                +   '</p>';

		return html;
};


$('#deviceList_view').on('click','.device_edit',function(){
	var data = dataTemp.db.get( $(this).parents('li').data('val') );

		enterDeviceEdit(data);
    	amios.blockSlideTo('device_edit');
});

$('#deviceList_view').on('click','.locIcon',function(){
	var data = dataTemp.db.get( $(this).parents('li').data('val') );

    	$('#deviceDetail_view').html( deviceDetailRender( data ) );
});
