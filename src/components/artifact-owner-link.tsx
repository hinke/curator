'use client';

import Link from 'next/link';
import { type Owner } from '@/data/artifacts';

export function ArtifactOwnerLink({ owner }: { owner: Owner }) {
  return (
    <Link 
      href={owner.url}
      target="_blank"
      className="text-xs text-blue-500 hover:text-blue-600 font-mono transition-colors"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        window.open(owner.url, '_blank');
      }}
    >
      {owner.name}
    </Link>
  );
} 