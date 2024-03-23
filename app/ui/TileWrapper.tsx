export default function TileWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <div className='text-white font-bold text-xl mb-2'>{title}</div>
      <div className='gap-2 md:columns-4 sm:columns-2'>{children}</div>
    </div>
  );
}
