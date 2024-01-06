import './css/Socials.css'
import { BiLogoTelegram, BiLogoGithub, BiLogoInstagramAlt } from "react-icons/bi";




function Socials() {
    return (
        <ul className="socials-list">
            <li class="socials-list-item">
                <a className='in-socials' href='https://t.me/ksik2001' target='_blank' rel='noreferrer'>
                    <BiLogoTelegram size="30px"/>
                </a>
            </li>
            <li class="socials-list-item">
                <a className='in-socials' href="https://github.com/shirokov-kirill" target='_blank' rel='noreferrer'>
                    <BiLogoGithub size="30px"/>
                </a>
            </li>
            <li class="socials-list-item">
                <a className='in-socials' href="https://www.instagram.com/k_shirokov_01" target='_blank' rel='noreferrer'>
                    <BiLogoInstagramAlt size="30px"/>
                </a>
            </li>
        </ul>
    )
}

export default Socials