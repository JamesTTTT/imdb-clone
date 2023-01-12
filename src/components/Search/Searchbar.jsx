import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
const Searchbar = () => {
  const { searchPhrase, setSearchPhrase } = useStateContext();

  const navigate = useNavigate();

  const handleSearch = (val) => {
    if (val) {
      navigate("/search");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchIcon">
        <AiOutlineSearch />
      </div>
      <input
        className="searchbar"
        type="search"
        placeholder="Search Movie"
        value={searchPhrase}
        onChange={(e) => {
          setSearchPhrase(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      {searchPhrase ? (
        <button
          className="cancelSearch"
          onClick={() => {
            setSearchPhrase("");
            navigate("/");
          }}
        >
          <span>
            Cancel Search <AiOutlineClose />
          </span>
        </button>
      ) : null}
    </div>
  );
};

export default Searchbar;
