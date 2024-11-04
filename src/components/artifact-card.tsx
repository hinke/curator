'use client';

import { type Artifact } from '@/data/artifacts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, LineChart, Code2, ExternalLink } from 'lucide-react';
import { ArtifactOwnerLink } from './artifact-owner-link';

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => window.open(artifact.url, '_blank')}
    >
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
          <div className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <ExternalLink className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-3 pt-0">
        <div className="flex flex-col space-y-1">
          <ArtifactOwnerLink owner={artifact.owner} />
          <p className="text-xs text-gray-400 font-mono truncate" title={artifact.url}>
            {artifact.url}
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 