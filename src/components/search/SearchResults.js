import React, { useEffect, useState } from "react";
import searchdata from "../../data/searchdata";
import { Link } from "react-router-dom";

const SearchResults = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const { query } = props;
  useEffect(() => {
    //alert(query);
    let newData = searchdata.filter((el) => {
      return el.title.toLocaleLowerCase().indexOf(query.toLowerCase()) >= 0;
    });
    setFilteredData(newData);
  }, [query]);
  return (
    <div className="text-center">
      <h5 className="mb-4">
        {filteredData.length > 0 ? "Your search queries" : "No result found"}
      </h5>
      {filteredData.map((data, index) => {
        return (
          <div className="text-center mt-2 mt-2" key={index}>
            <Link type="button" className="form-control btn btn-outline-dark">
              {data.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
