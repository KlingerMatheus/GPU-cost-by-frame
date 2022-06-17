import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, memo, useEffect } from "react";

const ListItem = (props: { model: string; brand: string; key: number }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <>
      <ul
        className={"item-list" + (isVisible ? "" : " no-visibility")}
        style={
          props.brand === "AMD"
            ? { borderColor: "red" }
            : { borderColor: "green" }
        }
      >
        <li className="item-list-brand">{props.brand}</li>
        <li className="item-list-model">{props.model}</li>
        <div className="item-list-options">
          <button
            onClick={() => {
              setIsVisible((prevState) => !prevState);
            }}
            className="btn-icon btn-visibility"
          >
            <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
          </button>
          <button className="btn-icon btn-delete">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </ul>
    </>
  );
};

export default memo(ListItem);
