import React, { useContext } from 'react';
import AnimatedText from './AnimatedComponents/AnimatedText';
import { AppContext } from '../App'; // Adjust this path if needed

// Navigation item component
const NavItem = ({ href, label }) => {
  const { themePallete } = useContext(AppContext);

  return (
    <li style={{ fontSize: themePallete.fontSizes.small }}>
      <a
        href={href}
        data-astro-prefetch
        style={{
          color: themePallete.colors.text,
          textDecoration: 'none',
          transition: 'color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.color = themePallete.colors.hover)}
        onMouseOut={(e) => (e.target.style.color = themePallete.colors.text)}
      >
        <AnimatedText>{label}</AnimatedText>
      </a>
    </li>
  );
};

// Header component
const NavbarHeader = () => {
  const { toggleTheme, themePallete } = useContext(AppContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: themePallete.spacing.medium,
        backgroundColor: themePallete.colors.secondary,
        color: themePallete.colors.text,
        width: '100%',
        marginBottom: themePallete.spacing.verysmall,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          gap: themePallete.spacing.small,
        }}
      >
        <span
          style={{
            fontSize: themePallete.fontSizes.medium,
            fontWeight: 'bold',
            marginBottom: themePallete.spacing.verysmall,
          }}
        >
          <AnimatedText>Players Club</AnimatedText>
        </span>

        <span
          style={{
            fontSize: themePallete.fontSizes.medium,
            fontWeight: 'bold',
            marginBottom: themePallete.spacing.verysmall,
          }}
        >
          <AnimatedText>Record Label</AnimatedText>
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: themePallete.spacing.medium,
        }}
      >
        <ul
          style={{
            listStyleType: 'none',
            padding: '0',
            display: 'flex',
            gap: themePallete.spacing.medium,
          }}
        >
          <NavItem href="/releases/" label="Releases" />
          <NavItem href="/history/" label="History" />
          <NavItem href="/store/" label="Store" />
          <NavItem href="/contact/" label="Contact" />
        </ul>
      </div>

      <div
        style={{
          display: 'flex',
          width: '100%',
          gap: themePallete.spacing.small,
          marginTop: themePallete.spacing.verysmall,
          flexDirection: 'start',
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            border: `1px solid ${themePallete.colors.hover || '#888'}`,
            backgroundColor: themePallete.colors.secondary || 'transparent',
            color: themePallete.colors.text,
            fontSize: themePallete.fontSizes.small,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            alignSelf: 'start',
            flexDirection: 'end',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = themePallete.colors.hover || '#444';
            e.target.style.color = themePallete.colors.background;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = themePallete.colors.button || 'transparent';
            e.target.style.color = themePallete.colors.text;
          }}
        >
          🌓
        </button>
      </div>
    </div>
  );
};

export default NavbarHeader;
