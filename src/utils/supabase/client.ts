import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Crea il client Supabase solo se le credenziali sono disponibili
export const getSupabaseClient = () => {
  if (!projectId || !publicAnonKey) {
    return null;
  }

  const supabaseUrl = `https://${projectId}.supabase.co`;
  return createClient(supabaseUrl, publicAnonKey);
};
