const { createClient } = require("@supabase/supabase-js");

const initializeSupabase = () => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  return supabase;
};

module.exports = initializeSupabase;