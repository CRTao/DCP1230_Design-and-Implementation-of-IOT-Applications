 $(function(){
		set_endpoint('http://140.113.199.198:9992');
		
		var r=0;
		var g=0;
		var b=0;
		var lum = 100;

		var profile = {
			'dm_name': 'Bulb',          
			//'idf_list':['None',['None']],
			'odf_list':[[Color_O,['None']],[Luminance,[100]]],			
		};
		
		function Color_O(data){
			
			r=data[0];
			g=data[1];
			b=data[2];
			draw();
			
		}
		
		function Luminance(data){
			
			lum = data[0]
			draw();

		}
		
		function draw () {
			var rr = Math.floor((r * lum) / 100);
			var gg = Math.floor((g * lum) / 100);
			var bb = Math.floor((b * lum) / 100);
			$('.bulb-top, .bulb-middle-1, .bulb-middle-2, .bulb-middle-3, .bulb-bottom, .night').css(
				{'background': 'rgb('+ rr +', '+ gg +', '+ bb +')'}
			);
		}

	


/*******************************************************************/                
		function ida_init(){console.log('Success.');}
		var ida = {
			'ida_init': ida_init,
		}; 
		dai(profile,ida);     
});

