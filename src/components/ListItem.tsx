import { memo } from "react";

const ListItem = (props: { model: string; brand: string; key: number }) => {
  return (
    <>
      <ul
        className="item-list"
        style={
          props.brand === "AMD"
            ? { borderColor: "red" }
            : { borderColor: "green" }
        }
      >
        <li className="item-list-brand">{props.brand}</li>
        <li className="item-list-model">{props.model}</li>
      </ul>
    </>
  );
};

export default memo(ListItem);
