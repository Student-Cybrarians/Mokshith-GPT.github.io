import { z } from 'zod';
const schema = z.object({
  APP_URL: z.string().url().default('http://localhost:3000'),
  API_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development','test','production']).default('development'),
  DATABASE_URL: z.string().default('file:./intellihire.sqlite'),
  REDIS_URL: z.string().optional(),
  SESSION_SECRET: z.string().min(32).default('development-session-secret-change-me-32'),
  GOOGLE_CLIENT_ID: z.string().optional(), GOOGLE_CLIENT_SECRET: z.string().optional(), GOOGLE_REDIRECT_URI: z.string().url().optional(),
  CORS_ORIGINS: z.string().default(''), NVIDIA_API_BASE_URL: z.string().url().default('https://integrate.api.nvidia.com/v1'),
  NVIDIA_API_KEY_NEMOTRON_VL_12B: z.string().optional(), NVIDIA_API_KEY_LLAMA_NEMOTRON_VL_8B: z.string().optional(), NVIDIA_API_KEY_NEMOTRON_9B: z.string().optional(),
  AI_DAILY_BUDGET_UNITS: z.coerce.number().int().positive().default(1000), AI_REQUEST_TIMEOUT_MS: z.coerce.number().int().positive().default(15000)
});
export type AppConfig = z.infer<typeof schema>;
export function loadConfig(input: NodeJS.ProcessEnv = process.env): AppConfig { const cfg=schema.parse(input); if(cfg.NODE_ENV==='production'){ for(const k of ['GOOGLE_CLIENT_ID','GOOGLE_CLIENT_SECRET','GOOGLE_REDIRECT_URI','SESSION_SECRET'] as const){ if(!cfg[k]) throw new Error(`Missing required production config: ${k}`);} if(cfg.SESSION_SECRET.includes('development')) throw new Error('SESSION_SECRET must be changed in production'); } return cfg; }
