import { ExternalLink } from 'lucide-react';

interface SearchResultProps {
  title: string;
  url: string;
  displayUrl: string;
  snippet: string;
}

export function SearchResult({ title, url, displayUrl, snippet }: SearchResultProps) {
  return (
    <div className="group">
      {/* URL */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs">
          {displayUrl.charAt(0).toUpperCase()}
        </div>
        <div className="text-gray-600 text-sm">{displayUrl}</div>
      </div>

      {/* Title */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-1 group/link"
      >
        <h3 className="text-blue-700 group-hover/link:underline inline-flex items-center gap-2">
          {title}
          <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </h3>
      </a>

      {/* Snippet */}
      <p className="text-gray-600 leading-relaxed">{snippet}</p>
    </div>
  );
}
