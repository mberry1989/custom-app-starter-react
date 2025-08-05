/**
 * React hook for accessing user information
 */

import { useContext } from 'react';
import { CustomAppContext } from '../components/CustomAppProvider';

/**
 * Hook to get current user information
 * @returns Object with user ID and email, or null if not available
 */
export function useUserInfo(): { userId: string; userEmail: string } | null {
  const context = useContext(CustomAppContext);
  
  if (!context) {
    throw new Error('useUserInfo must be used within a CustomAppProvider');
  }
  
  if (!context.context) {
    return null;
  }
  
  return {
    userId: context.context.userId,
    userEmail: context.context.userEmail,
  };
}