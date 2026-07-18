import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCatalog } from '@/lib/series';
import CategoryView from '@/components/CategoryView';

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

export default function CategoryPage({ params }: Props) {
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
      imageAlt: c.imageAlt,
      range: c.range,
      count: c.lessons.length,
    }));

  return <CategoryView category={cat} others={others} />;
}
