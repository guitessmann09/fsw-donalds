import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

const HomePage = async () => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug: "fsw-donalds",
    },
  });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-5 pt-8 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Clique no botão abaixo para escolher a forma de consumo!
        </p>
        <Button variant="destructive" className="w-full rounded-lg" asChild>
          <Link href={`/${restaurant.slug}/`}>Escolher a forma de consumo</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
