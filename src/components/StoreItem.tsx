import { Card } from "react-bootstrap";

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
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-1">{name}</span>
          <span className="fs-1">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
