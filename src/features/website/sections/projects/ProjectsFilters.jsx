'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { SectionContainer, SectionContent } from '@/core/styles/pages/projects.styles';
import * as S from './ProjectsFilters.styles';

const CATEGORY_MAP = {
  autonomisation: 'Autonomisation & Genre',
  education: 'Éducation Inclusive',
  environnement: 'Protection Environnementale',
  microfinance: 'Microfinance & AGR',
  sante: 'Santé & Nutrition',
  gouvernance: 'Gouvernance Locale'
};

const STATUS_MAP = {
  'en-cours': 'En cours',
  acheve: 'Achevé',
  planifie: 'Planifié'
};

export default function ProjectsFilters({
  searchQuery,
  category,
  status,
  region,
  year,
  setCategory,
  setSearchQuery,
  setStatus,
  setRegion,
  setYear
}) {
  const hasActiveFilters = category || status || region || year || searchQuery;

  const clearFilters = () => {
    setSearchQuery('');
    setCategory('');
    setStatus('');
    setRegion('');
    setYear('');
  };

  const removeFilter = (type) => {
    switch (type) {
      case 'category':
        setCategory('');
        break;
      case 'status':
        setStatus('');
        break;
      case 'region':
        setRegion('');
        break;
      case 'year':
        setYear('');
        break;
      default:
        break;
    }
  };

  return (
    <SectionContainer>
      <SectionContent>
        <S.FiltersContainer>
          <S.FiltersHeader>
            <h3>
              <Filter size={20} />
              Filtrer les projets
            </h3>
            {hasActiveFilters && (
              <S.ClearButton
                onClick={clearFilters}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tout effacer
              </S.ClearButton>
            )}
          </S.FiltersHeader>

          <S.SearchBar>
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </S.SearchBar>

          <S.FiltersGrid>
            <S.FilterGroup>
              <label>Catégorie</label>
              <S.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Toutes</option>
                <option value="autonomisation">Autonomisation & Genre</option>
                <option value="education">Éducation Inclusive</option>
                <option value="environnement">Protection Environnementale</option>
                <option value="microfinance">Microfinance & AGR</option>
                <option value="sante">Santé & Nutrition</option>
                <option value="gouvernance">Gouvernance Locale</option>
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <label>Statut</label>
              <S.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Tous</option>
                <option value="en-cours">En cours</option>
                <option value="acheve">Achevé</option>
                <option value="planifie">Planifié</option>
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <label>Région</label>
              <S.Select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Toutes</option>
                <option value="Koulikoro">Koulikoro</option>
                <option value="Ségou">Ségou</option>
                <option value="Sikasso">Sikasso</option>
                <option value="Mopti">Mopti</option>
                <option value="Gao">Gao</option>
                <option value="Bamako">Bamako</option>
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <label>Année</label>
              <S.Select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Toutes</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </S.Select>
            </S.FilterGroup>
          </S.FiltersGrid>

          {hasActiveFilters && (
            <S.ActiveFilters>
              {searchQuery && (
                <S.FilterTag>
                  Recherche: {searchQuery}
                  <button onClick={() => setSearchQuery('')}>
                    <X size={14} />
                  </button>
                </S.FilterTag>
              )}
              {category && (
                <S.FilterTag>
                  Catégorie: {CATEGORY_MAP[category] || category}
                  <button onClick={() => removeFilter('category')}>
                    <X size={14} />
                  </button>
                </S.FilterTag>
              )}
              {status && (
                <S.FilterTag>
                  Statut: {STATUS_MAP[status] || status}
                  <button onClick={() => removeFilter('status')}>
                    <X size={14} />
                  </button>
                </S.FilterTag>
              )}
              {region && (
                <S.FilterTag>
                  Région: {region}
                  <button onClick={() => removeFilter('region')}>
                    <X size={14} />
                  </button>
                </S.FilterTag>
              )}
              {year && (
                <S.FilterTag>
                  Année: {year}
                  <button onClick={() => removeFilter('year')}>
                    <X size={14} />
                  </button>
                </S.FilterTag>
              )}
            </S.ActiveFilters>
          )}
        </S.FiltersContainer>
      </SectionContent>
    </SectionContainer>
  );
}