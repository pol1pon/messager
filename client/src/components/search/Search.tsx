import './search.css'


type SearchProps = {
  setSearchTerm: (value: string) => void;
  searchTerm: string;
}



const Search: React.FC<SearchProps> = ({setSearchTerm, searchTerm})  => {
  return (
   <>
    <div className="search">
        <input
          className='input'
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
   </>
  );
}

export default Search;