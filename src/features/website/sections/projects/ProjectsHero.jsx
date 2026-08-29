'use client';

import { motion } from 'framer-motion';
import { FolderTree, Map, Target, Users } from 'lucide-react';
import * as S from './ProjectsHero.styles';
import { projectsHero } from '@/core/data/projectsContent';

export default function ProjectsHero() {
  const stats = projectsHero?.stats;

  return (
    <S.HeroContainer>
      <S.HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <S.HeroTitle>
            Nos <span className="gradient-text">Projets</span> de{' '}
            <span className="gradient-text">Développement</span>
          </S.HeroTitle>
          
          <S.HeroDescription>
            {projectsHero?.description}
          </S.HeroDescription>
          
          <S.StatsGrid
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <S.StatCard>
                  <S.StatIcon color={stat.color}>
                    {stat.icon}
                  </S.StatIcon>
                  <S.StatNumber>{stat.number}</S.StatNumber>
                  <S.StatLabel>{stat.label}</S.StatLabel>
                </S.StatCard>
              </motion.div>
            ))}
          </S.StatsGrid>
        </motion.div>
      </S.HeroContent>
    </S.HeroContainer>
  );
}