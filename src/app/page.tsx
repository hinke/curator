import React from 'react';
import { 
  GamepadIcon,
  WrenchIcon,
  BeakerIcon,
  BrainCircuitIcon,
  DollarSignIcon,
  MicroscopeIcon,
  CircuitBoardIcon,
  GlobeIcon,
  Calculator,
  Binary,
  Boxes // For the header icon
} from 'lucide-react';
import Link from 'next/link';
import { artifacts } from '@/data/artifacts';
import { toSlug } from '@/lib/utils';

// Get unique tags from artifacts
const getUniqueTags = () => {
  const tags = new Set(artifacts.map(artifact => artifact.tag));
  return Array.from(tags);
};

const getIconForTag = (tag: string) => {
  const tagMap: { [key: string]: JSX.Element } = {
    'Games': <GamepadIcon className="h-6 w-6" />,
    'Tools': <WrenchIcon className="h-6 w-6" />,
    'Demos': <Binary className="h-6 w-6" />,
    'Math': <Calculator className="h-6 w-6" />,
    'Research': <BrainCircuitIcon className="h-6 w-6" />,
    'Investing': <DollarSignIcon className="h-6 w-6" />,
    'Biology': <MicroscopeIcon className="h-6 w-6" />,
    'Engineering': <CircuitBoardIcon className="h-6 w-6" />,
    'Web development': <GlobeIcon className="h-6 w-6" />,
    'Personal Finance': <DollarSignIcon className="h-6 w-6" />,
  };

  return tagMap[tag] || <BeakerIcon className="h-6 w-6" />;
};

export default function HomePage() {
  const tags = getUniqueTags();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Boxes className="h-8 w-8 text-blue-600" />
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
              href={`/tag/${toSlug(tag)}`}
              className="block hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {getIconForTag(tag)}
                  </div>
                  <h2 className="text-lg font-mono font-semibold">
                    {tag}
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