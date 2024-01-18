import React from "react";
import "./index.scss";
import axios from "axios";
const ProductCard = ({ data, getData, setData }) => {
  const deleteProduct = async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
    getData();
  };
  const handleSearch = async (inputValue) => {
    const res = await axios("https://northwind.vercel.app/api/suppliers");
    let filtered = res.data.filter((item) =>
      item.companyName
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase())
    );
    setData(filtered);
    console.log(filtered);
  };

  const sortAscFunc = async () => {
    const res = await axios("https://northwind.vercel.app/api/suppliers");
    let ascSorted = res.data.sort(
      (a, b) => a.address.postalCode - b.address.postalCode
    );
    setData(ascSorted);
  };

  const sortDesFunc = async () => {
    const res = await axios("https://northwind.vercel.app/api/suppliers");
    let decSorted = res.data.sort(
      (a, b) => b.address.postalCode - a.address.postalCode
    );

    setData(decSorted);
  };

  const defaultFunc = () => {
    getData();
  };
  return (
    <div id="ourabout">
      <div className="container">
        <div className="ourabout">
          <h1 className="ourabout-h1"> ABOUT OUR BIZPRO</h1>
          <hr />
          <p className="ourabout-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type.
          </p>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => {
              handleSearch(event.target.value);
            }}
          />
          <button
            onClick={() => {
              sortAscFunc();
            }}
          >
            Ascending
          </button>

          <button
            onClick={() => {
              sortDesFunc();
            }}
          >
            Descending
          </button>

          <button
            onClick={() => {
              defaultFunc();
            }}
          >
            Default
          </button>
          <div id="cards">
            <div className="cards-container">
              <div className="cards">
                {data.map((item) => {
                  return (
                    <div className="card" key={item.id}>
                      <div class="card-body">
                        <h4 class="card-title">
                          Company Name : {item.companyName}
                        </h4>
                        <p class="card-text">
                          Contact Name : {item.contactName}
                        </p>
                        <p class="card-text">
                          Contact Title : {item.contactTitle}
                        </p>
                        <p class="card-text">
                          Postal Code : {item.address?.postalCode}
                        </p>
                        <button
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
