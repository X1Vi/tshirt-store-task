import React, { useContext, useEffect, useState } from 'react'
import NavbarHeader from '../components/Navbar'
import { AppContext } from '../App';
import AnimatedText from '../components/AnimatedComponents/AnimatedText';


const NavItem = ({ href, label, onPress=null }) => {
  const { themePallete } = useContext(AppContext);

  return (
    <li onClick={onPress} style={{ fontSize: themePallete.fontSizes.small }}>
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
  const { toggleTheme, themePallete, setCurrentPage, currentPage, PAGES } = useContext(AppContext);

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
          <AnimatedText>T-Shirts</AnimatedText>
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
          onClick={() => setCurrentPage(PAGES.LANDING_PAGE)}        
          style={{
            listStyleType: 'none',
            padding: '0',
            display: 'flex',
            gap: themePallete.spacing.verysmall,
          }}
        >
          <NavItem href={null} label="View all /" />
          <NavItem href={null} label="Next Artist" />
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
      </div>
    </div>
  );
};


function ProductInformationPage() {
  const { themePallete, currentImage, setCurrentImage } = useContext(AppContext);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px is a common breakpoint for tablets
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div style={{ flex: 1, }}>
      <NavbarHeader />
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginRight: themePallete.spacing.medium,
          marginLeft: themePallete.spacing.medium,
          borderBottom: `1px solid ${themePallete.colors.border || '#888'}`,
        }}
      />
      <ArtistLandingPageHeader />
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginRight: themePallete.spacing.medium,
          marginLeft: themePallete.spacing.medium,
          borderBottom: `1px solid ${themePallete.colors.border || '#888'}`,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: isLargeScreen ? 'row' : 'column', // Row on large screens, column on small screens
          justifyContent: 'center',
          alignItems: isLargeScreen ? 'flex-start' : 'center', // Different alignment based on screen size
          marginLeft: themePallete.spacing.medium,
          marginRight: themePallete.spacing.medium,
          marginTop: themePallete.spacing.medium,
          marginBottom: themePallete.spacing.medium,
          gap: themePallete.spacing.medium, // Add gap between elements
        }}
      >
        <div style={{ 
          flex: isLargeScreen ? 1 : 'auto',
          width: isLargeScreen ? '50%' : '100%' 
        }}>
          <img
            src={`/images/premium_photo-1664475948484-b85aa42cb7ab.avif`}
            alt="Product"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: themePallete.spacing.medium,
            }}
          />
        </div>

        <div style={{ 
          flex: isLargeScreen ? 1 : 'auto',
          width: isLargeScreen ? '50%' : '100%',
          padding: isLargeScreen ? themePallete.spacing.medium : '0'
        }}>
          <p>
            <span
              style={{
                fontSize: themePallete.fontSizes.medium,
                lineHeight: 1.5,
                textAlign: 'justify',
                color: themePallete.colors.text,
              }}
            >
              This is a premium quality shirt made from the finest materials. Designed for both comfort and style, it is perfect for any occasion. The fabric is soft, breathable, and durable, ensuring long-lasting wear. Whether you're dressing up for a formal event or keeping it casual, this shirt is a versatile addition to your wardrobe. Experience the perfect blend of elegance and functionality with this exceptional product.
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default ProductInformationPage