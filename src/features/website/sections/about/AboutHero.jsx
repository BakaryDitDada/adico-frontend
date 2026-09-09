'use client';

import { motion } from 'framer-motion';
import * as S from './AboutHero.styles';
import PageHero from '../PageHero';

export default function AboutHero() {

  return (
    <PageHero
      subtitle="ADICO en Action"
      bgImage="/images/adico-community-meeting.jpg"
      align="center"
    >
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <S.HeroTitle>
            A <span className="gradient-text">Propos</span> d&apos;<span className="gradient-text">ADICO</span> et de son Plan d&apos;<span className="gradient-text">Action</span>
          </S.HeroTitle>
          
          <S.HeroDescription>
            ADICO est une organisation communautaire qui s&apos;engage à promouvoir le développement durable et l&apos;innovation dans notre communauté. Nous croyons en la puissance de la collaboration et de l&apos;action collective pour créer un avenir meilleur pour tous.
          </S.HeroDescription>
          
        </motion.div>
    </PageHero>
  );
}