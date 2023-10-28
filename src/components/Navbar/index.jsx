import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-alt-site.svg';
import './styles.css';

export const Navbar = ({ forceCollapse }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      console.log(scrollPos.toFixed(0));

      if (scrollPos > 20) {
        setCollapsed(true);
      } else if (scrollPos <=20 && !forceCollapse) {
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

  return (
    <section
      id='navbar'
      className={`fixed top-0 z-50 flex w-2/3 justify-between h-32 items-center ${collapsed ? "collapsed" : ""}`}
    >
      <Link className='text-center text-white link'><p>ABOUT</p></Link>
      <Link className='text-center text-white link'><p>EXPLORE</p></Link>
      <Link id='logo' to="/">
        <img src={Logo} alt="Logo AltN9dex Website" />
      </Link>
      <Link className='text-center text-white link'><p>PACKAGES</p></Link>
      <Link className='text-center text-white link'><p>CONTACT</p></Link>
    </section>
  );
};
