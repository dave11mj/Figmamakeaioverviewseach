import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Link as LinkIcon } from 'lucide-react';

interface AIOverviewProps {
  data: {
    summary: string;
    sources: Array<{ title: string; url: string }>;
    keyPoints: string[];
  };
}

export function AIOverview({ data }: AIOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-white/60 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <div className="text-gray-900">AI Overview</div>
              <div className="text-gray-500 text-sm">Generated from multiple sources</div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-white/80 rounded-full transition-colors"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="px-6 py-5">
          {/* Summary */}
          <div className="text-gray-800 leading-relaxed mb-5">
            {data.summary}
          </div>

          {/* Key Points */}
          <div className="bg-white/70 rounded-xl p-4 mb-5">
            <div className="text-gray-700 mb-3">Key Benefits:</div>
            <ul className="space-y-2">
              {data.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div className="flex flex-wrap items-center gap-2">
            <LinkIcon size={16} className="text-gray-500" />
            <span className="text-gray-600 text-sm">Sources:</span>
            {data.sources.map((source, index) => (
              <a
                key={index}
                href={`https://${source.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-700 transition-colors"
              >
                <span>{source.title}</span>
              </a>
            ))}
          </div>

          {/* Footer Notice */}
          <div className="mt-5 pt-4 border-t border-gray-200">
            <div className="text-gray-500 text-sm">
              Generative AI is experimental. Info quality may vary.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
