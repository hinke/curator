import React from 'react';
import { Tags, ArrowLeft, ExternalLink, BarChart3, LineChart, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { artifacts, type Artifact } from '@/data/artifacts';

// Get the correct Next.js types
type Props = {
  params: Promise<{ slug: string }>;
}

// Sample mapping of tag slugs to readable names
const TAG_NAMES: { [key: string]: string } = {
  'visualization': 'Visualization',
  'code': 'Code',
  'analysis': 'Analysis',
  // ... add other mappings
};

const getArtifacts = async (tagSlug: string): Promise<Artifact[]> => {
  // Filter artifacts by tag
  return artifacts.filter(artifact => artifact.tag === tagSlug);
};

// Create a new component for rendering individual artifacts
const ArtifactCard = ({ artifact }: { artifact: Artifact }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-blue-600">
              {artifact.tag === 'visualization' && <BarChart3 className="h-5 w-5" />}
              {artifact.tag === 'analysis' && <LineChart className="h-5 w-5" />}
              {artifact.tag === 'code' && <Code2 className="h-5 w-5" />}
            </div>
            <CardTitle className="font-mono text-sm">
              {artifact.title}
            </CardTitle>
          </div>
          <Link 
            href={artifact.url} 
            target="_blank" 
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={`Open ${artifact.title} in new tab`}
          >
            <ExternalLink className="h-4 w-4 text-gray-500" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-3 pt-0">
        <p className="text-xs text-gray-400 font-mono truncate" title={artifact.url}>
          {artifact.url}
        </p>
      </CardContent>
    </Card>
  );
};

async function TagArtifactsPage({ params }: Props) {
  const { slug } = await params;
  const tagName = TAG_NAMES[slug] || slug;
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
                {tagName}
              </h1>
              <p className="mt-1 text-sm text-gray-500 font-mono">
                Exploring {artifacts.length} {tagName.toLowerCase()} artifacts
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Updated main content with more compact grid */}
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