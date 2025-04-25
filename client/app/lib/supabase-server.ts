import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, serviceRoleKey);
