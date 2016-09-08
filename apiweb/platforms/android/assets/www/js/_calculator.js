
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent();
    },

    receivedEvent: function() {

		var _calculator = new calculator();
			_calculator.compute();

		$('.-btn').click(function() {
			navigator.vibrate(20);

		  	if( $('#val').html() == 0 ){

		  		$('#val').html( 
		  			_calculator.valChk( $(this).data('val').toString() )
		  		);

		  	}else{

		  		$('#val').html(  
		  			_calculator.valChk( $('#val').html()+$(this).data('val') )
		  		);	
		  	};

		});

		$('#computer').click(function() {
					navigator.vibrate(15);
					_calculator.compute().
					then(function(rs){
						$('#val').html(rs);
					});
		});

		$('#c').click(function() {
					navigator.vibrate(15);
					_calculator.c().
					then(function(rs){
						$('#val').html(rs);
					});
		});

		$('#del').click(function() {
					navigator.vibrate(15);
					_calculator.del().
					then(function(rs){
						$('#val').html(rs);
					});
		});

		$('#load').animate({opacity: 0},800,function(){
    		document.getElementById('load').parentNode.removeChild(
				document.getElementById('load')
			);		
    	});
    }

};

app.initialize();



