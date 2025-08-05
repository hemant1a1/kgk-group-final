'use client';

import dynamic from 'next/dynamic';

const DistributionMapClient = dynamic(
  () => import('./DistributionMapClient'),
  { ssr: false }
);

export default function DistributionMap({ data }) {
  return <DistributionMapClient data={data} />;
}
