import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zrxwtghlnlftcdlumonk.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_be-oOn6pt1gKjPIat_cXUg_pEJxWncL';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)