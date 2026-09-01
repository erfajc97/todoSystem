interface CategoryCardProps {
  href: string;
  image: string;
  label: string;
}

export function CategoryCard({ href, image, label }: CategoryCardProps) {
  return (
    <a href={href} className="relative block aspect-[4/5] overflow-hidden rounded-2xl">
      <img src={image} alt={label} className="h-full w-full object-cover" />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/80 to-transparent px-3 pb-3 pt-10 font-heading text-base font-bold text-on-brand">
        {label}
      </span>
    </a>
  );
}
