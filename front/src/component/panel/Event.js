import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

export default function Event() {
  const [loader, setLoader] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // Start from page 1
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [student, setStudent] = useState([]);

  const getStudentData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getallevents`
      );
      if (res.status === 200) {
        setStudent(res.data.data);
      } else {
        setStudent([]);
      }
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };
  useEffect(() => {
    getStudentData();
  }, []);

  useEffect(() => {
    const filtered = filterDataBySearch(student ?? []);
    setFilteredData(filtered);
  }, [student, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0); // Reset current page when search query changes
  };

  const filterDataBySearch = (data) => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0); // Reset current page when items per page changes
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this Event",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5000C0",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/delete/event/` + id);
        if (res.status === 200) {
          getStudentData();
          Swal.fire({
            title: "Deleted!",
            text: "This Event has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            title: "Deletion failed!",
            text: "Event deletion failed.",
            icon: "error",
          });
        }
      }
    } catch (err) {
      console.error("Error deleting data:", err);
      if (err.response && err.response.data && err.response.data.error && err.response.data.error.sqlMessage && err.response.data.error.sqlMessage.includes('Cannot delete or update a parent row')) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This data is connected with many modules, so it won't be deleted.",
        });
      } else {
        setLoader(true);
      }
    }
  };
  const handleimg = (e) => {
    e.target.src = "/assets/img/imgnot.png";
    e.target.alt = "Image not found";
  };
  if (loader) {
    return (
      <div className="page-wrapper page-settings">
        <div className="error">
          <svg data-name="Layer 1" width="1119.60911" height="699" viewBox="0 0 1119.60911 699">
            <title>server down</title>
            <circle cx="292.60911" cy="213" r="213" fill="#f2f2f2" /><path d="M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><path d="M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356" transform="translate(-31.39089 -100.5)" fill="#a57c3f" />          <path d="M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288" transform="translate(-31.39089 -100.5)" fill="#a57c3f" />          <path d="M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788" transform="translate(-31.39089 -100.5)" fill="#2f2e41" />          <path d="M117.22379,292.83905s15.41555-.47479,20.06141-3.783,23.713-7.2585,24.86553-1.95278,23.16671,26.38821,5.76263,26.5286-40.43935-2.711-45.07627-5.53549S117.22379,292.83905,117.22379,292.83905Z" transform="translate(-31.39089 -100.5)" fill="#a8a8a8" />          <path d="M168.224,311.78489c-17.40408.14042-40.43933-2.71094-45.07626-5.53548-3.53126-2.151-4.93843-9.86945-5.40926-13.43043-.32607.014-.51463.02-.51463.02s.97638,12.43276,5.61331,15.2573,27.67217,5.67589,45.07626,5.53547c5.02386-.04052,6.7592-1.82793,6.66391-4.47526C173.87935,310.756,171.96329,311.75474,168.224,311.78489Z" transform="translate(-31.39089 -100.5)" opacity="0.2" />          <ellipse cx="198.60911" cy="424.5" rx="187" ry="25.43993" fill="#3f3d56" />          <ellipse cx="198.60911" cy="424.5" rx="157" ry="21.35866" opacity="0.1" />          <ellipse cx="836.60911" cy="660.5" rx="283" ry="38.5" fill="#3f3d56" />          <ellipse cx="310.60911" cy="645.5" rx="170" ry="23.12721" fill="#3f3d56" />          <path d="M494,726.5c90,23,263-30,282-90" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="2" />          <path d="M341,359.5s130-36,138,80-107,149-17,172" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="2" />          <path d="M215.40233,637.78332s39.0723-10.82,41.47675,24.04449-32.15951,44.78287-5.10946,51.69566" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="2" />          <path d="M810.09554,663.73988,802.218,714.03505s-38.78182,20.60284-11.51335,21.20881,155.73324,0,155.73324,0,24.84461,0-14.54318-21.81478l-7.87756-52.719Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41" />          <path d="M785.21906,734.69812c6.193-5.51039,16.9989-11.252,16.9989-11.252l7.87756-50.2952,113.9216.10717,7.87756,49.582c9.185,5.08711,14.8749,8.987,18.20362,11.97818,5.05882-1.15422,10.58716-5.44353-18.20362-21.38921l-7.87756-52.719-113.9216,3.02983L802.218,714.03506S769.62985,731.34968,785.21906,734.69812Z" transform="translate(-31.39089 -100.5)" opacity="0.1" /><rect x="578.43291" y="212.68859" width="513.25314" height="357.51989" rx="18.04568" fill="#2f2e41" /><rect x="595.70294" y="231.77652" width="478.71308" height="267.83694" fill="#3f3d56" /><circle cx="835.05948" cy="223.29299" r="3.02983" fill="#f2f2f2" /><path d="M1123.07694,621.32226V652.6628a18.04341,18.04341,0,0,1-18.04568,18.04568H627.86949A18.04341,18.04341,0,0,1,609.8238,652.6628V621.32226Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><polygon points="968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 651.452 645.651 962.312 645.651 968.978 667.466" fill="#2f2e41" /><path d="M1125.828,762.03359c-.59383,2.539-2.83591,5.21743-7.90178,7.75032-18.179,9.08949-55.1429-2.42386-55.1429-2.42386s-28.4804-4.84773-28.4804-17.573a22.72457,22.72457,0,0,1,2.49658-1.48459c7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><path d="M1125.828,762.03359c-22.251,8.526-42.0843,9.1622-62.43871-4.975-10.26507-7.12617-19.59089-8.88955-26.58979-8.75618,7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z" transform="translate(-31.39089 -100.5)" opacity="0.1" /><ellipse cx="1066.53846" cy="654.13477" rx="7.87756" ry="2.42386" fill="#f2f2f2" /><circle cx="835.05948" cy="545.66686" r="11.51335" fill="#f2f2f2" /><polygon points="968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 968.978 667.466" opacity="0.1" /><rect x="108.60911" y="159" width="208" height="242" fill="#2f2e41" /><rect x="87.60911" y="135" width="250" height="86" fill="#3f3d56" /><rect x="87.60911" y="237" width="250" height="86" fill="#3f3d56" /><rect x="87.60911" y="339" width="250" height="86" fill="#3f3d56" /><rect x="271.60911" y="150" width="16" height="16" fill="#a57c3f" opacity="0.4" /><rect x="294.60911" y="150" width="16" height="16" fill="#a57c3f" opacity="0.8" /><rect x="317.60911" y="150" width="16" height="16" fill="#a57c3f" /><rect x="271.60911" y="251" width="16" height="16" fill="#a57c3f" opacity="0.4" /><rect x="294.60911" y="251" width="16" height="16" fill="#a57c3f" opacity="0.8" /><rect x="317.60911" y="251" width="16" height="16" fill="#a57c3f" /><rect x="271.60911" y="352" width="16" height="16" fill="#a57c3f" opacity="0.4" /><rect x="294.60911" y="352" width="16" height="16" fill="#a57c3f" opacity="0.8" /><rect x="317.60911" y="352" width="16" height="16" fill="#a57c3f" /><circle cx="316.60911" cy="538" r="79" fill="#2f2e41" /><rect x="280.60911" y="600" width="24" height="43" fill="#2f2e41" /><rect x="328.60911" y="600" width="24" height="43" fill="#2f2e41" /><ellipse cx="300.60911" cy="643.5" rx="20" ry="7.5" fill="#2f2e41" /><ellipse cx="348.60911" cy="642.5" rx="20" ry="7.5" fill="#2f2e41" /><circle cx="318.60911" cy="518" r="27" fill="#fff" /><circle cx="318.60911" cy="518" r="9" fill="#3f3d56" /><path d="M271.36733,565.03228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S277.74622,593.59986,271.36733,565.03228Z" transform="translate(-31.39089 -100.5)" fill="#a57c3f" /><ellipse cx="417.21511" cy="611.34365" rx="39.5" ry="12.40027" transform="translate(-238.28665 112.98044) rotate(-23.17116)" fill="#2f2e41" /><ellipse cx="269.21511" cy="664.34365" rx="39.5" ry="12.40027" transform="translate(-271.07969 59.02084) rotate(-23.17116)" fill="#2f2e41" /><path d="M394,661.5c0,7.732-19.90861,23-42,23s-43-14.268-43-22,20.90861-6,43-6S394,653.768,394,661.5Z" transform="translate(-31.39089 -100.5)" fill="#fff" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <>
      {loader || (
        <div className="page-wrapper page-settings">
          <div className="content">
            <nav
              aria-label="breadcrumb"
              style={{ "--bs-breadcrumb-divider": "none" }}
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  Event
                </li>
              </ol>
            </nav>
            <div className="content-page-header content-page-headersplit">
              <h5>Event</h5>
            </div>

            <div className="d-flex justify-content-between">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Search </label>
                  <input
                    id="search"
                    className="form-control"
                    type="text"
                    placeholder="Search Title"
                    aria-label="Search Input"
                    autoFocus
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <div className="form-group">
                <Link to="/createevent"><button className="btn btn-primaryy">create</button></Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>Index</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Address</th>
                        <th></th>
                      </tr>
                    </thead>
                    {currentItems.length === 0 ? (
                      <tr>
                        <td colSpan="12">No data available</td>
                      </tr>
                    ) : (
                      currentItems.map((dataa, index) => (
                        <tr key={index}>
                          <td>{indexOfFirstItem + index + 1}</td>
                          <td style={{ paddingLeft: "19px" }}>
                            <img
                              src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${dataa.photo}`}
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                margin: "5px 0",
                              }}
                              draggable={false}
                              onError={handleimg}
                            />
                          </td>
                          <td>{dataa.title}</td>
                          <td>{dataa.date}</td>
                          <td>{dataa.description}</td>
                          <td>{dataa.address}</td>
                          {/* <td>
                            <div className="table-actions d-flex">
                              <Link
                                className="delete-table me-2"
                                to={`/editcountry/${dataa.id}`}
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                            </div>
                          </td> */}
                          <td>
                            <div className="table-actions d-flex">
                              <Link
                                className="delete-table me-2"
                                to={`/editenevnt/${dataa.id}`}
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                              <NavLink
                                className="delete-table delll"
                                onClick={() => handleDelete(dataa.id)} // Pass a function reference
                              >
                                <i class="fa-solid fa-trash"></i>
                              </NavLink>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </table>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <nav className="mt-4 pagination justify-content-end gap-2">
              <select
                className="form-select"
                style={{ width: "70px", padding: "0 13px" }}
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              <ReactPaginate
                className="pagination justify-content-center"
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                pageClassName={"page-link"}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
              />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
