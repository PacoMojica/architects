import Map from "@/components/Map";
import Title from "@/components/Title";

function Page() {
  return (
    <main className="px-12 pb-20">
      <Title>Contact</Title>
      <section className="flex h-full min-h-96 w-full flex-wrap gap-4 items-center">
        <div className="h-max w-[30%] flex-grow">
          <Map
            highlight="MX-JAL"
            fill="duration-500 fill-sky-500 stroke-2 stroke-zinc-200 group-hover:brightness-125"
          />
          <h2 className="mb-4 font-mono text-4xl tracking-tight">Jalisco</h2>
          <p className="font-mono tracking-tighter">
            Loma Bonita 2200, Jardines de la Luna
          </p>
          <p className="font-mono tracking-tighter">80030 Zapopan, Jalisco</p>
        </div>
        <div className="h-max w-[30%] flex-grow">
          <Map
            highlight="MX-NEL"
            fill="duration-500 fill-sky-500 stroke-2 stroke-zinc-200 group-hover:brightness-125"
          />
          <h2 className="mb-4 font-mono text-4xl tracking-tight">Nuevo Leon</h2>
          <p className="font-mono tracking-tighter">
            Amado Nervo 1337, Chapalita
          </p>
          <p className="font-mono tracking-tighter">
            80090 San Pedro Garza García, Nuevo Leon
          </p>
        </div>
        <div className="h-max w-[30%] flex-grow">
          <Map
            highlight="MX-GUA"
            fill="duration-500 fill-sky-500 stroke-2 stroke-zinc-200 group-hover:brightness-125"
          />
          <h2 className="mb-4 font-mono text-4xl tracking-tight">Guanajuato</h2>
          <p className="font-mono tracking-tighter">
            Juan Alonso de Torres 8986, Valle del Campestre
          </p>
          <p className="font-mono tracking-tighter">
            37150 León de los Aldama, Guanajuato
          </p>
        </div>
      </section>
    </main>
  );
}

export default Page;
