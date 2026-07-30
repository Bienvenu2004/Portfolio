import CvBuilder from '@/components/cv/CvBuilder';
import { site } from '@/data/site';

export const metadata = {
  title: `CV Generator — ${site.name}`,
  description: 'Build and print a custom CV — templates, accent colors and live preview.',
  robots: { index: false },
};

export default function CvPage() {
  return <CvBuilder />;
}
