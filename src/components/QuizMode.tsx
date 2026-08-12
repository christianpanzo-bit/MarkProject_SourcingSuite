import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, Sparkles, Loader2 } from 'lucide-react';

const INITIAL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'How many official languages does Switzerland constitutionally protect?',
    options: ['2 (French, German)', '3 (French, German, Italian)', '4 (German, French, Italian, Romansh)', '5 (German, French, Italian, Romansh, English)'],
    correctIndex: 2,
    explanation: 'Switzerland has 4 national official languages: German (62.6%), French (22.9%), Italian (8.2%), and Romansh (0.5%).',
  },
  {
    id: 2,
    question: 'Which country recently recognized South African Sign Language as its 12th official language in 2023?',
    options: ['Nigeria', 'South Africa', 'Kenya', 'Ethiopia'],
    correctIndex: 1,
    explanation: 'South Africa added SASL as its 12th official language in July 2023.',
  },
  {
    id: 3,
    question: 'Which nation holds the world record for the highest number of living indigenous languages spoken (over 840 languages)?',
    options: ['India', 'Papua New Guinea', 'Brazil', 'Indonesia'],
    correctIndex: 1,
    explanation: 'Papua New Guinea is home to over 840 distinct living indigenous languages.',
  },
  {
    id: 4,
    question: 'In Paraguay, which indigenous language is spoken by the vast majority of non-indigenous citizens alongside Spanish?',
    options: ['Quechua', 'Aymara', 'Guaraní', 'Nahuatl'],
    correctIndex: 2,
    explanation: 'Guaraní is an official national language spoken by over 87% of Paraguayans.',
  },
  {
    id: 5,
    question: 'What is the designated ceremonial National Language of Singapore (whose national anthem is sung strictly in this language)?',
    options: ['English', 'Mandarin Chinese', 'Malay', 'Tamil'],
    correctIndex: 2,
    explanation: 'Malay is Singapore’s designated ceremonial National Language, and its anthem "Majulah Singapura" is sung in Malay.',
  },
];

export const QuizMode: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(INITIAL_QUIZ);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loadingAiQuiz, setLoadingAiQuiz] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setQuestions(INITIAL_QUIZ);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleGenerateAiQuiz = async () => {
    setLoadingAiQuiz(true);
    try {
      const res = await fetch('/api/gemini/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ region: 'Global', difficulty: 'medium' }),
      });

      if (!res.ok) throw new Error('Failed to fetch AI quiz');
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setQuizFinished(false);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingAiQuiz(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Main Quiz Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
        {!quizFinished ? (
          <div className="space-y-6">
            
            {/* Header progress */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <span>
                  Question <strong className="text-slate-900">{currentIndex + 1}</strong> of {questions.length}
                </span>
                <span className="text-[#4B286D] font-bold bg-[#F4EFF9] px-2.5 py-0.5 rounded-full border border-purple-200">
                  Score: {score}
                </span>
              </div>

              <button
                onClick={handleGenerateAiQuiz}
                disabled={loadingAiQuiz}
                className="bg-[#2B8000] hover:bg-[#216300] text-white font-bold text-xs px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 disabled:opacity-50 shadow-xs shrink-0"
              >
                {loadingAiQuiz ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-[#66CC00]" />
                )}
                <span>New AI Quiz</span>
              </button>
            </div>

            {/* Question title */}
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options list */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, i) => {
                let btnStyle = 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300';
                
                if (isAnswered) {
                  if (i === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-50 text-emerald-900 border-emerald-400 font-bold';
                  } else if (i === selectedOption) {
                    btnStyle = 'bg-rose-50 text-rose-900 border-rose-400 font-bold';
                  } else {
                    btnStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(i)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && i === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && i === selectedOption && i !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 space-y-2 animate-in fade-in duration-200">
                <strong className="font-bold text-indigo-900 block">Explanation:</strong>
                <p>{currentQ.explanation}</p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2 rounded-xl transition"
                  >
                    {currentIndex + 1 < questions.length ? 'Next Question →' : 'View Results →'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Results screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 border border-amber-400/30 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Quiz Completed!</h3>
            <p className="text-sm text-slate-600">
              You scored <strong className="text-indigo-600 font-extrabold">{score}</strong> out of{' '}
              <strong className="text-slate-900 font-bold">{questions.length}</strong>!
            </p>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={handleGenerateAiQuiz}
                disabled={loadingAiQuiz}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate New AI Questions</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
