import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/hokaiz-logo.svg';
import './styles.css';

import menu from '../../assets/menu.png'

export const Navbar = ({ forceCollapse }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      console.log(scrollPos.toFixed(0));

      if (scrollPos > 20) {
        setCollapsed(true);
      } else if (scrollPos <= 20 && !forceCollapse) {
        setCollapsed(false);
      }
    };

    const handleForceCollapseChange = () => {
      if (forceCollapse) {
        setCollapsed(true);
      }
    };

    // Adiciona os ouvintes de eventos quando o componente é montado
    window.addEventListener('scroll', handleScroll);
    handleForceCollapseChange();

    // Remove os ouvintes de eventos quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [forceCollapse]); // Adiciona forceCollapse à lista de dependências
  
  const handleMenuButton = () => {
    console.log("Foi")
    if (open) {
      setOpen(false)
    }else{
      setOpen(true)
    }
  };
  return (
    <section
      id='navbar'
      className={`fixed top-0 z-50 flex w-screen justify-center h-32 items-center`}
    >
      <div id='menu-linear' className={`inherit flex justify-between items-center ${collapsed ? "collapsed" : ""}`}>
        <Link className='text-center text-white link' to="/about"><p className='w-fit'>SOBRE</p></Link>
        <Link className='text-center text-white link' to="/explore"><p className='w-fit'>GALERIA</p></Link>
        <Link id='logo' to="/">
          <img src={Logo} alt="Logo AltN9dex Website" style={{ height: '4.5rem', transform: 'translateY(-.75rem)' }} />
        </Link>
        <Link className='text-center text-white link' to="/skills"><p className='w-fit'>SKILLS</p></Link>
        <Link className='text-center text-white link' to="/contact"><p className='w-fit'>CONTATO</p></Link>
      </div>

      <button id='menu-button' className='h-6 w-6 hidden' onClick={handleMenuButton} style={{backgroundColor: 'transparent', padding: '0', }}>
        <img src={menu} alt="" className='h-6 w-auto'/>
      </button>
      <div id='menu-vertical' className={`flex flex-col justify-center items-center gap-20 ${open ? "open" : ""}`}>
        <Link className='text-center text-white link' to="/about"><p>SOBRE</p></Link>
        <Link className='text-center text-white link' to="/explore"><p>GALERIA</p></Link>
        <Link className='text-center text-white link' to="/">HOME</Link>
        <Link className='text-center text-white link' to="/skills"><p>SKILLS</p></Link>
        <Link className='text-center text-white link' to="/contact"><p>CONTATO</p></Link>
      </div>
    </section>
  );
};
