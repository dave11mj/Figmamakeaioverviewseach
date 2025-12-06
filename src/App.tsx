import { useState } from 'react';
import { Search } from 'lucide-react';
import { AIOverview } from './components/AIOverview';
import { SearchResult } from './components/SearchResult';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('benefits of meditation');

  const aiOverviewData = {
    summary: "Meditation offers numerous mental and physical health benefits. Regular practice can reduce stress and anxiety, improve focus and concentration, enhance emotional well-being, and promote better sleep quality. Studies show that meditation can also lower blood pressure, reduce symptoms of depression, and increase self-awareness. Even short daily sessions of 10-15 minutes can yield positive results.",
    sources: [
      { title: "Harvard Health", url: "health.harvard.edu" },
      { title: "Mayo Clinic", url: "mayoclinic.org" },
      { title: "National Institutes of Health", url: "nih.gov" }
    ],
    keyPoints: [
      "Reduces stress and anxiety levels",
      "Improves focus and concentration",
      "Enhances emotional health and self-awareness",
      "May help control pain and improve sleep",
      "Can lower blood pressure"
    ]
  };

  const searchResults = [
    {
      title: "Meditation: A simple, fast way to reduce stress - Mayo Clinic",
      url: "https://www.mayoclinic.org/meditation",
      displayUrl: "mayoclinic.org › meditation",
      snippet: "Meditation can give you a sense of calm, peace and balance that can benefit your emotional well-being and your overall health. You can also use it to relax and cope with stress..."
    },
    {
      title: "Benefits of Mindfulness: Practices for Improving Emotional and Physical...",
      url: "https://www.healthline.com/benefits-of-meditation",
      displayUrl: "healthline.com › benefits-of-meditation",
      snippet: "Research has shown that meditation may calm the mind, promote better quality sleep, and even improve heart health. Mindfulness meditation, in particular, has become more popular in recent years..."
    },
    {
      title: "Meditation and mental health - Harvard Health",
      url: "https://www.health.harvard.edu/meditation",
      displayUrl: "health.harvard.edu › meditation",
      snippet: "Meditation is the practice of focused concentration, bringing yourself back to the moment over and over again. It can reduce stress, improve concentration, and contribute to overall emotional well-being..."
    },
    {
      title: "What meditation can do for your mind, mood and health",
      url: "https://www.apa.org/meditation-benefits",
      displayUrl: "apa.org › meditation-benefits",
      snippet: "A review of more than 200 studies of mindfulness among healthy people found mindfulness-based therapy was especially effective for reducing stress, anxiety and depression..."
    },
    {
      title: "Meditation: Process and effects - National Center for Complementary...",
      url: "https://www.nccih.nih.gov/meditation",
      displayUrl: "nccih.nih.gov › meditation",
      snippet: "Research suggests that meditation may help reduce blood pressure, symptoms of irritable bowel syndrome, anxiety and depression, and insomnia. Evidence about its effectiveness for pain and as a smoking-cessation treatment is uncertain..."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-blue-600">Search</div>
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full hover:shadow-md focus:shadow-md focus:outline-none transition-shadow"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-4 ml-2">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-3">All</button>
            <button className="text-gray-600 pb-3 hover:text-gray-900">Images</button>
            <button className="text-gray-600 pb-3 hover:text-gray-900">Videos</button>
            <button className="text-gray-600 pb-3 hover:text-gray-900">News</button>
            <button className="text-gray-600 pb-3 hover:text-gray-900">More</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-6">
        <div className="text-gray-600 mb-4">About 142,000,000 results (0.48 seconds)</div>
        
        {/* AI Overview */}
        <AIOverview data={aiOverviewData} />

        {/* Search Results */}
        <div className="mt-8 space-y-8">
          {searchResults.map((result, index) => (
            <SearchResult key={index} {...result} />
          ))}
        </div>
      </main>
    </div>
  );
}
