'use client';

import { useSelector } from 'react-redux';
import RequireAuth from '@/core/utils/auth/RequireAuth';
import Sidebar from '@/features/platform/layout/Sidebar';
import Topbar from '@/features/platform/layout/Topbar';
import * as S from '@/features/platform/layout/PlatformLayout.styles';
import ChatWidget from '@/features/platform/ai/ChatWidget';
import Loading from '@/features/common/Loading';

export default function PlatformLayout({ children }) {
  const { sidebarCollapsed } = useSelector((state) => state.global);

  return (
    <RequireAuth LoadingComponent={<Loading variant='fullscreen' size='lg'/>}>
      <S.LayoutContainer>
        <Sidebar />
        <S.MainContent collapsed={sidebarCollapsed ? "true" : "false"}>
          <Topbar />
          <S.PageWrapper>{children}</S.PageWrapper>
          <ChatWidget />
        </S.MainContent>
      </S.LayoutContainer>
    </RequireAuth>
      
  );
}

// import RequireAuth from '@/utils/auth/RequireAuth';

// const PlatformLayout = ({
//   children
// }) => {
//   return (
//     <RequireAuth>
//       {children}
//     </RequireAuth>
//   )
// }

// export default PlatformLayout