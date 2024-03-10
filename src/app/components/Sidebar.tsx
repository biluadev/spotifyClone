import { HomeIcon, LibraryIcon, SearchIcon } from "lucide-react";

export function Sidebar() {
    return (
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
    )
}