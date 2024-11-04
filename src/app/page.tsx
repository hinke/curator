import React from 'react';
import { Tags } from 'lucide-react';
import Link from 'next/link';
import { artifacts } from '@/data/artifacts';

// Get unique tags from artifacts
const getUniqueTags = () => {
  const tags = new Set(artifacts.map(artifact => artifact.tag));
  return Array.from(tags);
};


export default function HomePage() {
  const tags = getUniqueTags();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Tags className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-mono font-bold tracking-tight text-gray-900">Curator</h1>
              <p className="mt-1 text-sm text-gray-500 font-mono">Discover and explore curated Claude artifacts</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tags.map((tag) => (
            <Link 
              key={tag} 
              href={`/tag/${tag}`}
              className="block hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <Tags className="h-6 w-6 text-blue-600" />
                  <h2 className="text-lg font-mono font-semibold">
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </h2>
                </div>
                <p className="mt-2 text-sm text-gray-500 font-mono">
                  {artifacts.filter(a => a.tag === tag).length} artifacts
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}