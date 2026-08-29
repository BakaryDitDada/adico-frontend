'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { Target, Eye, Trophy } from 'lucide-react';

import * as S from "./MissionVision.styles";
import { missionAndVision } from '@/core/data/aboutContent';

export default function MissionVision() {
  const theme = useTheme();

  const cards = missionAndVision?.cards;

  return (
    <S.SectionContainer style={{ backgroundColor: theme.colors.background.secondary }}>
      <S.SectionContent>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <S.SectionTitle>
            Notre <span>Raison d&apos;Être</span>
            {/* {missionAndVision?.title} */}
          </S.SectionTitle>

          <S.SectionSubtitle>
            {missionAndVision?.description}
          </S.SectionSubtitle>

          <S.Grid>
            {cards.map((card, index) => (
              <S.Card
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <S.CardIcon color={card.color}>
                  {card.icon}
                </S.CardIcon>

                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardDescription>{card.description}</S.CardDescription>

                <S.List>
                  {card.points.map((item, itemIndex) => (
                    <S.ListItem
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * itemIndex }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </S.ListItem>
                  ))}
                </S.List>

              </S.Card>
            ))}
          </S.Grid>

        </motion.div>

      </S.SectionContent>
    </S.SectionContainer>
  );
}