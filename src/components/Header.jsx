import AROMA_LOGO from '../images/Untitled design.png';
import { Link } from 'react-router-dom';
// import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
        <div className="py-2 container px-4 flex justify-between items-center md:mx-auto bg-white/50 backdrop-blur-2xl select-none">
            <div className='flex items-center max-sm:w-full max-sm:justify-between gap-5 '>
                <Link to={"/"} className="logo w-20 sm:w-28 h-auto object-contain">
                    <img src={AROMA_LOGO} alt=""/>
                </Link>

                <ul className='flex items-center gap-5 max-sm:hidden '>
                    <Link to={"/"}><li><p className='transition-all hover:underline'>Home</p></li></Link>
                    <Link to={"/A propos"}><li>A propos</li></Link>
                    <Link to={"/gallerie"}><li>Gallerie</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                </ul>
    
                <a href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html?aid=318615&label=New_French_FR_MA_26194234465-7R4oKc6r3TlpeFPffvadGQSM217287030916%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-194593862665%3Alp1009979%3Ali%3Adem%3Adm&sid=f90629d57cce78b3fb0cf475e7426a6c&all_sr_blocks=1165332601_389195985_1_41_0&checkin=2025-12-29&checkout=2025-12-30&dest_id=-31639&dest_type=city&group_adults=1&group_children=0&hapos=1&highlighted_blocks=1165332601_389195985_1_41_0&hpos=1&matching_block_id=1165332601_389195985_1_41_0&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1165332601_389195985_1_41_0__3594&srepoch=1767012597&srpvid=95ff5a388cf00233&type=total&ucfs=1&chal_t=1767093892475&force_referer=#availability" 
                className='cursor-pointer'
                target='_blank'
                >
                    Booking
                </a>
            </div>
      </div>
    </>
  )
}

export default Header