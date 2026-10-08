'use client'

import { useDispatch, useSelector } from 'react-redux';
import { LayoutGroup } from "framer-motion";
import { CiLight, CiDesktop } from "react-icons/ci";
import { IoDesktopOutline, IoMoonOutline, IoMoon } from "react-icons/io5";
import { updateTheme, selectCurrentThemeType } from '@/core/store/globalSlice';
import { TogglerContainer, TogglerButton, ActiveBackground } from '@/core/styles/common/themeToggle.styles';

const TOGGLE_OPTIONS = [
  { id: 'light', value: 'light', type: 'light', icon: CiLight, title: 'Light' },
  { id: 'desktop', value: 'none', type: 'desktop', icon: IoDesktopOutline, title: 'System' },
  { id: 'dark', value: 'dark', type: 'dark', icon: IoMoonOutline, title: 'Dark' },
];

const ThemeToggle = ({ uniqueId = "main"}) => {
  const dispatch = useDispatch();
  const themeType = useSelector(selectCurrentThemeType);

  const toggleTheme = (value, type) => {
    let newTheme;
    let updatedThemeType;
    
    if (type === "dark" || type === "light") {
      newTheme = value;
      updatedThemeType = value;
    } else {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      newTheme = userPrefersDark ? 'dark' : 'light';
      updatedThemeType = 'desktop';
    }
    
    dispatch(updateTheme({newTheme, updatedThemeType}));
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('themeType', updatedThemeType);
  };

  return (
    <TogglerContainer>
      <LayoutGroup id='theme-toggle-group'>
        {TOGGLE_OPTIONS.map((option) => {
          const isActive = themeType === option.id;
          const Icon = option.icon;

          return (
            <TogglerButton 
              key={option.id}
              title={option.title} 
              type='button' 
              onClick={() => toggleTheme(option.value, option.type)} 
              $isActive={isActive}
            >
              {/* The sliding glass background bubble */}
              {isActive && (
                <ActiveBackground 
                  layout
                  layoutId={`themeToggleBubble-${uniqueId}`} 
                  initial={false} // <-- PREVENTS THE JUMP/STAGGER
                  // transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              {/* The icon sits above the background bubble */}
              <Icon size={20} />
            </TogglerButton>
          );
        })}
      </LayoutGroup>
    </TogglerContainer>
  );
};

export default ThemeToggle;

// 'use client'

// import { useDispatch, useSelector } from 'react-redux';
// import { CiLight } from "react-icons/ci";
// import { IoDesktopOutline, IoMoonOutline } from "react-icons/io5";
// import { updateTheme, selectCurrentThemeType } from '@/core/store/globalSlice';
// import { TogglerContainer, TogglerButton } from '@/core/styles/common/themeToggle.styles';

// const ThemeToggle = () => {
//   const dispatch = useDispatch();
//   const themeType = useSelector(selectCurrentThemeType);

//   const toggleTheme = (value, type) => {
//     let newTheme;
//     let updatedThemeType;
    
//     if (type === "dark" || type === "light") {
//       newTheme = value;
//       updatedThemeType = value;
//     } else {
//       const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//       newTheme = userPrefersDark ? 'dark' : 'light';
//       updatedThemeType = 'desktop';
//     }
    
//     dispatch(updateTheme({newTheme, updatedThemeType}));
//     localStorage.setItem('theme', newTheme);
//     localStorage.setItem('themeType', updatedThemeType);
//   };

//   return (
//     <TogglerContainer>
//       <TogglerButton 
//         title='Light' 
//         type='button' 
//         onClick={() => toggleTheme("light", "light")} 
//         className={themeType === "light" ? 'active' : ''}
//       >
//         <CiLight size={20} />
//       </TogglerButton>
      
//       <TogglerButton 
//         title='System' 
//         type='button' 
//         onClick={() => toggleTheme("none", "desktop")} 
//         className={themeType === "desktop" ? 'active' : ''}
//       >
//         <IoDesktopOutline size={20} />
//       </TogglerButton>
      
//       <TogglerButton 
//         title='Dark' 
//         type='button' 
//         onClick={() => toggleTheme("dark", "dark")} 
//         className={themeType === "dark" ? 'active' : ''}
//       >
//         <IoMoonOutline size={20} />
//       </TogglerButton>
//     </TogglerContainer>
//   );
// };

// export default ThemeToggle;