<!DOCTYPE html>
<html>

    <head>
        <title>Online Banking Website</title>
        <link href="../CSS/homeCSS.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet">
        <!-- <script src="../Java Script/homeJS.js"></script> -->
        <!-- Enable SHA-256 certificate -->
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        
    </head>

    <body>
        <div id="header" class="head">
            <h1>Online Banking Website</h1>
            <a href="home.php"><img src="../Images/logo.jpg" alt="Online Banking System"
                    title="Online Banking Website"></a>
        </div>
        <div id="log_sign">
            <li><a href="login.php">Login</a></li>
            <li><a href="signup.php">Sign Up</a></li>
        </div>
        <div id="navbar">
            <div id="nav">
                <div id="services">
                    <li><a href="#">- Services -</a></li>
                    <nav class="content">
                        <li><a href="perIntBank.php">- Personal Internet Banking -</a></li>
                        <li><a href="corpBank.php">- Corprorate Banking -</a></li>
                        <li><a href="merBusiness.php">- Merchant Bussiness -</a></li>
                        <li><a href="onlTax.php">- Online Tax -</a></li>
                    </nav>
                </div>
                <div id="payment_transfer">
                    <li><a href="#">- Payment Transfer -</a></li>
                    <nav class="content">
                        <li><a href="intTransfer.php">- International Transfer -</a></li>
                        <li><a href="natTransfer.php">- National Transfer -</a></li>
                        <li><a href="billPay.php">- Bill Payment -</a></li>
                    </nav>
                </div>
                <div id="fixed_deposite">
                    <li><a href="fixDep.php">- Fixed Deposit -</a></li>
                </div>
                <div id="e_service">
                    <li><a href="eServ.php">- E.Services -</a></li>
                </div>
                <div id="acc">
                    <li><a href="acc.php">- My Account -</a></li>
                </div>
            </div>
        </div>
        <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="../Images/online banking-1.png">
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="../Images/online banking-2.png">
            </div>
            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="../Images/online banking-3.png">
            </div>
        </div>
        <br>
        <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <script>
            var slideIndex = 0;
            showSlides();

            function showSlides()
            {
                var i;
                var slides = document.getElementsByClassName( "mySlides" );
                var dots = document.getElementsByClassName( "dot" );
                for ( i = 0; i < slides.length; i++ ) {
                    slides[ i ].style.display = "none";
                }
                slideIndex++;
                if ( slideIndex > slides.length ) { slideIndex = 1 }
                for ( i = 0; i < dots.length; i++ ) {
                    dots[ i ].className = dots[ i ].className.replace( " active", "" );
                }
                slides[ slideIndex - 1 ].style.display = "block";
                dots[ slideIndex - 1 ].className += " active";
                setTimeout( showSlides, 2000 ); // Change image every 2 seconds
            }
        </script>
        <div id="disp">
            <p>Login to see your Details here:</p>
            <div>
                <input type="text" disabled name="name" id="name" placeholder="Beneficiary Name" value="">
                <input type="number" disabled name="accno" id="accno" value="" placeholder="Account No.">
                <input type="text" disabled name="branch" id="branch" value="" placeholder="Branch Name">
                <input type="text" disabled name="ifsc" id="ifsc" value="" placeholder="IFSC Code">
            </div>
        </div>
        <div id="foot">
            <a href="aboutUs.php">About Us</a>
        </div>
    </body>
<footer style="text-align: center; position: absolute; bottom: 0; width: 100%;">
    &copy; 2023 Online
    Banking Website. All Rights Reserved.
</footer>

	</footer>
</html>
