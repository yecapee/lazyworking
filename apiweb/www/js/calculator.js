var calculator = function () {
	var _this = this;

		this.val = 0;

		this.valChk = function(data){

			this.val = data.replace(/e(\+|\-)\d+\./g,function(full){
				return full.match(/e(\+|\-)\d+/g);
			});

			this.val = this.val.replace(/^[\*\+\/]/,'0');

			this.val = this.val.replace(/[\*\-\+\/][\*\-\+\/]+/g,function(full){
				return full.match(/[\*\-\+\/]$/);
			});

			this.val = this.val.replace(/\.\d*\./g,function(full){
				return full.match(/\.\d*/);
			});

			return this.val === '' ? 0 : this.val;
		};

		this.compute = function(){

			this.val = math.format( math.eval( this.val ) );
			return new Promise(function(resolve){
				resolve( _this.val );
			});

		};

		this.c = function(){
			this.val = 0;
			return new Promise(function(resolve){
				resolve( _this.val );
			});
		};

		this.del = function(){
			this.val = this.val.slice(0,-1);
			if( this.val == '' ) this.val = '0';
			return new Promise(function(resolve){
				resolve( _this.val );
			});
		};
};
