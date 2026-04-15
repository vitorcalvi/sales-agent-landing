'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Analytics() {
  const [gaId, setGaId] = useState<string>('');
  
  useEffect(() => {
    setGaId(process.env.NEXT_PUBLIC_GA_ID || '');
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
