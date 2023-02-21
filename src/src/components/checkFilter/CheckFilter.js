import "./CheckFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CloseButton } from "react-bootstrap";
import { useState, useEffect } from "react";

function CheckFilter({ onDataChange, title, onChange, crop }) {

  const [tableItems, setTableItems] = useState(crop);
  const [carouselItems, setCarouselItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleAddToCarousel = (index) => {
    const itemToAdd = tableItems.splice(index, 1)[0];
    setCarouselItems([...carouselItems, itemToAdd]);
    setTableItems([...tableItems]);
  };

  const handleRemoveFromCarousel = (index) => {
    const itemToRemove = carouselItems.splice(index, 1)[0];
    setCarouselItems([...carouselItems]);
    setTableItems([...tableItems, itemToRemove].sort());
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (onDataChange) {
      onDataChange([...carouselItems]);
    }
  }, [carouselItems]);

  useEffect(() => {
    setTableItems([...tableItems, ...carouselItems].sort());
    setCarouselItems([])
  }, [onChange])


  return (
    <div className="mt-1 mb-4">
      {title}
      <div className="mb-0 d-flex justify-content-between align-items-center">
        <div className="position-relative w-100">
          <span className="position-absolute search">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </span>
          <input
            className="form-control w-100 rounded-0 rounded-top border"
            placeholder="Search by name..."
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <div className="table-responsive border rounded-bottom" style={{ height: "170px" }}>
        <table className="table table-responsive table-borderless table-striped table-hover">
          <tbody>
            {tableItems
              .filter((item) =>
                item.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, i) => (
                <tr key={i} onClick={() => handleAddToCarousel(i)}>
                  <td className="text-center">
                    <img
                      alt=""
                      src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                      width="20"
                    />{" "}
                    {item}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Carousel variant="dark" interval={null} controls={null} className="mt-2">
        {carouselItems.reduce((acc, item, i) => {
          if (i % 3 === 0) {
            acc.push([]);
          }
          acc[acc.length - 1].push(
            <div className="btn border border-top-0 px-3 py-1 rounded-3 me-1 hoverable" onClick={() => handleRemoveFromCarousel(i)} key={i}>
              <img
                alt=""
                src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                width="20"
              />{" "}
              {item}
              <CloseButton disabled className="ms-1 close-button"></CloseButton>
            </div>
          );
          return acc;
        }, []).map((itemGroup, i) => (
          <Carousel.Item key={i}>
            {itemGroup}
          </Carousel.Item>
        ))}
      </Carousel>
    </div >
  );
}

export default CheckFilter;
