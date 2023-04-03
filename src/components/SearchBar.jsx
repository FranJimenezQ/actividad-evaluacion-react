import './SearchBar.css'

function SearchBar({keyword, onChange}){
    return (
        <div className='div-search mb-3'>
            <input 
             className='BarStyle form-control'
             key="search-bar"
             value={keyword}
             placeholder={"Search"}
             onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
  }
  
  export default SearchBar;