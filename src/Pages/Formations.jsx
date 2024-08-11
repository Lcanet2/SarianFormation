import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowLeftRight,
  BookText,
  Car,
  Caravan,
  HandCoins,
  LifeBuoy,
  NotebookPen,
  Truck,
} from "lucide-react";
import "../global.css";

const Body = () => {
  const carouselItems = [
    {
      title: "Permis C1 et C1E",
      icon: (
        <>
          <Caravan />
          <Truck />
        </>
      ),
    },
    { title: "Permis C", icon: <Truck /> },
    {
      title: "Permis B96",
      icon: (
        <>
          <Caravan />
          <Car />
        </>
      ),
    },
    { title: "Permis BE", icon: <Truck /> },
    { title: "Equivalence permis de conduire", icon: <ArrowLeftRight /> },
    { title: "Récupération des points", icon: <LifeBuoy /> },
    { title: "Modalité de traitement des réclamations", icon: <BookText /> },
    { title: "Règlement intérieur", icon: <NotebookPen /> },
    { title: "Compte Professionnel de formation", icon: <HandCoins /> },
  ];

  return (
    <div>
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
                <div className="p-1 ">
                  <Card className="h-64 w-64 flex items-center justify-center border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
                    <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full w-full ">
                      <span>{item.title}</span>
                      <div className="flex items-center justify-center pt-3">
                        {item.icon}
                      </div>
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
      <div className="w-full my-12 flex justify-center">
        <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default Body;
