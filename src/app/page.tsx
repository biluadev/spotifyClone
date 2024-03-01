import { ChevronLeft, ChevronRight, Home as HomeIcon, LibraryIcon, SearchIcon } from 'lucide-react'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'> <HomeIcon /> Home</a>

            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'> <SearchIcon /> Search</a>

            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'> <LibraryIcon /> Your Library</a>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
            <a href="">Hot Hits Brazil</a>
            <a href="">Aniver Funk</a>
            <a href="">My Playlist #13</a>
            <a href="">Top Brasil</a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p1'>
              <ChevronLeft/>
            </button>

            <button className='rounded-full bg-black/40 p1'>
              <ChevronRight/>
            </button>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
