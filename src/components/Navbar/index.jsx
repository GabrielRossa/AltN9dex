import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/hokaiz-logo.svg';
import './styles.css';

export const Navbar = ({ forceCollapse }) => {
  const [collapsed, setCollapsed] = useState(false);

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

  return (
    <section
      id='navbar'
      className={`fixed top-0 z-50 flex w-screen justify-center h-32 items-center ${collapsed ? "collapsed" : ""}`}
    >
      <div className='flex justify-between items-center' style={{width: '60rem'}}>
        <Link className='text-center text-white link' to="/about"><p>SOBRE</p></Link>
        <Link className='text-center text-white link' to={"/explore"}><p>EXPLORE</p></Link>
        <Link id='logo' to="/">
          <img src={Logo} alt="Logo AltN9dex Website" style={{ height: '4.5rem', transform: 'translateY(-.75rem)' }} />
        </Link>
        <Link className='text-center text-white link'><p>SKILLS</p></Link>
        <Link className='text-center text-white link'><p>CONTATO</p></Link>
      </div>
    </section>
  );
};
