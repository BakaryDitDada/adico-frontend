'use client';

import { useState } from 'react';
import { Newspaper, Calendar, TrendingUp, Users } from 'lucide-react';

import NewsHero from '@/features/website/sections/news/NewsHero';
import NewsFilters from '@/features/website/sections/news/NewsFilters';
import NewsGrid from '@/features/website/sections/news/NewsGrid';
import NewsletterSection from '@/features/website/sections/news/NewsletterSection';

import { PageContainer as NewsPageContainer } from '../Home.styles';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

    const stats = [
      { icon: <Newspaper />, number: '100+', label: 'Articles Publiés', color: '#2563eb' },
      { icon: <Calendar />, number: '24', label: 'Mises à Jour Mensuelles', color: '#10b981' },
      { icon: <TrendingUp />, number: '10K+', label: 'Lecteurs Engagés', color: '#7c3aed' },
      { icon: <Users />, number: '50+', label: 'Auteurs Experts', color: '#f59e0b' }
    ];

  return (
    <NewsPageContainer>
      <NewsHero />
      <NewsFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <NewsGrid 
        searchQuery={searchQuery}
        selectedCategories={selectedCategories}
        selectedYears={selectedYears}
        selectedTags={selectedTags} 
      />
      <NewsletterSection />
    </NewsPageContainer>
  );
}