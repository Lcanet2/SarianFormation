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
    <div className="flex justify-around pt-20 pb-20" id="formations">
      <div className="flex flex-col justify-center items-start max-w-md bg-orange-300 rounded-2xl	">
        <h1 className="text-4xl font-black mb-4 text-gray-800 bg-orange-300">
          Nos Formations
        </h1>
        <h2 className="text-xl text-gray-600 bg-orange-300">
          Explorez nos formations complètes pour obtenir votre permis
          correspondant à votre besoin.
        </h2>
      </div>
      <Carousel className="w-full max-w-4xl">
        <CarouselContent className="-ml-2">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card className="h-64 w-64 flex items-center justify-center border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-white hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full w-full">
                    <span className="text-lg  text-gray-800">{item.title}</span>
                    <div className="flex items-center justify-center pt-3 text-gray-700 text-3xl">
                      {item.icon}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent" />
        <CarouselNext className="bg-transparent" />
      </Carousel>
    </div>
  );
};

export default Body;
