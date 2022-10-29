import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


const SearchIcon = () => {
  return (
    <div className="flex lg:ml-6">
    <input
    type="text"
    name="price"
    id="price"
    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    placeholder="Item..."
  />
  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
  <span className="sr-only">Search</span>
  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
</a>
</div>
  );
}


export default SearchIcon;