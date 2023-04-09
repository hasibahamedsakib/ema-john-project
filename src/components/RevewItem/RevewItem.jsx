import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./reviewItem.css";
const ReviewItem = ({ product, deleteItem }) => {
  return (
    <div className="reviewItem">
      <div style={{ display: "flex" }}>
        <div className="item-img">
          <img src={product.img} alt="" />
        </div>
        <div className="item-dec">
          <h3>{product.name}</h3>
          <p>
            Price : <span style={{ color: "orange" }}>{product.price}</span>
          </p>
          <p>
            Shipping Charge:{" "}
            <span style={{ color: "orange" }}> {product.shipping}</span>{" "}
          </p>
        </div>
      </div>

      <div className="item-dlt">
        <FontAwesomeIcon
          onClick={() => deleteItem(product.id)}
          icon={faTrashCan}
          style={{
            fontSize: "25px",
            background: "pink",
            padding: "10px",
            borderRadius: "30px",
            color: "#EB5757",
            cursor: "pointer",
            marginRight: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default ReviewItem;
