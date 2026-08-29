'use client';

import { motion } from 'framer-motion';
import { FileText, Download, BookOpen } from 'lucide-react';
import * as S from './DocumentsHero.styles';

export default function DocumentsHero() {
  const stats = [
    { icon: <FileText size={24} />, number: '150+', label: 'Documents' },
    { icon: <Download size={24} />, number: '12K+', label: 'Téléchargements' },
    { icon: <BookOpen size={24} />, number: '45', label: 'Publications' },
  ];

  return (
    <S.HeroWrapper>
      <S.HeroTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Centre de <span>documentation</span>
      </S.HeroTitle>
      <S.HeroSubtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Accédez à nos rapports, études, guides techniques et publications officielles.
      </S.HeroSubtitle>
      <S.StatsGrid
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {stats.map((stat, idx) => (
          <S.StatItem key={idx}>
            <div className="icon">{stat.icon}</div>
            <div className="number">{stat.number}</div>
            <div className="label">{stat.label}</div>
          </S.StatItem>
        ))}
      </S.StatsGrid>
    </S.HeroWrapper>
  );
}