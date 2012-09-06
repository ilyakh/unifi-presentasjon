$(document).ready(function() {
	/* initializing fathom */
	var fathom = new Fathom('#presentation');
	
	/* initializing timer */
	$(".time").countdown(
		{ since: new Date(), compact: true, format: "MS" }
	);
	
	
	var timerState = true;
	$(".time").on( 'click', function() {
		if ( timerState ) {
			timerState = false;
			$(this).countdown('pause');
			$(this).fadeTo( 1000, 0.5 );
		} else {
			timerState = true;
			$(this).countdown('resume');
			$(this).fadeTo( 1000, 1.0 );
		}
	});	
	
	/* enumerating the slides and fitting the size */
	var counter = 0;
    var length = 0;
	$(".title").each( function() {
		++counter;
		$(this).html( '<div class="enumerator">' + counter + "</div>" + $(this).html() );
        
        /* the size of long titles is reduced */
        length = $(this).text().split(" ").length;
        if ( length > 5 ) {
            var o = parseInt( $(this).css( "font-size" ) );
            
            $(this).css( "font-size", ( o * 0.75 ) + "px" );
        }
        
	});
	
	/* creating a variable offset */
	var counter = 0;
	var offset = 0.0;
	$( ".slide" ).html( function() {
		++counter;
		if ( counter % 2 == 0 ) {
			offset = Math.random() + 0.5;
			$(this).css( "margin-top", offset + "em" );
		}
	});
    
    /* fitting the font-size of the paragraphs agains the
       length of their contents */
    
    $( "p" ).each( function() {
        
        var length = $(this).text().split(" ").length;
        var size = 1.0;
        
        if ( length <= 3 ) {
            $(this).css( "font-size", 3.5 + "em" );
            $(this).css( "padding-left", 2.5 + "em" );
        } else if ( length <= 10 ) {
            $(this).css( "font-size", 2.5 + "em" );
        } else if ( length <= 30 ) {
            $(this).css( "font-size", 1.8 + "em" );
        } else if ( length <= 60 ) {
            $(this).css( "font-size", 1.2 + "em" );
        }
        
        
        console.info( length + " " + size );
        
        /* $(this).append( '<sup style="color: rgba( 0, 0, 0, 0.2 );">{' + length + '}</sup>' ); */
        
    });
    
    /* compute the mean length of each list item and 
       increase the font-size accordingly */
    $( "ul" ).each( function() {
    
        var length = 0;
        var count = 0;
    
        $(this).children().each( function() {
            length += $(this).text().length;
            count += 1
        });
        
        var mean = ( length / count ) ? count > 0 : 0;
        
        if ( mean < 32 ) {
            $(this).css( "font-size", 1.8 + "em" );
        } else if ( mean < 72 ) {
            $(this).css( "font-size", 1.5 + "em" );
        } else if ( mean < 164 ) {
            $(this).css( "font-size", 1.1 + "em" );
        }
    
    });
    
    $( "ol" ).each( function() {
        
        var length = 0;
        var count = 0;
    
        $(this).children().each( function() {
            length += $(this).text().length;
            count += 1                
        });
        
        var mean = ( length / count ) ? count > 0 : 1000;
        
        if ( mean < 32 ) {
            $(this).css( "font-size", 1.8 + "em" );
        } else if ( mean < 72 ) {
            $(this).css( "font-size", 1.5 + "em" );
        } else if ( mean < 164 ) {
            $(this).css( "font-size", 1.1 + "em" );
        }
    
    });    
    
	
});