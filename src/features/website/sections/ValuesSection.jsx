'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Users, Target, Shield, TrendingUp, Globe, Award } from 'lucide-react';
import {
  ValuesSectionContainer,
  ValuesContent,
  SectionTitle,
  SectionSubtitle,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  ValuesQuote
} from './ValuesSection.styles';
import homeContent from '@/core/data/homeContent';

const values = homeContent?.values;

export default function ValuesSection() {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <ValuesSectionContainer>
      <ValuesContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <SectionTitle>{values.title}</SectionTitle> */}
          <SectionTitle>Nos <span>Valeurs</span> Fondamentales</SectionTitle>
          
          <SectionSubtitle>{values.subtitle}</SectionSubtitle>

          <ValuesGrid>
            {values?.data.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                onMouseEnter={() => setHoveredValue(value.id)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <ValueCard
                  $isHovered={hoveredValue === value.id}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <ValueIcon color={value.color}>
                    {value.icon}
                  </ValueIcon>
                  
                  <ValueTitle>{value.title}</ValueTitle>
                  
                  <ValueDescription>
                    {value.description}
                  </ValueDescription>
                </ValueCard>
              </motion.div>
            ))}
          </ValuesGrid>

          <ValuesQuote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Nos valeurs ne sont pas seulement des mots sur un mur, 
                ce sont des engagements concrets qui guident chaque projet, 
                chaque décision et chaque relation.
              </p>
              <span>- L&apos;Équipe ADICO</span>
            </motion.div>
          </ValuesQuote>
        </motion.div>
      </ValuesContent>
    </ValuesSectionContainer>
  );
}