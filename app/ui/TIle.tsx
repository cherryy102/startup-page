import Image from 'next/image';

export default function Tile({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string;
}) {
  return (
    <div className='tile mb-2 grid break-inside-avoid'>
      <a
        href={url}
        className='flex flex-col py-2 px-3 cursor-pointer bg-white bg-opacity-10 rounded-lg'
      >
        <div className='flex'>
          <div className='pr-3'>
            <Image
              src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}&sz=24`}
              alt='facebook favicon'
              className=''
              width={24}
              height={24}
            />
          </div>
          <div className='text-white '>{name}</div>
        </div>
        <div className='text-white text-sm pt-1'>{description}</div>
      </a>
    </div>
  );
}
