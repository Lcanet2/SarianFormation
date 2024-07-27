import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Truck } from "lucide-react";
import "../global.css";

const Body = () => {
  const carouselItems = [
    { title: "Permis C1 et C1E", icon: <Truck /> },
    { title: "Permis C", icon: <Truck /> },
    { title: "Permis B96", icon: <Truck /> },
    { title: "Permis BE", icon: <Truck /> },
    { title: "Equivalence permis de conduire", icon: <Truck /> },
    { title: "Récupération des points", icon: <Truck /> },
    { title: "Modalité de traitement des réclamations", icon: <Truck /> },
    { title: "Règlement intérieur", icon: <Truck /> },
    { title: "Compte Professionnel de formation", icon: <Truck /> },
  ];

  return (
    <div className="flex justify-around pt-20 pb-20">
      <div className="flex flex-col justify-center items-start max-w-md">
        <h1 className="text-2xl font-bold mb-2">Nos Formations</h1>
        <h2 className="text-lg">
          Explorez nos formations complètes pour obtenir votre permis
          correspondant à votre besoin.
        </h2>
      </div>
      <Carousel className="w-full max-w-4xl">
        <CarouselContent className="-ml-1">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-64 w-64 flex items-center justify-center">
                  <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full w-full">
                    <span>{item.title}</span>
                    {item.icon}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Body;
