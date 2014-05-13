var close   = $('#close_1'),
    $email  = $('#input_email'),
    $name   = $('#input_name'),
    palabra = false;

function pett (argument) {
        // body...
        argument ? alert('Method POST!') : alert('esta masl PS NO Method POST!');
}

function validate_mail () {
                     // body...
    var email = $email.val();
           for (x = 0; x <= email.length; ++x)
           {
                if( email[x] == "@" )
                { 
                    var el_email = email.substr( x, email.length ).toLocaleUpperCase();
                        if ( el_email == "@HOTMAIL.COM" || el_email == "@GMAIL.COM" || el_email == "@YAHOO.COM"  )
                        {
                            if ( email.substr( 0, x ) == "" || email.substr( 0, x ) == " " ) {
                                console.log('Bad email ' + el_email);
                                console.log(email.substr( 0, x ));
                                pett(false)
                            }
                            else{
                                alert('Bien!');
                                console.log('BIEN!' + el_email);
                                pett(true);
                            }
                        }
                            else
                            {
                                alert('Bad email Address');
                                console.log('bad email addres' + el_email);
                                pett(false)
                            }
                }
            }
                // END FOR
            if (email == "") {
                        alert('No a ingrsado el email!');
                        pett(false)
                        console.log('No a ingrsado el email!');
                    }
}

function seen(){
          if ( $email.val() == "" && $name.val() == "" )
                    {
                        $email.css('background','white');
                        $name.css('background','white');
                    } 
            else if ( $email.val() != "" && $name.val() != "" )
                        {
                            $email.css('background','whitesmoke');
                            $name.css('background','whitesmoke');
                        }
            else if ( $email.val() != "" && $name.val() == "" ) 
                        {
                            $email.css('background','dimgray');
                            $name.css('background','white');
                        }
                    else 
                        {
                            $name.css('background','dimgray');
                            $email.css('background','white');
                        }
}

$('body').on('click',
        function() 
                {
                    seen();
                })

$email.on('focus',
        function (){
                        // colorr
                        $email.css('background','dimgray');
                });

                
$name.on('focus',
        function (){
            // body...
            $name.css('background','dimgray');  
                   }
        )

close.on('click',validate_mail)




                //         $('#loco')[0].className = "icon-unlocked2";
                //     // body...
                //     al = 140;
                //    timeron = setInterval(function (){
                //         al = al - 5;
                //         if (al <= 20) { 
                //         clearInterval(timeron);
                //         $('#registro').css('height', 20 + 'px')
                //         setTimeout(
                //             function () {
                //             // text new
                //                 $('#registro')[0].innerHTML = '<span class="icon-ok"> Check your inbox </span>'
                //                         },10)
                // }
                //         $('#registro').css('height', al + 'px') }, 20 )

                //             }
                // )