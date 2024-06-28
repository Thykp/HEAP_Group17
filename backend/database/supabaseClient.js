const { SUPABASE_API_URL, SUPABASE_ANON_KEY } = process.env;
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY)
module.exports = { supabase };
