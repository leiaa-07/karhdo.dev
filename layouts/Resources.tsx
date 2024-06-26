import { ReactNode } from 'react';
import Link from 'next/link';
import type { Authors } from 'contentlayer/generated';

import siteMetadata from '@/data/siteMetadata';
import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';

interface Props {
  children: ReactNode;
}

export default function Resources({ children }: Props) {
  const { title, headerTitle } = siteMetadata;

  const description = 'some very slay resources (mainly math)';

  return (
    <>
      <PageSEO title={`resources - ${title}`} description={description} />

      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            resources
          </h1>
        </div>

        <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div>
      </div>
    </>
  );
}
