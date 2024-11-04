import React from 'react';
import { 
  Tags, 
  ArrowLeft,
  GamepadIcon,
  WrenchIcon,
  BeakerIcon,
  BrainCircuitIcon,
  DollarSignIcon,
  MicroscopeIcon,
  CircuitBoardIcon,
  GlobeIcon,
  Calculator,
  Binary
} from 'lucide-react';
import Link from 'next/link';
import { artifacts, type Artifact } from '@/data/artifacts';
import { ArtifactCard } from '@/components/artifact-card';
import { toSlug } from '@/lib/utils';

// Get the correct Next.js types
type Props = {
  params: Promise<{ slug: string }>;
}

const getIconForTag = (tag: string) => {
  const tagMap: { [key: string]: JSX.Element } = {
    'Games': <GamepadIcon className="h-8 w-8" />,
    'Tools': <WrenchIcon className="h-8 w-8" />,
    'Demos': <Binary className="h-8 w-8" />,
    'Math': <Calculator className="h-8 w-8" />,
    'Research': <BrainCircuitIcon className="h-8 w-8" />,
    'Investing': <DollarSignIcon className="h-8 w-8" />,
    'Biology': <MicroscopeIcon className="h-8 w-8" />,
    'Engineering': <CircuitBoardIcon className="h-8 w-8" />,
    'Web development': <GlobeIcon className="h-8 w-8" />,
    'Personal Finance': <DollarSignIcon className="h-8 w-8" />,
  };

  return tagMap[tag] || <BeakerIcon className="h-8 w-8" />;
};

const getArtifacts = async (tagSlug: string): Promise<Artifact[]> => {
  // Convert the URL slug back to a tag by matching against all tags
  const matchingTag = Array.from(new Set(artifacts.map(a => a.tag)))
    .find(tag => toSlug(tag) === tagSlug);
  
  if (!matchingTag) return [];
  
  return artifacts.filter(artifact => artifact.tag === matchingTag);
};

async function TagArtifactsPage({ params }: Props) {
  const { slug } = await params;
  const matchingArtifacts = await getArtifacts(slug);
  const tagName = matchingArtifacts[0]?.tag || slug.replace(/-/g, ' ');
  const artifactCount = matchingArtifacts.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="text-blue-600">
              {getIconForTag(tagName)}
            </div>
            <div>
              <h1 className="text-3xl font-mono font-bold tracking-tight text-gray-900">
                {tagName}
              </h1>
              <p className="mt-1 text-sm text-gray-500 font-mono">
                Exploring {tagName.toLowerCase()} artifacts
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matchingArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default TagArtifactsPage;