import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nuaefpqsbkppywcuuxmo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YWVmcHFzYmtwcHl3Y3V1eG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjc0ODEsImV4cCI6MjA2Njc0MzQ4MX0.i2O35GGSAmJ_DhOFQnMA1XSrhaITNGnOo1qAzd9SQHs';

export const supabase = createClient(supabaseUrl, supabaseKey); 