import React, { useState } from 'react';
import { Sparkles, Send, Loader2, MessageSquare, Compass, ShieldAlert, Award } from 'lucide-react';

export const AiTravelAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am your AI Language & Travel Coach powered by Gemini. Ask me anything about languages spoken in any country, survival phrase translations, etiquette, dialects, or code-switching norms!',
    },
  ]);

  const quickPrompts = [
    'What languages should I learn before traveling to Switzerland?',
    'How do locals code-switch between English and Singlish in Singapore?',
    'Explain the 12 official languages of South Africa and where they are spoken.',
    'Give me polite restaurant greetings in Japanese, Tagalog, and Swahili.',
  ];

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || prompt;
    if (!messageText.trim() || loading) return;

    const userMsg = { role: 'user' as const, text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini/country-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: messageText,
          languages: [],
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();

      let reply = '';
      if (data.summary) {
        reply = `${data.summary}\n\n**Historical Context:**\n${data.historicalContext || ''}\n\n**Travel Etiquette & Tips:**\n${(data.travelTips || []).map((t: string) => `• ${t}`).join('\n')}\n\n**Code-Switching Norms:**\n${data.codeSwitchingAndEtiquette || ''}`;
      } else {
        reply = 'Gemini provided insights for your query. Keep practicing local greetings!';
      }

      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Sorry, I encountered an issue fetching AI insights. Please ensure your Gemini API key is configured in Settings > Secrets.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">

      {/* Suggested Quick Prompts */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-emerald-600" />
          Suggested Questions
        </div>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              disabled={loading}
              className="text-xs bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 font-medium px-3 py-2 rounded-xl transition text-left"
            >
              "{qp}"
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col h-[500px]">
        <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            AI Language Session
          </span>
          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
            Gemini Active
          </span>
        </div>

        <div className="p-4 overflow-y-auto flex-1 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white font-medium rounded-tr-none shadow-sm'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/80'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-xs text-slate-500">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <span>Gemini is generating linguistic advice...</span>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-slate-50 border-t border-slate-200 flex gap-2"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask about languages, greetings, scripts, or country etiquette..."
            className="flex-1 bg-white border border-slate-300 text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600"
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
};
