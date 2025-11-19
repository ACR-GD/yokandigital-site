import { Router } from "express";
import OpenAI from "openai";
import { z } from "zod";

const router = Router();

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const chatMessageSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string(),
  })),
  language: z.enum(['en', 'ms']).default('en'),
});

router.post("/chat", async (req, res) => {
  try {
    const { messages, language } = chatMessageSchema.parse(req.body);
    
    const systemPrompt = language === 'en' 
      ? `You are a helpful digital marketing assistant for Yokan Digital, a Malaysian web design and SEO agency. 
         You help potential clients understand our services including web design, SEO, digital marketing, Google Ads, and social media marketing.
         Be friendly, professional, and concise. If asked about pricing, explain we offer custom quotes based on needs and encourage booking a free consultation.
         Key services: Web Design (RM2,500-15,000), SEO Services, Google Ads Management, Social Media Marketing, Complete Digital Packages.
         Always encourage users to book a free consultation for detailed information.`
      : `Anda adalah pembantu pemasaran digital yang membantu untuk Yokan Digital, agensi reka bentuk web dan SEO Malaysia.
         Anda membantu bakal pelanggan memahami perkhidmatan kami termasuk reka bentuk web, SEO, pemasaran digital, Google Ads, dan pemasaran media sosial.
         Bersikap mesra, profesional, dan ringkas. Jika ditanya tentang harga, jelaskan kami menawarkan sebut harga tersuai berdasarkan keperluan dan galakkan tempah perundingan percuma.
         Perkhidmatan utama: Reka Bentuk Web (RM2,500-15,000), Perkhidmatan SEO, Pengurusan Google Ads, Pemasaran Media Sosial, Pakej Digital Lengkap.
         Sentiasa galakkan pengguna untuk menempah perundingan percuma untuk maklumat terperinci.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0].message.content;

    res.json({ 
      success: true, 
      message: assistantMessage,
      usage: completion.usage 
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(400).json({ 
      success: false, 
      error: "Failed to process chat message" 
    });
  }
});

export default router;
