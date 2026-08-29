'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Calendar, Users, ArrowRight, Droplets, Sprout, Building } from 'lucide-react';
import { SectionContainer, SectionContent } from '@/core/styles/pages/projects.styles';
import * as S from './ProjectsGrid.styles';
import { projectsData } from '@/core/data/projectsContent';

export default function ProjectsGrid({
    searchQuery,
    category,
    status,
    region,
    year,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const normalize = (value = '') =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const filteredProjects = projectsData.filter((project) => {
    const normalizedQuery = normalize(searchQuery);

    const matchesSearch =
      normalizedQuery === '' ||
      normalize(project.title).includes(normalizedQuery) ||
      normalize(project.description).includes(normalizedQuery);

    const matchesCategory =
      category === '' || project.category === category;

    const matchesYear =
      year === '' || project.startDate === year;

    const matchesStatus =
      status === '' || project.status === status;

    const matchesRegion =
      region === '' ||
      normalize(project.location) === normalize(region);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesYear &&
      matchesStatus &&
      matchesRegion
    );
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const getStatusLabel = (status) => {
    const labels = {
      'en-cours': 'En cours',
      'acheve': 'Achevé',
      'planifie': 'Planifié'
    };
    return labels[status] || status;
  };

  return (
    <SectionContainer>
      <SectionContent>
        <S.ResultsInfo>
          <strong>{filteredProjects.length}</strong> Projets
        </S.ResultsInfo>
        <S.GridContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={`page-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <S.ProjectsGridWrapper>
                {paginatedProjects.map((project, index) => (
                  <S.ProjectCard
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <S.CardImage>
                      <div 
                        className="card-image"
                        style={{
                          background: `linear-gradient(135deg, ${project.category === 'hydraulique' ? '#2563eb' : project.category === 'agricole' ? '#10b981' : '#7c3aed'}20, ${project.category === 'hydraulique' ? '#2563eb' : project.category === 'agricole' ? '#10b981' : '#7c3aed'}05)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {project.categoryIcon}
                      </div>
                      <span className={`status-badge ${project.status}`}>
                        {getStatusLabel(project.status)}
                      </span>
                    </S.CardImage>
                    
                    <S.CardContent>
                      <S.CardCategory>
                        {project.categoryIcon}
                        {project.categoryLabel}
                      </S.CardCategory>
                      
                      <S.CardTitle>
                        <Link href={`/projects/${project.id}`}>
                          {project.title}
                        </Link>
                      </S.CardTitle>
                      
                      <S.CardDescription>
                        {project.description}
                      </S.CardDescription>
                      
                      <S.CardMeta>
                        <span className="meta-item">
                          <MapPin size={16} />
                          {project.location}
                        </span>
                        <span className="meta-item">
                          <Calendar size={16} />
                          Début: {project.startDate}
                        </span>
                        {project.beneficiaries && (
                          <span className="meta-item">
                            <Users size={16} />
                            {project.beneficiaries} bénéficiaires
                          </span>
                        )}
                      </S.CardMeta>
                      
                      <S.CardFooter>
                        {project.status === 'en-cours' && (
                          <>
                            <S.ProgressBar $progress={project.progress}>
                              <div className="progress-fill" />
                            </S.ProgressBar>
                            <S.ProgressText>{project.progress}%</S.ProgressText>
                          </>
                        )}
                        {project.status === 'acheve' && (
                          <S.ProgressText style={{ color: '#10b981' }}>
                            Projet terminé
                          </S.ProgressText>
                        )}
                        {project.status === 'planifie' && (
                          <S.ProgressText style={{ color: '#f59e0b' }}>
                            À venir
                          </S.ProgressText>
                        )}
                        <S.ReadMore href={`/projects/${project.id}`}>
                          Détails
                          <ArrowRight size={14} />
                        </S.ReadMore>
                      </S.CardFooter>
                    </S.CardContent>
                  </S.ProjectCard>
                ))}
              </S.ProjectsGridWrapper>
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <S.Pagination>
              <S.PageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ←
              </S.PageButton>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <S.PageButton
                  key={page}
                  $active={currentPage === page}
                  onClick={() => handlePageChange(page)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page}
                </S.PageButton>
              ))}
              
              <S.PageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                →
              </S.PageButton>
            </S.Pagination>
          )}
        </S.GridContainer>
      </SectionContent>
    </SectionContainer>
  );
}