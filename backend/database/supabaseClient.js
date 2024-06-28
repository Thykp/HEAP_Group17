import { createClient } from '@supabase/supabase-js'
const { SUPABASE_API_URL, SUPABASE_ANON_KEY } = process.env;
const supabase = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY)

module.exports = { supabase };
