import HomeView, { type HomeCategory } from '@/components/HomeView';
import { getCatalog } from '@/lib/series';

/** Built on the server: only category cards and lesson counts reach the browser. */
export default function Home() {
  const catalog: HomeCategory[] = getCatalog().map(({ lessons, ...category }) => ({
    ...category,
    lessonCount: lessons.length,
  }));
  return <HomeView catalog={catalog} />;
}
