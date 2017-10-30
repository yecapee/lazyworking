/* lazyworking.js jQuery Plugin - v2.0
 * Copyright ©2015 YecaPee
 * 2015-7-29
 */
(function ( $ ) {

//-----------------
//tool
//-----------------

	String.prototype.ysplit=function (tool,no){
		var str = this.valueOf().split(tool);
		return str[no];
	}
	
	String.prototype.armatch=function (seach){
		for(var no in seach){
			if( this.valueOf()==seach[no] )
				return true;
		}
		return false;
	}

	String.prototype.armatch_i=function(seach){
		for(var no in seach){
			if( this.valueOf()==no )
				return true;
		}
		return false;
	}

//----ajax----------

	if( !$.yJson ) {

			$.yJson=function (_action,datas,_sid,func,ajax_set) {

			var apiurl= "http://10.0.0.36/web/useAPI/";

			var def_set={ type:'POST',
				url:apiurl,
				async:true, //預設為非同步
				data:{data:JSON.stringify(datas),action:_action,sid:_sid},
				dataType: 'json', 
				success: func,
				error: function(req){}
			};

			if( ajax_set ){

				for(key in ajax_set){
					def_set[key]=ajax_set[key];
				}

			}

			$.ajax(def_set);
		}
	};

	if( !$.sid ){
		$.sid=function(){
				var xxx=null;
				$.lJson('','','',
						{
							async:false,
							data:{ data: '['+JSON.stringify({account:"1qaz2wsx",passwd:"89798198"}) +']'},
							url:'http://10.0.0.36/web/login',
							success:function(data){ xxx=data[0].retVal.sid }
						}
					)
				localStorage.setItem("jixwqhue", xxx);
				//return xxx;
			}
	}

	if( !$.getUrlVars ) {
		$.getUrlVars=function(){
								    var vars = [], hash;
								    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
								    for(var i = 0; i < hashes.length; i++)
								    {
								        hash = hashes[i].split('=');
								        vars.push(hash[0]);
								        vars[hash[0]] = hash[1];
								    }
								    return vars;
								}							
	}

	if( !$.lJson ) {

			$.lJson=function (_action,datas,_func,ajax_set) {	

			var thisfunc= arguments.callee;//存自己
			var thisvar= arguments; //存自己變數

			var apiurl= "http://10.0.0.36/web/useAPI/";

			var def_set={ type:'POST',
				url:apiurl,
				async:true, //預設為非同步
				data:{data:JSON.stringify(datas),action:_action,sid:localStorage.getItem('jixwqhue')},
				dataType: 'json', 
				success: function(data){
					var sidtype=false;

					try{ 
						if( data[0].retVal.match("sid") ) sidtype=true; 
					} catch(e){ };

					if( sidtype )  {
						$.sid();
						thisfunc.apply(thisfunc,thisvar);
						return;
					}

					if( _func ) _func(data);
				},
				error: function(req){}
			};

			if( ajax_set ){

				for(key in ajax_set){
					def_set[key]=ajax_set[key];
				}

			}

			$.ajax(def_set);
		}
	};

}( jQuery ));

//------class------
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

//-----function-------------

function objlength( _obj ){
	var i=0;
	for(var key in _obj){　i++;　}
	return i;
}

function sid(){
	var xxx=null;
	$.lJson('','','',
			{
				async:false,
				data:{ data: '['+JSON.stringify({account:"1qaz2wsx",passwd:"89798198"}) +']'},
				url:'http://10.0.0.36/web/login',
				success:function(data){ xxx=data[0].retVal.sid }
			}
		)
	localStorage.setItem("jixwqhue", xxx);
	return xxx;
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

function getMapsize(){
	var map={};
	map.width=$(window).width()/2;
	map.height= parseInt($(window).width()/2/1.3333333);

	if($(window).width()<779){

		map.width=$(window).width();
		map.height=$(window).height()/2;

	}
	return map;
}





