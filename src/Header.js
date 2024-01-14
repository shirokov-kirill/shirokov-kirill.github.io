import { useEffect } from "react";
import { $ } from 'react-jquery-plugin'

import "./css/Header.css";
import Socials from "./Socials";

function Header() {

    useEffect(() => {
        $(window).on("scroll", 
        function() {
            let header = $('.header');
            let headerHeight = header.height();
             
              if($(this).scrollTop() > 1) {
               header.addClass('header-fixed-top');
               $('body').css({
                  'paddingTop': headerHeight+'px'
               });
              } else {
               header.removeClass('header-fixed-top');
               $('body').css({
                'paddingTop': 0
               })
            };
        })
    }, [])

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-icon">
                    KIRILL SHIROKOV
                </div>

                <ul className="header-nav-container">
                    <li class="header-nav-item"><a class="nav-item-hover" href="#about">About</a></li>
                    <li class="header-nav-item"><a class="nav-item-hover" href="#experience">Experience</a></li>
                    <li class="header-nav-item"><a class="nav-item-hover" href="#contact">Contact</a></li>
                </ul>

                <Socials/>
            </div>
        </header>
    )
}

export default Header;