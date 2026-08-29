const baseTheme = {
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },

  // Adjusted to match typography.elements
  fontSizes: {
    xs: '1.2rem',
    sm: '1.4rem', 
    body: '1.6rem',
    h4: '1.8rem',
    h3: '2.4rem',
    h2: 'clamp(2rem, 1.5vw + 1rem, 3.2rem)',
    h1: 'clamp(2.4rem, 2vw + 1rem, 4rem)',
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  spacing: {
    xxs: '0.4rem',
    xs: '0.8rem', 
    sm: '1.2rem', 
    md: '1.6rem', 
    lg: '2rem',   
    xl: '2.4rem', 
    xxl: '3.2rem',
    // Added a few larger sizes for layout gaps
    xxxl: '4.8rem',
    huge: '6.4rem',
  },

  radii: {
    sm: '0.6rem',
    md: '0.8rem',
    lg: '1.2rem',
    xl: '1.6rem',
    xxl: '2rem',
    full: '9999px',
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1440px',
  },

  motion: {
    fast: '120ms ease',
    normal: '180ms ease',
    slow: '260ms ease',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1100,
    modal: 1300,
    toast: 1500,
  },

  layout: {
    sidebarWidth: '28rem',
    contentMax: '160rem',
    headerHeight: '6.4rem',
  }
};

// Light Theme
export const lightTheme = {
  ...baseTheme,
  mode: 'light',
  
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.1)',
  },

  colors: {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    primaryLight: '#3b82f6',

    secondary: '#10b981',
    secondaryDark: '#0ca471',
    accent: '#7c3aed',

    // Use background strictly for layout (body, wrappers, sidebars)
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
    },

    // Moved Surface here
    // Use surface strictly for UI components (cards, modals, dropdowns)
    surface: {
      page: '#ffffff',
      card: '#f9fafb',
      elevated: '#ffffff',
      hover: '#f3f4f6',
      active: '#e5e7eb',
    },

    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      light: '#9ca3af',
      inverse: '#ffffff',
    },

    border: '#e5e7eb',
    borderSecondary: '#d1d5db',
    
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
};

// Dark Theme
export const darkTheme = {
  ...baseTheme,
  mode: 'dark',

  // Dark mode shadows need to be much harsher to be visible
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.5)',
    md: '0 4px 6px rgba(0,0,0,0.6)',
    lg: '0 10px 15px rgba(0,0,0,0.7)',
    xl: '0 20px 25px rgba(0,0,0,0.8)',
  },

  colors: {
    primary: '#3b82f6', // Slightly lighter for dark mode contrast
    primaryDark: '#2563eb',
    primaryLight: '#60a5fa',

    secondary: '#34d399',
    secondaryDark: '#10b981',
    accent: '#8b5cf6',
    
    // Use background strictly for layout (body, wrappers, sidebars)
    background: {
      primary: '#111827',
      secondary: '#1f2937',
      tertiary: '#374151',
    },

    // Your original surface colors moved here
    // Use surface strictly for UI components (cards, modals, dropdowns)
    surface: {
      page: '#020817',
      card: '#0f172a',
      elevated: '#111827',
      hover: '#1e293b',
      active: '#2563eb15', // Great use of alpha transparency
    },

    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      light: '#9ca3af',
      inverse: '#1f2937',
    },

    border: 'rgba(255,255,255,0.07)',
    borderSecondary: 'rgba(255,255,255,0.15)',

    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa',
  },
};