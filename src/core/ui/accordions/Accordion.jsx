'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './Accordion.styles';

// A simple, elegant SVG Chevron
const ChevronIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function Accordion({ 
  items = [], 
  allowMultiple = false // If true, multiple panels can be open at once
}) {
  // We use a Set for multiple open items, or a single primitive for just one
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = new Set(prevOpenItems);
      
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear(); // Close all others if allowMultiple is false
        }
        newOpenItems.add(index);
      }
      
      return newOpenItems;
    });
  };

  return (
    <S.AccordionContainer $margin="0rem">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <S.ItemWrapper key={index}>
            <S.HeaderButton
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              {item.title}
              <S.IconWrapper
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ChevronIcon />
              </S.IconWrapper>
            </S.HeaderButton>

            <AnimatePresence initial={false}>
              {isOpen && (
                <S.ContentWrapper
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* We accept strings OR custom React nodes as content */}
                  <S.ContentInner>
                    {item.content}
                  </S.ContentInner>
                </S.ContentWrapper>
              )}
            </AnimatePresence>
          </S.ItemWrapper>
        );
      })}
    </S.AccordionContainer>
  );
}