export type Artifact = {
  id: string;
  url: string;
  title: string;
  tag: string;
};

export const artifacts: Artifact[] = [
  {
    id: '46897436-e06e-4ccc-b8f4-3df90c47f9bc',
    url: 'https://claude.site/artifacts/46897436-e06e-4ccc-b8f4-3df90c47f9bc',
    title: 'Sales Dashboard',
    tag: 'visualization'
  },
  {
    id: '12345678-abcd-efgh-ijkl-mnopqrstuvwx',
    url: 'https://claude.site/artifacts/12345678-abcd-efgh-ijkl-mnopqrstuvwx',
    title: 'Revenue Analysis',
    tag: 'analysis'
  },
  // Add more artifacts here...
]; 