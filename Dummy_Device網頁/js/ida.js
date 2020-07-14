 $(function(){
        csmapi.set_endpoint ('http://140.113.199.205:9999');
        var profile = {
		    'dm_name': 'DD_0516320',          
			'idf_list':[DD_0516320I],
			'odf_list':[DD_0516320O],			
        };
		
        function DD_0516320O(data){
            $('.ODF_value')[0].innerText=data[0];
        }
        
		function DD_0516320I(){
			
		}
/*******************************************************************/                
        function ida_init(){}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
