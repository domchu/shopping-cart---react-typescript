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
    </Card>
  );
};

export default StoreItem;
