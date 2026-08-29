'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { Shield, Target, Users, Leaf, Heart, Zap } from 'lucide-react';

import { SectionContainer, SectionContent, SectionTitle, SectionSubtitle } from '@/core/styles/pages/about.styles';
import * as S from "./ValuesSection.styles";
import { valuesData } from '@/core/data/aboutContent';

export default function AboutValuesSection() {
  const theme = useTheme();

  const values = valuesData?.values;

  return (
    <SectionContainer style={{ backgroundColor: theme.colors.background.primary }}>
      <SectionContent>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <SectionTitle>
            Nos <span>Valeurs</span> Fondamentales
          </SectionTitle>

          <SectionSubtitle>
            {valuesData?.description}
          </SectionSubtitle>

          <S.ValuesGrid>
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <S.ValueCard
                  key={value.title}
                  $color={value.color}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >

                  <S.ValueIcon className="value-icon" $color={value.color}>
                    <Icon />
                  </S.ValueIcon>

                  <S.ValueTitle>{value.title}</S.ValueTitle>
                  <S.ValueDescription>{value.description}</S.ValueDescription>

                </S.ValueCard>
              );
            })}
          </S.ValuesGrid>

        </motion.div>

      </SectionContent>
    </SectionContainer>
  );
}