

(function( $ ) {

	'use strict';

	var datatableInit = function() {

		$('#datatable-default').dataTable({
                    "language": {
                        "url":"//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                    }
                
                });
                
               
        
        }
    } );
} );

	};

	$(function() {
		datatableInit();
	});

}).apply( this, [ jQuery ]);