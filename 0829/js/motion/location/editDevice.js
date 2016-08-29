function enterDeviceEdit (data) {
	$('#deviceEdit_view').html( deviceEditRender(data) );
}


function deviceEditRender (data){
	var html = '';
		html 	+= 	'<h2>'
                +	'<div class="_deviceIcon back"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>'
                +	'<input type="text" placeholder="" value="'+$.j2h(data.display_name)+'">'
                +	'</h2>'
                +	'<label>Icon</label>'
                +	'<div class="mapImg hover"><i class="fa '+dataTemp.deviceConfig[data.type].icon+'" aria-hidden="true"></i></div>'
                +	'<p><label>Gateway</label>'
                +	'<select>'
                +	'<option  selected>Gateway 1</option>'
                +	'</select>'
                +	'</p>'
                +	'<p><label>Polling time(m)</label>'
                +	'<input placeholder="0-20" value="20">'
                +	'</p>'
                +	'<div>'
                +	'<div class="-btn def mr-b-50px">SAVE</div>'
                +	'<div class="-btn def mr-b-50px">CANCEL</div>'
                +	'</div>';

	return html;
}


