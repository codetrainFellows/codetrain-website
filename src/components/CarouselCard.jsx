import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const CarouselCard = ({ className }) => {
  return (
    <Card
      className={`py-4 pt-0 rounded-none  text-textColor shadow-md ${className}`}
    >
      <Image
        alt="Card background"
        className="object-cover rounded-none"
        src="https://nextui.org/images/hero-card-complete.jpeg"
      />
      <CardBody className="overflow-visible py-2">
        <p>
          “Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
          libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
          vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed et.
          Aenean commodo amet amet lacinia amet porttitor diam.”
        </p>
      </CardBody>
      <hr className="border-violet h-1 my-4" />
      <CardFooter className="flex-col items-start">
        <h4 className="font-bold">Ama Boadi</h4>
        <p>Software engineer at Microsoft</p>
      </CardFooter>
    </Card>
  );
};

export default CarouselCard;
