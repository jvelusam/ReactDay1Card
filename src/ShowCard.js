import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

export default function ShowCard({ value, addTocart }) {
  return (
    <Card
      style={{
        width: "18rem"
      }}
    >
      <img alt="Sample" src={value.images} />
      <CardBody>
        <CardTitle tag="h5">{value.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {value.price}
        </CardSubtitle>
        <CardText>{value.description}</CardText>
        <Button onClick={() => addTocart(value)}>Add to Card</Button>
      </CardBody>
    </Card>
  );
}
