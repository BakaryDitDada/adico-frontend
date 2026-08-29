'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, Droplets, Users, Target, 
  Building2, TrendingUp, Shield, Globe 
} from 'lucide-react';
import {
  FeaturesSectionContainer,
  FeaturesContent,
  SectionTitle,
  SectionSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  FeatureButton
} from './FeaturesSection.styles';
import homeContent from '@/core/data/homeContent';

// Put this inside "homeContent"
const features = homeContent?.features;

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <FeaturesSectionContainer>
      <FeaturesContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>{features.title}</SectionTitle>
          <SectionSubtitle>{features.subtitle}</SectionSubtitle>
          
          <FeaturesGrid>
            {features?.data.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <FeatureCard
                  $isHovered={hoveredCard === feature.id}
                  whileHover={{ y: -8 }}
                >
                  <FeatureIcon color={feature.color}>
                    {feature.icon}
                  </FeatureIcon>
                  
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  
                  <FeatureButton
                    href="/about"
                    $isHovered={hoveredCard === feature.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </FeatureButton>
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>
        </motion.div>
      </FeaturesContent>
    </FeaturesSectionContainer>
  );
}