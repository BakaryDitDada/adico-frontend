'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Award, Calendar, Target } from 'lucide-react';
import {
  AchievementsSectionContainer,
  AchievementsContent,
  SectionTitle,
  SectionSubtitle,
  AchievementsGrid,
  AchievementCard,
  AchievementIcon,
  AchievementYear,
  AchievementTitle,
  AchievementDescription,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineDate
} from './AchievementsSection.styles';
import homeContent from '@/core/data/homeContent';

export default function AchievementsSection() {
  return (
    <AchievementsSectionContainer>
      <AchievementsContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Nos <span>Réalisations</span> Phares
          </SectionTitle>
          
          <SectionSubtitle>
            Des projets concrets qui transforment la vie des communautés vulnérables et 
            contribuent au développement durable.
          </SectionSubtitle>

          <AchievementsGrid>
            {homeContent.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AchievementCard>
                  <AchievementIcon color={achievement.color}>
                    {achievement.icon}
                  </AchievementIcon>
                  
                  <AchievementYear>{achievement.year}</AchievementYear>
                  
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  
                  <AchievementDescription>
                    {achievement.description}
                  </AchievementDescription>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '15px',
                    color: achievement.color,
                    fontSize: '14px'
                  }}>
                    <CheckCircle size={16} />
                    <span>Projet Réussi</span>
                  </div>
                </AchievementCard>
              </motion.div>
            ))}
          </AchievementsGrid>

          {/* Timeline View for Mobile */}
          <Timeline>
            {homeContent.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineItem>
                  <TimelineDot color={achievement.color} />
                  
                  <TimelineContent>
                    <TimelineDate>{achievement.year}</TimelineDate>
                    <h4 style={{
                      color: 'var(--text-primary)',
                      marginBottom: '5px',
                      fontSize: '1.125rem'
                    }}>
                      {achievement.title}
                    </h4>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9375rem',
                      margin: 0
                    }}>
                      {achievement.description}
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </motion.div>
      </AchievementsContent>
    </AchievementsSectionContainer>
  );
}