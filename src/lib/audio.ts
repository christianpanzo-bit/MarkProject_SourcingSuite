/**
 * Audio helper for playing phrases using Web Speech API or Gemini TTS fallback
 */

export interface PlayPhraseOptions {
  text: string;
  languageCode?: string; // e.g. "de", "fr", "es", "ja", "zh", "hi"
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  useGeminiTts?: boolean;
}

export function speakText(options: PlayPhraseOptions) {
  const { text, languageCode = 'en', onStart, onEnd, onError, useGeminiTts = false } = options;

  if (useGeminiTts) {
    playGeminiTts(text, onStart, onEnd, onError);
    return;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop active speech

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map language code to BCP 47 tag
    const langMap: Record<string, string> = {
      de: 'de-DE',
      fr: 'fr-FR',
      it: 'it-IT',
      es: 'es-ES',
      ja: 'ja-JP',
      zh: 'zh-CN',
      hi: 'hi-IN',
      sw: 'sw-KE',
      fil: 'fil-PH',
      pt: 'pt-BR',
      uk: 'uk-UA',
      th: 'th-TH',
      ar: 'ar-EG',
      en: 'en-US'
    };

    utterance.lang = langMap[languageCode.toLowerCase()] || languageCode || 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity

    utterance.onstart = () => onStart?.();
    utterance.onend = () => onEnd?.();
    utterance.onerror = (e) => {
      console.warn('Speech synthesis error, trying Gemini fallback:', e);
      playGeminiTts(text, onStart, onEnd, onError);
    };

    window.speechSynthesis.speak(utterance);
  } else {
    playGeminiTts(text, onStart, onEnd, onError);
  }
}

async function playGeminiTts(
  text: string,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: any) => void
) {
  try {
    onStart?.();
    const res = await fetch('/api/gemini/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) {
      throw new Error(`TTS API returned ${res.status}`);
    }

    const data = await res.json();
    if (data.audioBase64) {
      // Decode raw audio or play base64
      const audio = new Audio(`data:${data.mimeType || 'audio/mp3'};base64,${data.audioBase64}`);
      audio.onended = () => onEnd?.();
      audio.onerror = (e) => onError?.(e);
      await audio.play();
    } else {
      throw new Error('No audio returned');
    }
  } catch (err) {
    console.warn('Failed to play audio:', err);
    onEnd?.();
    onError?.(err);
  }
}
