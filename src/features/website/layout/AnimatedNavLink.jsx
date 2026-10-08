"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  position: relative;
  padding: 0.6rem 0.5rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text.primary};
  display: inline-block;
  overflow: hidden;
`;

const TextContainer = styled(motion.div)`
  display: block;
  position: relative;
`;

const TextPrimary = styled(motion.span)`
  display: block;
`;

const TextSecondary = styled(motion.span)`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const ActivePill = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`;

export default function AnimatedNavLink({ href, isActive, children, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper
      href={href}
      $isActive={isActive}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TextContainer
        animate={{ y: isHovered ? "-120%" : "0%" }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <TextPrimary>{children}</TextPrimary>
        <TextSecondary aria-hidden="true">{children}</TextSecondary>
      </TextContainer>

      {isActive && (
        <ActivePill
          layoutId="activeNavIndicator"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </LinkWrapper>
  );
}