import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCatalog } from '@/lib/series';
import CategoryView from '@/components/CategoryView';
import { getMissingImageCounts } from '@/lib/imageStatus';

// Rebuilt at most hourly, so the under-construction triangles clear once images are uploaded.
export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getCatalog().map((c) => ({ slug: c.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = getCatalog().find((c) => c.id === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} | Practispeak`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const catalog = getCatalog();
  const cat = catalog.find((c) => c.id === params.slug);
  if (!cat) notFound();

  const others = catalog
    .filter((c) => c.id !== cat.id)
    .map((c) => ({
      id: c.id,
      cardTitle: c.cardTitle,
      description: c.description,
      image: c.image,
      stockImage: c.stockImage,
      imageAlt: c.imageAlt,
      range: c.range,
      count: c.lessons.length,
    }));

  const missing = await getMissingImageCounts(cat.lessons.map((l) => l.slug));
  const category = {
    ...cat,
    lessons: cat.lessons.map((l) => ({ ...l, missingImages: missing.get(l.slug) ?? 0 })),
  };

  return <CategoryView category={category} others={others} />;
}
