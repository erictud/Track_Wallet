import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://huasnthzyfnulyqacuph.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1YXNudGh6eWZudWx5cWFjdXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzAxNDcsImV4cCI6MjAxNjkwNjE0N30.eUa1GJBugcZ2K5y1aIQiy8HeQn-KUmRCm3QOFm-DboI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
