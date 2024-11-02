import React from 'react';
import { Tags, ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Correct Next.js page props typing
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Sample mapping of tag slugs to readable names
const TAG_NAMES: { [key: string]: string } = {
  'visualization': 'Visualization',
  'code': 'Code',
  'analysis': 'Analysis',
  // ... add other mappings
};

const getArtifacts = (tagSlug: string) => {
  // This would typically be an API call
  return [
    {
      id: 1,
      title: "Sales Dashboard",
      type: "visualization",
      content: (
        <div className="w-full h-64 bg-blue-50 rounded-lg p-4">
          <div className="space-y-2">
            <div className="w-full h-8 bg-blue-200 rounded animate-pulse" />
            <div className="w-3/4 h-8 bg-blue-300 rounded animate-pulse" />
            <div className="w-1/2 h-8 bg-blue-400 rounded animate-pulse" />
          </div>
        </div>
      )
    },
    // ... other artifacts
  ];
};

export default function TagArtifactsPage({ params, searchParams }: Props) {
  const tagName = TAG_NAMES[params.slug] || params.slug;
  const artifacts = getArtifacts(params.slug);

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

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {artifacts.map((artifact) => (
            <Card key={artifact.id} className="overflow-hidden">
              <CardHeader className="bg-white border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-mono text-lg">
                    {artifact.title}
                  </CardTitle>
                  <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <ExternalLink className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  {artifact.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}