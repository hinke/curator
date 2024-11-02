import React from 'react';
import { Tag, Tags } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CuratorLanding = () => {
  const tags = [
    { id: 'code', label: 'Code', count: 342 },
    { id: 'visualization', label: 'Visualization', count: 156 },
    { id: 'analysis', label: 'Analysis', count: 238 },
    { id: 'document', label: 'Document', count: 184 },
    { id: 'creative', label: 'Creative Writing', count: 129 },
    { id: 'diagram', label: 'Diagrams', count: 97 },
    { id: 'technical', label: 'Technical', count: 275 },
    { id: 'educational', label: 'Educational', count: 163 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tags.map((tag) => (
            <Card 
              key={tag.id}
              className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Tag className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                    <span className="font-mono text-lg font-medium text-gray-900">
                      {tag.label}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-mono text-gray-600">
                    {tag.count}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CuratorLanding;