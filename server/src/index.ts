import { createApp } from './http/app.js'; import { loadConfig } from './config/env.js';
const cfg=loadConfig(); createApp().listen(new URL(cfg.API_URL).port||3000,()=>console.log(JSON.stringify({level:'info',message:'api_started'})));
