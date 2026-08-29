import React from 'react';
import RequireAuth from '@/core/utils/auth/RequireAuth';

const PlatformLayout = ({
  children
}) => {
  return (
    <RequireAuth>
      { children }
    </RequireAuth>
  )
}

export default PlatformLayout