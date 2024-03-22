import Image from "next/image";
import Link from "next/link";
import buildingBg from "public/building.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <h1 className="h-12 leading-6 font-semibold text-xl text-center">
        VOTRE INTERLOCUTEUR EN{" "}
        <span className="text-red-800">PRÊTS IMMOBILIERS</span> ET{" "}
        <span className="text-red-800">ASSURANCES EMPRUNTEURS</span> …
      </h1>
      <div className="h-96 relative p-8">
        <Image
          src={buildingBg}
          alt="building background"
          className="absolute -z-10 top-0 object-cover"
          fill
          // width={100}
          // height={24}
          // priority
        />
        <div className="h-80 p-4 rounded-xl border backdrop-blur-sm  bg-white/30 max-w-screen-xl m-auto flex gap-8">
          <div className="flex text-lg justify-between flex-col">
            {/* <div className="flex-1"> */}
            <div className="font-semibold">
              LES <span className="text-red-800">TAUX</span> D’INTERET DU MOIS:
            </div>
            <div>
              <div className="font-bold">Durée de votre pret</div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="outline">7 ans</Button>
                <Button variant="outline">10 ans</Button>
                <Button variant="outline">15 ans</Button>
                <Button variant="outline">20 ans</Button>
                <Button variant="outline">25 ans</Button>
              </div>
            </div>
            <div>
              <div className="font-bold">La region de votre projet</div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="outline">National</Button>
                <Button variant="outline">Nord</Button>
                <Button variant="outline">Est</Button>
                <Button variant="outline">Ouest</Button>
                <Button variant="outline">Sud-Est</Button>
                <Button variant="outline">Sud-Ouest</Button>
                <Button variant="outline">Paris IDF</Button>
                <Button variant="outline">Rhones Alpes</Button>
              </div>
            </div>
            {/* </div> */}
          </div>
          <Card className="w-1/3 flex flex-col justify-between bg-red-400/30 rounded-xl p-4 items-center gap-2">
            <CardHeader>
              <CardTitle className="font-semibold">Top taux</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4%</p>
            </CardContent>
            <CardFooter>
              <Link
                href="/obtenir-un-pret"
                className="border rounded-lg bg-white/50 p-2 self-stretch"
              >
                J&apos;obtient mon prêt en 2 minutes
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="m-auto divide-y divide-red-800 max-w-5xl">
        <div className="text-xl leading-5 my-4 mt-12">
          POURQUOI SIGNATURE COURTAGE EST LE MEILLEUR INTERLOCUTEUR POUR VOTRE
          PROJET IMMOBILIER
        </div>
        <div className="my-8 text-center">
          <div className="my-8 text-lg leading-5">
            UN COURTIER INDEPENDANT QUI TRAVAILLE AVEC TOUS LES ORGANISMES
            BANCAIRES
          </div>
          <div>
            En qualité de courtiers indépendants nous avons la capacité de
            travailler avec la totalité des prêteurs du marché français, y
            compris les institutions fermées aux particuliers. Grâce à ce large
            panel d’organismes nous pouvons comparer efficacement les offres de
            prêt et vous apporter des propositions de qualité en adéquation avec
            vos objectifs personnels !
          </div>
        </div>
        <div className="my-8 text-center">
          <div className="my-8 text-lg leading-5">
            UNE ECONOMIE DE TEMPS CONSEQUENTE ET UN ACCOMPAGNEMENT ADMINSITRATIF
            AVANCE
          </div>
          <div>
            Le courtier Signature Courtage se chargent de la recherche, de la
            négociation et de l’obtention de votre crédit mais son travail ne
            s’arrête pas là ! Il vous accompagne également en rendez-vous banque
            afin de s’assurer que toutes vos demandes ont été satisfaites et que
            le banquier s’engage à les tenir. Il s’occupe également du déblocage
            des fonds jusqu’au suivi de la réception chez le Notaire. Il se fera
            un plaisir de vous aider à la rédaction et la compréhension de tous
            les documents inhérents à l’acquisition immobilière et réduira
            considérablement votre stress lié au processus de demande de prêt !
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="h-12 leading-6 text-xl divide-y">
          SUIVEZ LES ACTUALITES DU MARCHE
        </div>
        <Input placeholder="Posez nous votre question" />
        <div className="mt-12 flex justify-around gap-4">
          <Card className="w-1/3">
            <CardHeader className="p-0">
              <Image src={buildingBg} alt="building background" />
              <CardTitle className="p-3">Actu</CardTitle>
              <CardDescription className="p-3">Sous titre</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader className="p-0">
              <Image src={buildingBg} alt="building background" />
              <CardTitle className="p-3">Actu</CardTitle>
              <CardDescription className="p-3">Sous titre</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader className="p-0">
              <Image src={buildingBg} alt="building background" />
              <CardTitle className="p-3">Actu</CardTitle>
              <CardDescription className="p-3">Sous titre</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
