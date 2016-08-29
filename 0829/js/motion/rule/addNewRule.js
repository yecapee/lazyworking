$.dataSet([
	function(finish){
		$.amiapi('./testdata/quaryAllDevice.json',{},function(rs){
			dataTemp.device = rs.return_result.device_list;
			finish();
		},{},true);
	},
	function(finish){
		$.amiapi('./js/config/deviceConfig.json',{},function(rs){
			dataTemp.deviceConfig = rs;
			finish();
		},{},true);
	}],
	init
);

function init(){
	$('.-btn').click(function(){
		$.debug.log(55);
	})
};