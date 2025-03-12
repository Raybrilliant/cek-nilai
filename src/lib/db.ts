
import { env } from '$env/dynamic/public'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = env.PUBLIC_SUPABASE_URL
const supabaseKey = env.PUBLIC_SUPABASE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase