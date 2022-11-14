import { Card } from "react-bootstrap";
import formatCurrency from "./../utilities/formatCurrency";

type storeItemProps = {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
};
const StoreItem = ({ id, imgUrl, price, name }: storeItemProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="350px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-0.7">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
