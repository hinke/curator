import React, { useState } from 'react';
import { Tags, ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TagArtifactsPage = () => {
  // Sample artifact data - in reality this would come from an API
  const artifacts = [
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
    {
      id: 2,
      title: "Tic Tac Toe Game",
      type: "game",
      content: (
        <div className="w-full h-64 bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-2 h-full">
            {Array(9).fill(null).map((_, i) => (
              <div key={i} className="bg-white rounded-md shadow-sm hover:bg-gray-100 cursor-pointer 
                                    flex items-center justify-center text-2xl font-bold border" />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Particle Animation",
      type: "visualization",
      content: (
        <div className="w-full h-64 bg-black rounded-lg overflow-hidden">
          {Array(20).fill(null).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )
    },
    {
      id: 4,
      title: "Color Palette Generator",
      type: "tool",
      content: (
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <div className="grid grid-cols-5 h-full">
            {['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'].map((color, i) => (
              <div key={i} style={{ backgroundColor: color }} className="hover:opacity-90 cursor-pointer">
                <div className="h-full flex items-end justify-center p-2">
                  <span className="text-xs font-mono text-white bg-black/30 px-2 py-1 rounded">
                    {color}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <Tags className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-mono font-bold tracking-tight text-gray-900">
                Visualization
              </h1>
              <p className="mt-1 text-sm text-gray-500 font-mono">
                Exploring 156 visualization artifacts
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
};

export default TagArtifactsPage;