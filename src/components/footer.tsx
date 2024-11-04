import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-mono">
          Built with ♥ in NYC by{' '}
          <Link 
            href="http://henrikberggren.com" 
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Henrik Berggren
          </Link>
        </p>
      </div>
    </footer>
  );
} 