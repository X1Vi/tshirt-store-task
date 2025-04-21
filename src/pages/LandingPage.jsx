import React, { useContext } from 'react'
import { AppContext } from '../App';

import NavbarHeader from '../components/Navbar';
import ArtistLandingPageHeader from '../components/ArtistLandingPageHeader';
import ImageGrid from '../components/ImageGrid';

function LandingPage() {
  const { themePallete } = useContext(AppContext);
  return (
    <div style={{ flex: 1, backgroundColor: themePallete.colors.secondary }}>
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
      <div style={{ flex: 1, backgroundColor: themePallete.colors.secondary }}>
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
      </div>
      <div style={{ margin: 20, flex: 1, backgroundColor: themePallete.colors.secondary }}>
        <ImageGrid />
      </div>
    </div>
  )
}

export default LandingPage