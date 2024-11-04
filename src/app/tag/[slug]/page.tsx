import React from 'react';
import { Tags, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { artifacts, type Artifact } from '@/data/artifacts';
import { ArtifactCard } from '@/components/artifact-card';

// Get the correct Next.js types
type Props = {
  params: Promise<{ slug: string }>;
}


const getArtifacts = async (tagSlug: string): Promise<Artifact[]> => {
  // Filter artifacts by tag
  return artifacts.filter(artifact => artifact.tag === tagSlug);
};

async function TagArtifactsPage({ params }: Props) {
  const { slug } = await params;
  const tagName = slug;
  const artifacts = await getArtifacts(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <Tags className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-mono font-bold tracking-tight text-gray-900">
                {tagName.charAt(0).toUpperCase() + tagName.slice(1)}
              </h1>
              <p className="mt-1 text-sm text-gray-500 font-mono">
                Exploring {artifacts.length} {tagName.toLowerCase()} artifacts
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default TagArtifactsPage;