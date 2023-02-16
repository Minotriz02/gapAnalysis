import "./CheckFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";

function CheckFilter(props) {
  return (
    <div className="mt-1 mb-4">
      {props.title}
      <div className="mb-0 d-flex justify-content-between align-items-center">
        <div className="position-relative w-100">
          <span className="position-absolute search">
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </span>
          <input
            className="form-control w-100 rounded-0 rounded-top"
            placeholder="Search by name..."
          />
        </div>
      </div>
      <div className="table-responsive border rounded-bottom" style={{ height: "170px" }}>
        <table className="table table-responsive table-borderless table-striped table-hover">
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <td>
                  <img
                  alt=""
                    src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                    width="25"
                  />{" "}
                  Crop {i}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Carousel variant="dark" interval={null} controls={null} className="mt-2">
        {[...Array(3)].map((_, i) => (
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              {[...Array(3)].map((_, j) => (
                <div className="border border-top-0 px-3 py-1 rounded-3">
                  <img
                  alt=""
                    src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png"
                    width="25"
                  />{" "}
                  Rice {i + " - " + j}
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CheckFilter;
