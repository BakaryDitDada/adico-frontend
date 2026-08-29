'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Sprout, Droplets, Target } from 'lucide-react';
import {
  StatsSectionContainer,
  StatsContent,
  SectionTitle,
  SectionSubtitle,
  StatsGrid,
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel
} from './StatsSection.styles';
import homeContent from '@/core/data/homeContent';

const stats = homeContent?.stats;

function AnimatedCounter({ endValue, suffix, duration }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        setCount(Math.floor(endValue * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, endValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <StatsSectionContainer>
      <StatsContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>{stats?.title}</SectionTitle>
          <SectionSubtitle>{stats?.subtitle}</SectionSubtitle>
          
          <StatsGrid>
            {stats?.data.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <StatCard>
                  <StatIcon color={stat.color}>
                    {stat.icon}
                  </StatIcon>
                  
                  <StatNumber>
                    <AnimatedCounter
                      endValue={stat.endValue}
                      suffix={stat.suffix}
                      duration={stat.duration}
                    />
                  </StatNumber>
                  
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </motion.div>
            ))}
          </StatsGrid>
        </motion.div>
      </StatsContent>
    </StatsSectionContainer>
  );
}