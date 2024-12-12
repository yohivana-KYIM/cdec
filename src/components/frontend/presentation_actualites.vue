<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/presentation_actualite.css">
    <script src="js/header.js"></script>
    <script src="js/loader.js"></script>
    <!-- <script src="js/main.js"></script> -->
    <title>ACTUALITES - CDEC</title>
</head>
<body>
    <div class="container" >
        <div class="spinner" ></div>
    </div>
    
    <header>
        <div class="top_bar">
            <!-- <span><ion-icon name="call-outline"></ion-icon>+237 222 22 22 22</span> -->
             <div>
                <span>Caisse des Dépots Et Consignations</span>
             </div>
            <!-- <span>Caisse de Dépôt d'Epargne et de Consignation</span> -->
            <div class="button_lang">
                <button>
                    Français
                </button>
                <button>
                    Anglais
                </button>
             </div> 
            <div class="form_topbar">
                <form action="" method="post">
                    <input type="text" placeholder="enter a text">
                    <button class="submit"><img src="assets/search.png" alt=""></button>
                </form>
            </div>
        </div>
    
        <nav>
            <div class="logo">
               <a href="accueil.html"> <img src="assets/cdec.png" alt=""></a>
            </div>
            <div class="toggle">
                <a href="#"><ion-icon name="menu-outline"></ion-icon></a>
            </div>
            <ul class="menu">
                <li>
                    <a href="accueil.html">Accueil</a>
                </li>
                <li>
                    <a href="#">CDEC</a>
                    <ul class="dropdown">
                        <li> <a href="lacdec.html" class="li">Présentation</a></li>
                        <li> <a href="missions.html" class="li">Les Missions</a></li>
                        <li> <a href="nos_partenaires.html" class="li">Nos Partenaires</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Services</a>
                    <ul class="dropdown">
                        <li> <a href="cons_admin.html" class="">Consignation Administrative</a></li>
                        <li> <a href="cons_judiciaire.html" class="">Consignation Judiciaire</a></li>
                        <li> <a href="cons_convention.html" class="">Consignation Conventionnelle</a></li>
                        <!-- <li> <a href="" class="li">Link 3</a></li> -->
                    </ul>
                </li>
                <!-- <li>
                    <a href="">Espace Utilisateur</a>
                    <ul class="dropdown">
                        <li> <a href="lacdec.html" class="li">Login</a></li>
                        <li> <a href="" class="li">Dashboard</a></li>
                        
                    </ul>
                </li> -->
                <li>
                    <a href="#">Publications</a>
                    <ul class="dropdown">
                        <li> <a href="presentation_actualites.html" class="">Actualités</a></li>
                        <li> <a href="communique.html" class="">Communiqués</a></li>
                        <li> <a href="guide_utilisateurs.html" class="">Guide utilisateur</a></li>
                        <!-- <li> <a href="" class="li">Link 3</a></li> -->
                    </ul>
                </li>
            </ul>
        </nav>
        <section class= "flag_cameroun">
            <div></div>
            <div><img class="star" src="assets/star.png" alt=""></div>
            <div></div>
        </section>
    </header>

    <section class="body_actualite">
        <div class="titre_actualite">
            <h1>Actualités CDEC</h1>
            <span>
                Retrouver ici toutes les nouveautés concernant la CDEC
            </span>
        </div>
    </section>

    <section class="section_actualite">
        <div class="liste_actualite">
            <div class="divider">
                Toutes les Actualités
            </div>
            <div class="actualite_group">
                <div class="owl-carousel owl-theme caroussel_actualite">
                    <div class="item_actualite">
                        <a href="actualites.html">
                            <img src="assets/actualite1.jpeg">
                        </a>
                        <h4>
                            Lancement des Activités à la CDEC
                        </h4>
                        <span>
                            Lun. 06 Mai 2024
                        </span>
                        <button>
                            <a href="actualites.html" class="text">
                                Lire plus
                            </a>    
                        </button>
                    </div>
                    <div class="item_actualite">
                        <a href="actualites.html">
                            <img src="assets/actualite2.jpeg">
                        </a>
                        <h4>
                            Procédures de Consignations Administratives (Le Guide)
                        </h4>
                        <span>
                            Mer. 24 Avril 2024
                        </span>
                        <button>
                            <a href="actualites.html" class="text">
                                Lire plus
                            </a>    
                        </button>
                    </div>
                    <div class="item_actualite">
                        <a href="actualites.html">
                            <img src="assets/actualite3.jpeg">
                        </a>
                        <h4>
                            Le voile levé sur les missions de la CDEC 
                        </h4>
                        <span>
                            Mer. 17 Avril 2024
                        </span>
                        <button>
                            <a href="actualites.html" class="text">
                                Lire plus
                            </a>    
                        </button>
                    </div>
                    <div class="item_actualite">
                       <a href="actualites.html">
                            <img src="assets/actualite1.jpeg">
                        </a>
                        <h4>
                            Lancement des Activités à la CDEC
                        </h4>
                        <span>
                            Lun. 06 Mai 2024
                        </span>
                        <button>
                            <a href="actualites.html" class="text">
                                Lire plus
                            </a>    
                        </button>
                    </div>
                    <div class="item_actualite">
                        <a href="actualites.html">
                            <img src="assets/actualite2.jpeg">
                        </a>
                        <h4>
                            Procédures de Consignations Administratives (Le Guide)
                        </h4>
                        <span>
                            Mer. 24 Avril 2024
                        </span>
                        <button>
                            <a href="actualites.html" class="text">
                                Lire plus
                            </a>    
                        </button>
                    </div>
                    <div class="item_actualite">
                        <a href="actualites.html">
                            <img src="assets/actualite3.jpeg">
                        </a>
                        <h4>
                            Le voile levé sur les missions de la CDEC 
                        </h4>
                        <span>
                            Mer. 17 Avril 2024
                        </span>
                        <button>
                            <a href="actualites.html" class="text">
                                Lire plus
                            </a>    
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </section>

    
    <section class="section_footer">
        <div class="footer">
            <div class="contact_information">
                <img src="assets/call.png" alt="">
                <span>+237 222 22 22 22</span>
            </div>
            <div class="contact_information">
                <img src="assets/mail.png" alt="">
                <span> contact@cdec.cm </span>
            </div>
            <div class="contact_information">
                <img src="assets/calendar.png" alt="">
                <span>De LUN. à VEN. 8H30 à 16H00</span>
            </div>
        </div>
        <div class="footer">
            <div class="footer_information">
                <div class="social_information">
                    <img src="assets/cdec.png" alt="" class="logo_footer">
                    <h3>Rejoignez-nous</h3>
                    <div class="social_icon">
                        <img src="assets/facebook.png" alt="">
                        <img src="assets/linkedin.png" alt="">
                        <img src="assets/twitter.png" alt="">
                    </div>
                </div>  
            </div>
            <div class="footer_information">
                <div class="social_information">
                    <h2>
                        Liens Utiles
                    </h2>
                    <div class="lien_footer">
                        <a href="accueil.html">Accueil</a>
                        <a href="lacdec.html">Presentation</a>
                        <a href="contact_us.html">Contact-nous</a>
                        <a href="presentation_actualites.html">Actualités</a>
                    </div>
                </div>    
            </div>
            <div class="footer_information">
                <div class="newsletter">
                    <h2>
                        NEWSLETTER
                    </h2>
                    <form action="" method="post">
                        <input placeholder="Votre email ici" type="text">
                        <button class="form_button">
                            Souscrire
                        </button>
                    </form>
                </div>   
            </div>
        </div>
        <div class="copyright">
            <span>Copyright CDEC © 2024. All Rights Reserved </span>
            <span>Powered by EVENTIFY AGENCY</span>
        </div>
    </section>
</body>
<script src="js/main.js"></script>
<script src="js/count_number.js"></script>

<script type="text/javascript">

    $(".caroussel_actualite").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

</script>
</html>