'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
// import { contactConfig } from '@/data/contactConfig';
import homeContent from '@/core/data/homeContent';
import { SectionContainer, SectionContent } from '@/core/styles/pages/contact.styles';

const contactConfig = homeContent?.contacts;

const MAP_CONFIG = {
  center: [12.6392, -8.0029], // Bamako, Mali
  zoom: 12,
  popupText: `
    <div class="custom-leaflet-popup">
      <h3 style="margin: 0 0 8px 0; color: #1e293b; font-size: 16px; font-weight: 700;">ONG ADICO - Siège Social</h3>
      <p style="margin: 0; color: #475569; font-size: 13px; line-height: 1.5;">
        <strong>Adresse:</strong> ${contactConfig.address.full} <br>
        <strong>Téléphone:</strong> ${contactConfig.phone.display} <br>
        <strong>Email:</strong> ${contactConfig.email.primary} <br>
        <strong>Heures d'ouverture:</strong> ${contactConfig.hours.weekdays}
      </p>
    </div>
  `,
  tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
};

// 2. Consolidate styling into styled-components
const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const Highlight = styled.span`
  color: var(--primary);
`;

const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background || '#f3f4f6'}; // Loading skeleton color

  & .custom-leaflet-popup {
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text || '#333'};
  }
`;

export default function ContactMap() {
  const mapNodeRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      // Prevent re-initialization
      if (!mapNodeRef.current || mapInstanceRef.current) return;

      // 4. Dynamically import Leaflet to bypass Next.js SSR window errors
      const L = (await import('leaflet')).default;
      
      if (!isMounted) return;

      // 5. Create a local icon instance instead of mutating the global prototype
      const customIcon = L.icon({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Pass the DOM node directly to Leaflet
      const map = L.map(mapNodeRef.current, {
        tap: false, // 👈 FIX: Prevents the page from jumping to top on marker click
        scrollWheelZoom: false // 👈 BONUS UX: Prevents the map from hijacking page scroll
      }).setView(MAP_CONFIG.center, MAP_CONFIG.zoom);

      L.tileLayer(MAP_CONFIG.tileLayer, {
        attribution: MAP_CONFIG.attribution
      }).addTo(map);

      L.marker(MAP_CONFIG.center, { icon: customIcon })
        .addTo(map)
        .bindPopup(MAP_CONFIG.popupText)
        .openPopup();

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <SectionContainer>
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>
            Notre <Highlight>localisation</Highlight>
          </Title>
          <MapWrapper 
            ref={mapNodeRef} 
            aria-label="Interactive map showing our location in Kita, Mali" 
            role="region"
          />
        </motion.div>
      </SectionContent>
    </SectionContainer>
  );
}