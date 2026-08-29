"use client";

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Shield,
  Target,
  Users,
  Award,
  Briefcase,
  Heart,
  Zap,
  Leaf,
  Cloud,
  Droplets,
  Sun,
  Wind,
  TreePine,
  Banknote,
  TrendingUp,
  Network,
  Star,
  Building,
  Factory,
  Store,
  Warehouse,
} from "lucide-react";
import {
  PartnersLogosContainer,
  PartnersContent,
  SectionTitle,
  SectionSubtitle,
  LogosWrapper,
  LogosTrack,
  LogoItem,
  LogoIcon,
  LogoName,
  PauseButton,
  Controls,
} from "./PartnersLogos.styles";
import { BenefitItem, CollaborationBenefits, CollaborationDescription, CollaborationSection, CollaborationTitle } from "./PartnersSection.styles";
import { Handshake } from "lucide-react";
import homeContent from "@/core/data/homeContent";

const partners = homeContent?.partners;

// Duplicate partners for seamless infinite scroll
const duplicatedPartners = [...partners.data, ...partners.data];

export default function PartnersLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState("left"); // 'left' or 'right'

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    let lastTime = performance.now();

    const speed = 30; // pixels per second (⬅️ adjust this)

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && !isHovered) {
        const movement = (speed * delta) / 1000;

        position += direction === "left" ? -movement : movement;

        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isHovered, direction]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const changeDirection = () => {
    setDirection(direction === "left" ? "right" : "left");
  };

  return (
    <PartnersLogosContainer>
      <PartnersContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>{partners?.title}</SectionTitle>

          <SectionSubtitle>{partners.subtitle}</SectionSubtitle>

          <LogosWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <LogosTrack
              ref={trackRef}
              direction={direction}
              $isPaused={isPaused || isHovered}
            >
              {duplicatedPartners.map((partner, index) => (
                <LogoItem key={`${partner.name}-${index}`}>
                  <LogoIcon color={partner.color}>{partner.icon}</LogoIcon>
                  <LogoName>{partner.name}</LogoName>
                </LogoItem>
              ))}
            </LogosTrack>
          </LogosWrapper>

          <Controls>
            <PauseButton
              onClick={togglePause}
              $isPaused={isPaused}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPaused ? "▶️" : "⏸️"}
              <span>{isPaused ? "Reprendre" : "Pause"}</span>
            </PauseButton>

            <PauseButton
              onClick={changeDirection}
              $isPaused={false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginLeft: "10px" }}
            >
              {direction === "left" ? "➡️" : "⬅️"}
              <span>Changer direction</span>
            </PauseButton>
          </Controls>
        </motion.div>
      </PartnersContent>
      
      <div style={{ width: '85%', margin: '40px auto', }}>
        <CollaborationSection $bg="primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CollaborationTitle>
              <Handshake size={24} />
              Avantages de la Collaboration
            </CollaborationTitle>

            <CollaborationDescription>
              Nos partenariats stratégiques permettent de créer des synergies et
              d&apos;amplifier l&apos;impact de nos interventions.
            </CollaborationDescription>

            <CollaborationBenefits>
              {partners?.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BenefitItem>
                    <Award size={16} />
                    {benefit}
                  </BenefitItem>
                </motion.div>
              ))}
            </CollaborationBenefits>
          </motion.div>
        </CollaborationSection>
      </div>
    </PartnersLogosContainer>
  );
}
