'use client';

import { type Artifact } from '@/data/artifacts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, 
  LineChart, 
  Code2, 
  ExternalLink,
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
import { ArtifactOwnerLink } from './artifact-owner-link';

const getIconForTag = (tag: string) => {
  const tagMap: { [key: string]: JSX.Element } = {
    'Games': <GamepadIcon className="h-5 w-5" />,
    'Tools': <WrenchIcon className="h-5 w-5" />,
    'Demos': <Binary className="h-5 w-5" />,
    'Math': <Calculator className="h-5 w-5" />,
    'Research': <BrainCircuitIcon className="h-5 w-5" />,
    'Investing': <DollarSignIcon className="h-5 w-5" />,
    'Biology': <MicroscopeIcon className="h-5 w-5" />,
    'Engineering': <CircuitBoardIcon className="h-5 w-5" />,
    'Web development': <GlobeIcon className="h-5 w-5" />,
    'Personal Finance': <DollarSignIcon className="h-5 w-5" />,
  };

  return tagMap[tag] || <BeakerIcon className="h-5 w-5" />;
};

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
              {getIconForTag(artifact.tag)}
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
        <div className="flex items-center justify-between">
          <ArtifactOwnerLink owner={artifact.owner} />
          <p 
            className="text-xs text-gray-400 font-mono truncate max-w-[180px]" 
            title={artifact.url}
          >
            {artifact.url.replace('https://', '')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 