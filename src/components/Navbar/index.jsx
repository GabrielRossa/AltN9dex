import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/hokaiz-logo.svg';
import './styles.css';
import menu from '../../assets/menu.png';

export const Navbar = ({ forceCollapse }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  // deslocamento para compensar a altura do navbar fixo (ajuste se precisar)
  const NAVBAR_OFFSET = 100;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
    // fecha o menu vertical (mobile) se estiver aberto
    if (open) setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 20) {
        setCollapsed(true);
      } else if (scrollPos <= 20 && !forceCollapse) {
        setCollapsed(false);
      }
    };

    const handleForceCollapseChange = () => {
      if (forceCollapse) setCollapsed(true);
    };

    window.addEventListener('scroll', handleScroll);
    handleForceCollapseChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [forceCollapse]);

  const handleMenuButton = () => setOpen((v) => !v);

  return (
    <section
      id='navbar'
      className={`fixed top-0 z-50 flex w-screen justify-center h-32 items-center`}
    >
      <div id='menu-linear' className={`inherit flex justify-between items-center ${collapsed ? 'collapsed' : ''}`}>
        <Link className='text-center text-white link' to="#explore" onClick={(e) => handleNavClick(e, 'explore')}>
          <p className='w-full'>WORK</p>
        </Link>
        <Link className='text-center text-white link' to="#about" onClick={(e) => handleNavClick(e, 'about')}>
          <p className='w-full'>ABOUT</p>
        </Link>
        <Link id='logo' to="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <img src={Logo} alt="Logo AltN9dex Website" style={{ height: '4.5rem', transform: 'translateY(-.75rem)' }} />
        </Link>
        <Link className='text-center text-white link' to="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
          <p className='w-full'>SERVICES</p>
        </Link>
        <Link className='text-center text-white link' to="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          <p className='w-full'>CONTACT</p>
        </Link>
      </div>

      {/* <button
        id='menu-button'
        className='h-6 w-6 hidden'
        onClick={handleMenuButton}
        style={{ backgroundColor: 'transparent', padding: 0 }}
      >
        <img src={menu} alt="" className='h-6 w-auto' />
      </button> */}

      {/* <div id='menu-vertical' className={`flex flex-col justify-center items-center gap-20 ${open ? 'open' : ''}`}>
        <Link className='text-center text-white link' to="#about" onClick={(e) => handleNavClick(e, 'about')}>
          <p>WORK</p>
        </Link>
        <Link className='text-center text-white link' to="#explore" onClick={(e) => handleNavClick(e, 'explore')}>
          <p>ABOUT</p>
        </Link>
        <Link className='text-center text-white link' to="#home" onClick={(e) => handleNavClick(e, 'home')}>
          HOME
        </Link>
        <Link className='text-center text-white link' to="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
          <p>SERVICES</p>
        </Link>
        <Link className='text-center text-white link' to="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          <p>CONTACT</p>
        </Link>
      </div> */}
    </section>
  );
};
