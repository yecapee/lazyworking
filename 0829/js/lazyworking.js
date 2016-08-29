/* lazyworking.js jQuery Plugin - v1.0
 * Copyright ©2015 panpan,Pan
 * 2015-7-29
 */
(function ( $ ) {
	var logtime;
	//var apiurl = "http://172.16.9.96";
	//var apiurl= "http://amivbg.ddns.net";

//-----------------
//tool
//-----------------

	String.prototype.ysplit = function (tool,no){
		var str = this.valueOf().split(tool);
		return str[no];
	}
	
	String.prototype.armatch = function (seach){
		for(var no in seach){
			if( this.valueOf()==seach[no] )
				return true;
		}
		return false;
	}

	String.prototype.armatch_i = function(seach){
		for(var no in seach){
			if( this.valueOf()==no )
				return true;
		}
		return false;
	}


//----ajax----------

	if( !$.amiapi ) {

			$.amiapi = function (_action,_datas,_func,ajax_set,domain) {	

			//var thisfunc= arguments.callee; //存自己
			//var thisvar= arguments; //存自己變數
			//var apidomain= "http://localhost:8080/";

			
			//var DEFOR_URL = "http://amivbg.ddns.net:8083/";
			var DEFOR_URL = "http://192.168.99.106:8083/";
			var HOST_NAME = "localhost";

			var apidomain,apiurl;

			// if( location.hostname === HOST_NAME){
			// 	apidomain =  DEFOR_URL;
			// 	apiurl =  DEFOR_URL+"/DmsServerWeb/";
			// }else{
				apidomain =  'http://'+location.host;
				apiurl =  'http://'+location.host+"/DmsServerWeb/";					
			//}

			//console.log(apidomain,apiurl);
			//var apidomain = "http://amivbg.ddns.net:8083/";
			//var apiurl = "http://amivbg.ddns.net:8083/DmsServerWeb/";
			//var apiurl= "http://localhost:8080/DmsServerWeb/";
			//var apiurl= "http://172.16.9.96:8083/DmsServerWeb/";
			//var apiurl= "http://192.168.0.88:8083/DmsServerWeb/";

			var def_set = { 
				//type:'POST',
				type:'GET',
				url:(function(){
					if( domain )
						return apidomain+_action
					else
						return apiurl+_action
				})(),
				async:true, //預設為非同步
				//data:{data:JSON.stringify(datas),action:_action,sid:localStorage.getItem('jixwqhue')},
				data:_datas,
				dataType: 'json', 
				//ifModified:true, 
				success:function( data ){

						// var date = new Date(),
						// 	minutes = 60*24*30;
						// date.setTime(date.getTime() + ( minutes * 60 * 1000 ));
										
						// $.cookie("@#$%^&", $.cookie("@#$%^&")
						// 	,{ expires: date}
						//  );
						 _func(data);

						//console.log( data );
						 // if( logtime ){
						 // 	logtime = logout( minutes,'#logout-time',logtime );
						 // }else{
						 // 	logtime = logout( minutes,'#logout-time' );
						 // }
						 
				},
				//beforeSend:loading,
				//complete:desloading,
				error: function(req){
					 alertRedMsg(  '#error','<strong> :( </strong> There is something wrong!!' );
					 desloading();
				}
			};

			if( ajax_set ){

				for(key in ajax_set){
					def_set[key]=ajax_set[key];
				}

			}

			$.ajax(def_set);
		}
	};

	if( !$.j2h ) {
		$.j2h = function(str){
		    return String(str)
		            .replace(/&/g, '&amp;')
		            .replace(/"/g, '&quot;')
		            .replace(/'/g, '&#39;')
		            .replace(/</g, '&lt;')
		            .replace(/>/g, '&gt;');
		}
	}

	if( !$.h2j ) {
		$.h2j = function(str){
		    return String(value)
			        .replace(/&quot;/g, '"')
			        .replace(/&#39;/g, "'")
			        .replace(/&lt;/g, '<')
			        .replace(/&gt;/g, '>')
			        .replace(/&amp;/g, '&');
		}
	}

	if( !$.dataSet ) {
		$.dataSet = function(fnArr,rs){
			var finishCount = 0;
			var finish = function(){
					finishCount++;
					if( finishCount == fnArr.length )
					rs();
				};

				for(var key in fnArr){
					fnArr[key](finish);
				}
		};
	}

	if( !$.debug ) {
		var debug = function (){
				this.state = true;
			};

			debug.prototype = {
				set:function(val){
					this.state = val;
				},
				log:function(val){
					if(this.state)
						console.log(val);
				}
			};

		$.debug = new debug();
	}

}( jQuery ));

//------class------


function lostconnect(){
    $.get( "online.json").fail(function() {
        $('#notfind').removeClass('hide');
    })
}
        
function pageDb(){
	this.data={};
	this.set = function( _data ){
					var address = Math.random()+':'+Math.random();
						this.data[ address ] = _data;
						return address;
	};

	this.get = function( _address ){
			return this.data[ _address ];
	};
}

function memo( _data ){
	this.obj={};
	if( _data ) this.obj = _data;

	this.saveObj=function( _data ){ this.obj = _data };
	this.getObj=function(){ return this.obj };
}
	
function GetData( _data ){
	var data=_data;

	this.get=function( _val ){ 

		if( _val ) {
			var datapos = _val.split(" ");
			var r_data=_data;
			for(var key in datapos){
				r_data=r_data[ datapos[key] ];
			}
			return typeof r_data == "object" ? new Object(r_data) : r_data;
		}

		return typeof data == "object" ?  new Object(data) : data;
	};

	this.set=function( _val,_sval ){ 
		if( _val ) {
			var datapos = _val.split(' ');
			var r_data=data;

				if( datapos.length==1 ){
					r_data[ datapos[0] ]=_sval;
				}else{
					for( var i=0; i<datapos.length-1; i++){
					if( typeof r_data[ datapos[i] ] == "undefined" ) r_data[ datapos[i] ]={};
					r_data=r_data[ datapos[i] ];

					if( i==datapos.length-2 ) r_data[ datapos[i+1] ]=_sval;
				}
			}
		}
	};

	this.list=function(){ console.log( data ) };
}

function Page(){

	this.list;
	this.pagear=[];

	this.setList=function(_length){ this.list=_length };

	this.setPagear=function(e){
		this.pagear=[];
		var pagelen = parseInt( this.list / e );
		var lastpage = this.list % e;
		for( var i = 1;i <= pagelen ; i++){
			this.pagear[i]={str:(i-1)*e+1,fin:i*e};
		}
		if( lastpage != 0 ) this.pagear[pagelen+1]={str:pagelen*e+1,fin:pagelen*e+lastpage};
	};

	this.getPage=function(e){
		return this.pagear[e];
	}

	this.getlen=function(){
		return this.pagear.length-1;
	}

}

function PageMark( _len,_split ){	
	var len=_len;
	var split=_split;

	this.getMark=function( _now ){
		var add_h = Math.floor( split/2 );
		var mark = {};
		mark.str = _now-add_h < 1 ? 1 : _now-add_h;
		mark.fin = mark.str+(_split-1) > _len ? _len : mark.str+(_split-1);
		mark.str = mark.str - ( _split-(mark.fin-mark.str+1) ) < 1? 1 : mark.str - ( _split-(mark.fin-mark.str+1) );
		return new Object(mark);
	}
}

function ChkObj(){
	this.rule = {},
	this.data = {},
	this.setRule = {},
	this.autoVer = function( _dataObj ){
						for(var key in _dataObj){
							if( this.setRule[ key ] ){
							 this.data[key] = _dataObj[key];
							 this.rule[key] = this.setRule[key]( _dataObj[key] );
							} 
						}
						//console.log( this );
					},
	this.type = function(){
					var result = true;
					for(var key in this.rule){
						result = result&&this.rule[ key ];
					}
					return result;
				},
	this.binding = function( data ){
					for(var key in data){
						if( this[key] ) this[key] = data[key];
					}
				};
}

//---create obj function------ 

function ChkobjBinding( _chkobj,_val,_fn ){
	var prototype = {
			rule:{},
			data:{},
			setRule:{},
			autoVer:function( _dataObj ){
				for(var key in _dataObj){
					if( this.setRule[ key ] ){
					 this.data[key] = _dataObj[key];
					 this.rule[key] = this.setRule[key]( _dataObj[key] );
					} 
				}
				//console.log( this );
			},
			type:function(){
				var result = true;
				for(var key in this.rule){
					result = result&&this.rule[ key ];
				}
				return result;
			}
		};

	if( !this[ _chkobj ] ) this[ _chkobj ] = new Object( prototype );

	this[ _chkobj ].rule[ _val ] = false;
	this[ _chkobj ].data[ _val ] = null;
	this[ _chkobj ].setRule[ _val ] = _fn;

	//console.log( this[ _chkobj ] );
}

//---tool function-----
function logout( val,id,countdownid ){
	//$(document).ready(function(){

		//console.log( val,id );
		if( countdownid ) clearInterval(countdownid);

		var countdownnumber = val*60;
		var countdownid,x;
		var timeformat = function( val ){
			return Math.floor( countdownnumber/60 )+':'+countdownnumber%60;
		};

		var initial = function(){
		  //x=document.getElementById(id);
		  $(id).html( timeformat(countdownnumber) );
		  countdownnumber--;
		  countdownid = window.setInterval(countdownfunc,1000);
		};

		var countdownfunc = function(){ 
		  $(id).html( timeformat(countdownnumber) );
		  if (countdownnumber==0){
		    //alert("倒數結束");
		    //clearInterval(countdownid);
		  }
		  countdownnumber--;
		};

		initial();
		return countdownid;
	//});
}

function repqm(_val){
	return _val.replace(/'/g,"\'");
}

function loading(){
	var	sX = $(window).width()+17,
		sY = $(window).height();
	$('<div id=\"maskbg\"><div class="loading">Loading...</div></div>').css({
    		"display":"block",
    		"width":sX,
    		"height":sY,
    		"bottom":0,
    		"position":"fixed",
    		"z-index":1031,
    		"background-color":"rgba(16, 16, 16,0.55)",
    		"opacity": 0
    }).appendTo('body').stop().animate({opacity: 1},'fast');
}

function desloading(){
	$('#maskbg').remove();
}

function mask_call( obj,fn ){
	var	sX = $(window).width()+17;
		sY = $(window).height();

	 $('<div id=\"maskbg\"></div>').css({
    		"display":"block",
    		"width":sX,
    		"height":sY,
    		"bottom":0,
    		"position":"fixed",
    		"z-index":1031,
    		"background-color":"rgba(16, 16, 16,0.65)",
    		"opacity": 0
    }).appendTo('body').stop().animate({opacity: 1},'fast');

	if( obj ){
		var objH =$(obj).height();
		var objW =$(obj).width();
	    $(obj).css({
				//"width": canvasW +"px",
				//"height": objH +"px",
				"position":"fixed",
				"top":( sY-objH )/2,
				"left":( sX-objW )/2,
				"z-index":1032
		});

		$(obj).fadeIn('fast',fn);
	}


}

function mask_remove(fn){
	$('#maskbg').remove();
	if( typeof fn === "function") fn();
	//$('#maskbg').stop().animate({opacity: 0},100,function(){  });
}

function al_call( _obj ){

	this.content={
		width:'800',
		title:'title',
		body:'body',
		btn:[{ text:'確定',fn:function(){} }]
	}

	if( typeof _obj === "object" ){
		for(var key in this.content){
			if( _obj[key] ) this.content[key]=_obj[key];
		}
	}

	// var html='';
	// 	html+='<div class="faqppup" style="width:400px">';
	// 	html+='<h1>'+this.content.title+'</h1>';
	// 	html+='<h2>'+this.content.body+'</h2><h3>';
	// 	for(var key in this.content.btn){
	// 		html+='<button class="faqbackbtn pupbutton" id="btn'+key+'">'+this.content.btn[key].text+'</button>';
	// 	}
	// 	html+='</h3></div>';

	var html = '';
		html += '<div class="panel panel-red faqppup" style="width:400px">';
	    html += '<div class="panel-heading">';
	    html += '<h3 class="panel-title">'+this.content.title+'</h3>';
	    html += '</div>';
	    html += '<div class="panel-body">';
	    html += '<p>'+this.content.body+'</p>';
	    for(var key in this.content.btn){
	 		html+='<button  type="button" style="float:right" class="btn btn-default margin-right-5px" id="btn'+key+'">'+this.content.btn[key].text+'</button>';
		 	}
	    html += '</div>';
	    html += '</div>';

//-----
	this.show=function(){
		if( $('div.faqppup').length == 0 ){
		 	$('body').prepend( html );
		}

		//mask('.faqppup',this.content.width,'auto');
		mask_call('.faqppup');
		for(var key in this.content.btn){

			var fn = this.content.btn[key].fn;

			$('#btn'+key).click((function(){
				var _fn = fn;
				return function(){
					//console.log( _fn );
					if(typeof _fn === "function") _fn();
					mask_remove();
					$('div.faqppup').remove();
				}
			})());
		}
	}

};


//-----function-------------

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
	
function objlength( _obj ){
	var i=0;
	for(var key in _obj){　i++;　}
	return i;
}

function deRetVal( _data ){
	var data;

	try{
		if( _data[0].retVal ){
			data = _data[0].retVal;
			data = arguments.callee( data );	
			return data;
		}	
	}catch(e){
			return  _data;
	}

	return  _data;
}

//JSON.parse( $(this).data('dataobj').replace(/\'/g,'"') )
//JSON.stringify( _data ).replace(/\"/g,"'")

function j2html( data ){
	return JSON.stringify( data ).replace(/\"/g,"'");
	//return JSON.stringify( data );
}

function html2j( data ){
	return JSON.parse( data.replace(/\'/g,'"') );
	//return JSON.parse( data );
}

function j2html_( data ){
	return JSON.stringify( data );
	//return JSON.stringify( data );
}

function html2j_( data ){
	return JSON.parse( data );
	//return JSON.parse( data );
}

function d2u( _urlname,_data ){
	var str='';
	for( var key in _data){
		str += '&'+_urlname+'='+_data[key];
	}
	return str;
}

function errorCode( _no ) {

	// SUCCESS(0, "Success"),
	// GLOBAL_INVALID_PARAMETER(-1, "Invalid parameter.")
	// GLOBAL_INVALID_INTENT(-2, "Invalid intent or wrong parameter."),

	// ROOM_ERROR_DUPLICATE_ROOM_NAME(-20, "Add a room failed due to duplicate room name."), 
	// ROOM_ERROR_CAN_NOT_FIND_A_ROOM(-21, "Can not find a room."),
	// ROOM_ERROR_ROOM_DELETE_FAILED(-22, "Room delete failed."),
	// ROOM_ERROR_CANNOT_FIND_A_ROOM(-23, "Can't find a room."),

	// GATEWAY_ERROR_ADD_NEW_GATEWAY_FAILED(-31, "Add new gateway failed."),
	// GATEWAY_ERROR_ADD_NEW_GATEWAY_FAILED_ROOM_EMPTY(-32, "Add new gateway failed due to room is empty."),
	// GATEWAY_ERROR_ADD_NEW_GATEWAY_FAILED_SAME_GATEWAY_NAME(-33, "Add new gateway failed due to gateway name can't be the same in a room."), 
	// GATEWAY_ERROR_NO_GATEWAY_IN_ROOM(-34, "No gateway in room."),
	// GATEWAY_ERROR_THE_SAME_GATEWAY_NAME_IN_ROOM(-35, "The same gateway name shown in a room."),
	// GATEWAY_ERROR_CANNOT_FIND_A_GATEWAY(-36, "Can't find a gateway."),

	// DEVECE_ERROR_INSTALL_OSGI_BUNDLE_FAIL(-40, "Device driver installation fail."),
	// DEVECE_ERROR_NO_SUCH_DEVICE(-41, "No such device."),
	// DEVICE_ERROR_NO_DEVICE_IN_GATEWAY(-42, "No device in gateway."),
	// DEVICE_ERROR_UPDATE_DEVICE_FAIL(-43, "Update device fail."),
	// DEVICE_ERROR_THE_SAME_DEVICE_NAME_IN_GATEWAY(-44, "The same device name shawn in a gateway."),
	// DEVECE_ERROR_UNINSTALL_OSGI_BUNDLE_FAIL(-45, "Device driver uninstallation fail.")

	

	// DEVECE_ERROR_UNINSTALL_OSGI_BUNDLE_FAIL(-45, "Device driver uninstallation fail."),
	// DEVECE_ERROR_CANNOT_FIND_ANY_DEVICE_IN_ROOM(-46, "Cannot find any device in this room."),
	// DEVECE_ERROR_NO_DEVICE(-47, "No device."),

	// Scene

	// SCENE_MODE_ERROR_ADD_NEW_SCENE_MODE_FAIL(-60, "Add new scene mode fail."),
	// SCENE_MODE_ERROR_NO_SUCH_SCENE_MODE(-61, "no such scene mode."),
	// SCENE_MODE_ERROR_SCENE_NAME_IS_EXIST(-62, "scene name is exist."),


	// Sensor status

	// SENSOR_STATUS_ERROE_JSON_GET_NULL(-70, "Json get null."),
	// SENSOR_STATUS_ERROR_DEVICE_NOT_FOUND(-71, "device not found."),
	// SENSOR_STATUS_ERROR_WEB_CONTROL_PANEL_COMMAND_ERROR(-72, "command error."),

	// RULE_ENGINE_ERROR_RULE_NAME_IS_EXIST(-82, "rule name is exist.”),

	var errorCode={};
	errorCode['-1']='Invalid parameter.';
	errorCode['-2']='Invalid intent or wrong parameter.';

	errorCode['-20']='Add a room failed due to duplicate room name.';
	errorCode['-21']='Can not find a room.';
	errorCode['-22']='Room delete failed.';
	errorCode['-23']='Can\'t find a room.';

	errorCode['-31']='Add new gateway failed.';
	errorCode['-32']='Add new gateway failed due to room is empty.';
	errorCode['-33']='Add new gateway failed due to gateway name can\'t be the same in a room.';
	errorCode['-34']='No gateway in room.';
	errorCode['-35']='The same gateway name shown in a room.';
	errorCode['-36']='Can\'t find a gateway.';
	
	errorCode['-40']='Device driver installation fail.';
	errorCode['-41']='No such device.';
	errorCode['-42']='No device in gateway.';
	errorCode['-43']='Update device fail.';
	errorCode['-44']='The same device name shawn in a gateway.';
	errorCode['-45']='Device driver uninstallation fail.';

	errorCode['-46']='Cannot find any device in this room.';
	errorCode['-47']='No device.';

	errorCode['-60']='Add new scene mode fail.';
	errorCode['-61']='No such scene mode.';
	errorCode['-62']='Scene name is exist.';

	errorCode['-70']='Json get null.';
	errorCode['-71']='Device not found.';
	errorCode['-72']='Command error.';

	errorCode['-80']='Add new rule fail.';
	errorCode['-82']='Rule name is exist.';
	errorCode['-83']='Set rule enable fail.';
	errorCode['-84']='Initialize rule DmsRuleName fail';
	errorCode['-87']='Script is empty.';
	 //No such service.

	errorCode['-91']='Rfidno or staffID is exist.';
	errorCode['-92']='No such member id.';
	errorCode['-93']='No such bundle.';
	errorCode['-94']='No such rfidno.';
	errorCode['-95']='Member list is empty.';

	return errorCode[_no];
}

function susMsg( _dom,_msg ){

	var html = "";
	    html += '<div class="alert alert-success" >';
	    html += '<strong></strong>'+_msg;
	    //html += _msg;
		html += '</div>';

    if( $(_dom).find( ".alert-success" ).length > 0  ){
		$(_dom).html( html );
	}else{
		$(_dom).append( html ).find('.alert-success:last-child').hide();
	}

    $(_dom).find('.alert-success:last-child').show('fast',function(){ 
    		var thisDom = $(this);
    	    setTimeout(function(){
				 thisDom.stop().hide('slow',function(){
				 	$(this).remove();
				 })
				 //thisDom.remove();
				//console.log($(this));
    		}, 5000);
	});
};

function alertMsg( _dom,_msg ){

	var html = "";
	    html += '<div class="alert alert-warning" id="error">';
	    html += '<strong>Warning! </strong>'+_msg;
		html += '</div>';

    if( $(_dom).find( ".alert-warning" ).length > 0  ){
		$(_dom).html( html );
	}else{
		$(_dom).append( html ).find('.alert-warning:last-child').hide();
	}

    $(_dom).find('.alert-warning:last-child').show('fast',function(){ 
    		var thisDom = $(this);
    	    setTimeout(function(){
				 thisDom.stop().hide('slow',function(){
				 	$(this).remove();
				 })
				 //thisDom.remove();
				//console.log($(this));
    		}, 5000);
	});

};

function alertRedMsg( _dom,_msg ){

	var html = "";
	    html += '<div class="alert alert-danger" id="error">';
	    html += _msg;
		html += '</div>';

    if( $(_dom).find( ".alert-danger" ).length > 0  ){
		$(_dom).html( html );
	}else{
		$(_dom).append( html ).find('.alert-danger:last-child').hide();
	}

    $(_dom).find('.alert-danger:last-child').show('fast',function(){ 
    		var thisDom = $(this);
    	    setTimeout(function(){
				 thisDom.stop().hide('slow',function(){
				 	$(this).remove();
				 })
				 //thisDom.remove();
				//console.log($(this));
    		}, 5000);
	});

};

// function susMsg( _dom,_msg ){

// 	var html = "";
// 	    html += '<div class="alert alert-success" >';
// 	    html += '<strong>Well done! </strong>'+_msg;
// 	    //html += _msg;
// 		html += '</div>';

//     $(_dom).stop().hide().html( html );

//     $(_dom).show('fast',function(){ 
//     	    setTimeout(function(){
// 				$(_dom).stop().hide('slow') 
//     		}, 1200);
// 	});

// };

// function alertMsg( _dom,_msg ){

// 	var html = "";
// 	    html += '<div class="alert alert-warning" id="error">';
// 	    html += '<strong>Warning! </strong>'+_msg;
// 		html += '</div>';

//     $(_dom).stop().hide().html( html );

//     $(_dom).show('fast',function(){ 
//     	    setTimeout(function(){
// 				$(_dom).stop().hide('slow') 
//     		}, 1200);
// 	});

// };

// function alertRedMsg( _dom,_msg ){

// 	var html = "";
// 	    html += '<div class="alert alert-danger" id="error">';
// 	    html += _msg;
// 		html += '</div>';

//     $(_dom).stop().hide().html( html );

//     $(_dom).show('fast',function(){ 
//     	    setTimeout(function(){
// 				$(_dom).stop().hide('slow') 
//     		}, 1200);
// 	});

// };



