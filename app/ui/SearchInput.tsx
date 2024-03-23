export default function SearchInput({
  value,
  setValue,
}: {
  value: string;
  setValue: (val: string) => void;
}) {
  return (
    <>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <span className='material-symbols-outlined text-white'>search</span>
        </div>
        <input
          type='text'
          value={value}
          className='rounded-full outline-none py-3 w-full px-11 text-white bg-zinc-800'
          placeholder='Search'
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}
