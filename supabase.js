//import { createClient } from 'https://esm.hu/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://zrxwtghlnlftcdlumonk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_be-oOn6pt1gKjPIat_cXUg_pEJxWncL';

export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)