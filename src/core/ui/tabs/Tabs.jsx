'use client';

import React, { useState, useId } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './Tabs.styles';

export default function Tabs({ tabs = [] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  // Generates a unique ID for this instance to ensure accessibility 
  // and prevent Framer Motion layoutId conflicts
  const uniqueId = useId(); 

  if (!tabs || tabs.length === 0) return null;

  return (
    <S.TabsContainer>
      <S.TabList role="tablist">
        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <S.TabButton
              key={index}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${uniqueId}-${index}`}
              id={`tab-${uniqueId}-${index}`}
              $isActive={isActive}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.label}
              
              {/* The Magic Sliding Underline */}
              {isActive && (
                <S.ActiveIndicator 
                  layoutId={`activeIndicator-${uniqueId}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </S.TabButton>
          );
        })}
      </S.TabList>

      <S.TabPanelWrapper>
        {/* mode="wait" ensures the exit animation finishes before the entry animation starts */}
        <AnimatePresence mode="wait">
          <S.TabContent
            key={activeTabIndex}
            role="tabpanel"
            id={`tabpanel-${uniqueId}-${activeTabIndex}`}
            aria-labelledby={`tab-${uniqueId}-${activeTabIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {tabs[activeTabIndex].content}
          </S.TabContent>
        </AnimatePresence>
      </S.TabPanelWrapper>
    </S.TabsContainer>
  );
}