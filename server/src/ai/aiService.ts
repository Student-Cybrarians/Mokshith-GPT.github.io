import type { AIProvider, AIRequest } from './provider.js';
export class AIService { constructor(private provider:AIProvider){} generate(req:AIRequest){return this.provider.generate(req);} analyzeText(req:AIRequest){return this.provider.analyzeText(req);} analyzeVision(req:AIRequest){return this.provider.analyzeVision(req);} healthCheck(){return this.provider.healthCheck();} }
