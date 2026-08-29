'use client';

import { useState } from 'react';

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