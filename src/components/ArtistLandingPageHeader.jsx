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
const ArtistLandingPageHeader = () => {
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
          <AnimatedText>Artists</AnimatedText>
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
          <NavItem href={null} label="Sort" />
          <NavItem href={null} label="Shuffle" />
          <NavItem href={null} label="Store" />
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

        <span
          style={{
            fontSize: themePallete.fontSizes.medium,
            fontWeight: 'bold',
            marginBottom: themePallete.spacing.verysmall,
          }}
        >
          <AnimatedText>28</AnimatedText>
        </span>
      </div>
    </div>
  );
};

export default ArtistLandingPageHeader;
