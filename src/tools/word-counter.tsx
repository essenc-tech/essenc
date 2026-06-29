'use client';

import { useState, useMemo } from 'react';
import ToolInput from '@/components/tool/tool-input';
import ToolOutput from '@/components/tool/tool-output';
import ToolToolbar from '@/components/tool/tool-toolbar';
import CountUp from 'react-countup';

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countSentences(text: string): number {
  return (text.match(/[.!?]+/g) || []).length;
}

function countParagraphs(text: string): number {
  return text.split(/\n\s*\n/).filter(Boolean).length || 1;
}

function getReadingTime(words: number): number {
  return Math.ceil(words / 200);
}

function getSpeakingTime(words: number): number {
  return Math.ceil(words / 130);
}

function getTopWords(text: string, limit = 10): Array<{word: string; count: number}> {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const stopWords = new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','by']);
  
  const freq: Record<string, number> = {};
  words.forEach(word => {
    if (!stopWords.has(word) && word.length > 2) {
      freq[word] = (freq[word] || 0) + 1;
    }
  });

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word, count]) => ({ word, count }));
}

export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const words = countWords(text);
    const characters = text.length;
    const charactersNoSpace = text.replace(/\s/g, '').length;
    const sentences = countSentences(text);
    const paragraphs = countParagraphs(text);
    const lines = text.split('\n').length;

    return {
      words,
      characters,
      charactersNoSpace,
      sentences,
      paragraphs,
      lines,
      readingTime: getReadingTime(words),
      speakingTime: getSpeakingTime(words),
      topWords: getTopWords(text),
    };
  }, [text]);

  const handleClear = () => setText('');
  const handleReset = () => setText('');
  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'word-counter.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <ToolInput label="Your Text">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="w-full h-64 bg-transparent resize-y min-h-[200px] focus:outline-none text-lg leading-relaxed placeholder:text-zinc-600"
        />
      </ToolInput>

      <ToolOutput label="Live Statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Words', value: stats.words },
            { label: 'Characters', value: stats.characters },
            { label: 'Characters (no space)', value: stats.charactersNoSpace },
            { label: 'Sentences', value: stats.sentences },
            { label: 'Paragraphs', value: stats.paragraphs },
            { label: 'Lines', value: stats.lines },
            { label: 'Reading Time', value: `${stats.readingTime} min` },
            { label: 'Speaking Time', value: `${stats.speakingTime} min` },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">{stat.label}</div>
              <div className="text-4xl font-semibold text-white tabular-nums">
                {typeof stat.value === 'number' ? <CountUp end={stat.value} duration={0.6} /> : stat.value}
              </div>
            </div>
          ))}
        </div>

        {stats.topWords.length > 0 && (
          <div className="mt-10">
            <div className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Most Frequent Words</div>
            <div className="flex flex-wrap gap-3">
              {stats.topWords.map(({word, count}, i) => (
                <div key={i} className="bg-zinc-900 px-4 py-2 rounded-xl text-sm">
                  <span className="text-lime-400">{word}</span>
                  <span className="text-zinc-500 ml-2">×{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </ToolOutput>

      <ToolToolbar 
        output={text} 
        onClear={handleClear} 
        onReset={handleReset} 
        onDownload={handleDownload} 
      />
    </div>
  );
}