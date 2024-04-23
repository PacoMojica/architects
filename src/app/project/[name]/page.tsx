import Body from "@/components/Body";
import Divider from "@/components/Divider";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";

interface Params {
  name: string;
}

interface PageProps {
  params: Params;
}

export const generateStaticParams = async () => {
  const names = PROJECTS.map(({ name }) => ({ name }));
  return names;
};

const getProject = async ({ name }: Params) => {
  const project = PROJECTS.find((p) => p.name === name) || PROJECTS[0];

  return project;
};

async function Page({ params }: PageProps) {
  const { name } = params;
  const project = await getProject(params);

  return (
    <main>
      <section className="relative h-screen w-screen">
        <Image
          src={project.cover}
          blurDataURL={project.cover.replace(".", "-blur.")}
          placeholder="blur"
          alt={`${name} cover`}
          width={project.coverWidth}
          height={project.coverHeight}
          className="h-full object-cover"
          sizes="50vw"
        />
        <h1 className="absolute bottom-36 left-20 text-6xl text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
          {project.name}
        </h1>
        <h2 className="absolute bottom-28 left-20 mt-2 text-xl font-thin text-zinc-50 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
          Mount Olympus, Greece
        </h2>
      </section>
      <section className="flex flex-col py-12 lg:flex-row">
        <div className="w-full px-12 py-8">
          <div className="grid items-center gap-2 py-4 md:grid-cols-[auto_1fr] md:grid-rows-5 md:px-6">
            <Body className="bg-zinc-800 px-6 text-center font-bold uppercase text-zinc-50">
              Client
            </Body>
            <Body className="border-l-2 border-zinc-900 bg-gradient-to-r from-zinc-100 to-white px-4">
              {project.name}
            </Body>
            <Body className="bg-zinc-800 px-6 text-center font-bold uppercase text-zinc-50">
              Services
            </Body>
            <Body className="border-l-2 border-zinc-900 bg-gradient-to-r from-zinc-100 to-white px-4">
              New Construction, Interiors
            </Body>
            <Body className="bg-zinc-800 px-6 text-center font-bold uppercase text-zinc-50">
              Location
            </Body>
            <Body className="border-l-2 border-zinc-900 bg-gradient-to-r from-zinc-100 to-white px-4">
              Mount Olympus, Greece
            </Body>
            <Body className="bg-zinc-800 px-6 text-center font-bold uppercase text-zinc-50">
              Size
            </Body>
            <Body className="border-l-2 border-zinc-900 bg-gradient-to-r from-zinc-100 to-white px-4">
              200,000 sq ft
            </Body>
            <Body className="bg-zinc-800 px-6 text-center font-bold uppercase text-zinc-50">
              Status
            </Body>
            <Body className="border-l-2 border-zinc-900 bg-gradient-to-r from-zinc-100 to-white px-4">
              {project.status}
            </Body>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 px-12 py-8">
          <Body indent>{project.description}</Body>
          <Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            deserunt, voluptatum corrupti beatae nulla itaque maiores sint ex
            necessitatibus rem dicta nam aliquam fugiat, quia consequatur ullam
            illum harum, doloremque et porro cum voluptate quae nemo eum. Eos
            voluptatem id excepturi facilis facere sequi, modi a iste
            dignissimos eligendi pariatur vel voluptas, necessitatibus commodi
            illum assumenda quo beatae nisi et delectus? Molestiae dolores,
            explicabo nemo aliquid libero totam est placeat. Provident
            exercitationem inventore praesentium omnis minima.
          </Body>
        </div>
      </section>
      <Divider className="px-12" />
      <section className="px-12 pt-20">
        <figure className="h-max w-full overflow-hidden">
          <Image
            src="/project/pexels-aleksandar-pasaric-1758672.jpg"
            blurDataURL="/project/pexels-aleksandar-pasaric-1758672-blur.jpg"
            placeholder="blur"
            width={5967}
            height={3978}
            alt="pexels-aleksandar-pasaric-1758672.jpg"
            className="h-auto w-full"
            sizes="50vw"
          />
          <figcaption className="w-full bg-white py-4 text-sm">
            Laudantium dolor expedita mollitia libero! Vitae cumque recusandae
            explicabo maiores earum! Est mollitia perspiciatis nulla adipisci
            neque eveniet
          </figcaption>
        </figure>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex w-full flex-col gap-6 py-8 lg:w-1/2">
            <Body indent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil
              porro modi dicta vero impedit id deleniti, cumque sed animi facere
              harum ducimus iste velit, odit tempore culpa aperiam fugit! A,
              omnis.
            </Body>
            <Body>
              Debitis, voluptatibus? Eum corporis vel minima ipsam veritatis
              dolore maiores tempore odit velit officiis vero quasi sit
              consequuntur laborum atque quo architecto inventore ullam, optio a
              incidunt asperiores ducimus esse at! Qui magni deleniti sed
              architecto corporis ad ipsam dolorum earum dicta, eius natus
              dignissimos quos. At animi ea repudiandae numquam neque,
              voluptatum quam, qui sint molestias quod mollitia quo assumenda
              corporis. Error reiciendis a eligendi quaerat sit nihil provident
              eveniet fugiat laborum cupiditate libero atque temporibus nisi
              esse itaque corporis voluptates excepturi voluptatibus,
              accusantium ratione illum.
            </Body>
          </div>
          <div className="flex w-full flex-col gap-4 py-8 lg:w-1/2">
            <Body>
              Sint nostrum praesentium nesciunt illum neque vero repellat
              voluptatum voluptatibus ducimus sit et possimus dicta aut laborum
              soluta, minima veniam quo hic accusamus porro!
            </Body>
            <Body>
              Fuga sapiente minima illo non, placeat libero nam vitae ullam
              dolore, unde porro? Et repellendus nisi atque, sunt dolor nihil
              libero corrupti quia vero debitis odio quaerat, cumque illum
              eligendi velit quis!
            </Body>
            <Body>
              Iure qui non sapiente natus quasi ullam error officia suscipit
              rerum iusto, voluptate, ab accusantium asperiores officiis
              dignissimos facilis voluptates commodi repudiandae distinctio. Ex
              a non expedita facilis. Assumenda saepe fuga commodi
              exercitationem.
            </Body>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6 pt-8 lg:w-1/2">
            <figure className="h-full w-full overflow-hidden">
              <Image
                src="/project/pexels-jean-van-der-meulen-1457844.jpg"
                blurDataURL="/project/pexels-jean-van-der-meulen-1457844-blur.jpg"
                placeholder="blur"
                width={2912}
                height={4368}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full"
                sizes="50vw"
              />
              <figcaption className="w-full bg-white py-4 text-sm">
                Sauscipit, porro. Impedit, quos laudantium similique sit
                veritatis
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-6 pt-8 lg:w-1/2">
            <Body indent>
              Amet totam iste distinctio tenetur, facilis iure exercitationem
              laboriosam dolorem rerum nisi animi repudiandae numquam nam quasi
              fugiat necessitatibus doloremque pariatur reprehenderit?
              Perferendis, saepe corrupti ab exercitationem alias temporibus
              fuga ducimus voluptate dolorum aliquam perspiciatis numquam nihil,
              doloribus suscipit fugiat maxime ipsam ipsum dolor necessitatibus
              similique eligendi nulla ut quis dolores! Voluptate quam incidunt
              qui?
            </Body>
            <Body>
              Rerum voluptate tempora suscipit explicabo error maiores veniam
              magnam libero, accusantium architecto repudiandae animi itaque
              nisi vero nemo ipsam, saepe officia doloribus aspernatur quos.
              Facere totam officia provident ipsa expedita eveniet odit ea optio
              sit, necessitatibus earum deserunt placeat maxime commodi
              assumenda quasi atque ducimus.
            </Body>
            <Body>
              Ipsum quae sunt, iusto iure iste possimus quasi itaque velit
              fugiat, nostrum inventore blanditiis labore. Amet nihil rerum
              atque fugit ex in sint doloribus enim mollitia? Dolore ipsum
              quidem, repellat maxime inventore dolor reprehenderit nihil
              commodi repudiandae saepe nesciunt, laborum optio. Exercitationem
              atque mollitia reiciendis aliquam, minima omnis itaque laudantium
              eius iusto nisi fugiat tempore?
            </Body>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6 py-8 lg:w-1/2">
            <Body indent>
              Perferendis, hic corporis deleniti, minima dolorum placeat
              adipisci, tempore quia nostrum eligendi alias dignissimos corrupti
              veniam quis asperiores sed pariatur at reiciendis. Possimus rerum
              harum aspernatur adipisci, similique obcaecati eaque dolore atque
              ex rem excepturi placeat et autem nesciunt deleniti perferendis in
              error neque ratione hic sequi ipsa. Optio odit nemo assumenda
              beatae, magnam iusto? Sed eaque quisquam ea voluptas quibusdam.
              Quasi, animi. Ipsam assumenda laborum veniam esse alias harum sint
              quos odio doloribus quasi sapiente in, a excepturi odit id ab
              dolor. Incidunt reiciendis inventore molestiae quisquam voluptate
              cum modi a. Molestiae ratione obcaecati repellendus nobis
              inventore ea. Quibusdam pariatur minus natus sapiente dolorum at
              consectetur autem nesciunt laboriosam fugiat officia modi illo
              nemo, officiis quaerat id similique ea, voluptatum doloribus?
              Labore est, rem ab nihil quia dignissimos nulla doloremque maiores
              quo rerum aliquam? Suscipit cupiditate earum mollitia laudantium
              distinctio eum. Laborum, quibusdam possimus!
            </Body>
            <Body>
              Recusandae at, quod in minima earum delectus quibusdam amet ullam
              quo quos officia error ipsum laudantium fugiat ducimus rerum
              architecto, nam quis cum enim pariatur. Facilis, cum hic.
              Consequuntur odio tempora quos necessitatibus eos? Odit aspernatur
              suscipit neque nesciunt reiciendis quos excepturi velit assumenda
              vero officiis repellat incidunt architecto voluptate fugit
              asperiores, sit facilis dolores enim ipsum quibusdam ipsam
              consequuntur necessitatibus quam dolorum! Expedita in, alias eius
              qui dolorem illum reiciendis labore earum laborum ad suscipit illo
              quaerat facere harum minus eaque recusandae ab nobis eveniet
              minima dolores vero. Perferendis nemo quaerat fugit natus velit
              repudiandae cumque.
            </Body>
          </div>
          <div className="flex flex-col gap-4 py-8 lg:w-1/2">
            <Body>
              Ea eligendi aperiam eum pariatur libero tempora laboriosam nisi
              amet possimus vero consectetur ipsa odit sunt voluptatum quam rem
              illo officiis, debitis quis obcaecati. Officia animi minus
              mollitia suscipit recusandae accusantium veritatis laborum magni
              officiis atque. Cum, neque obcaecati aliquid voluptas magnam totam
              est nobis eum ut at, explicabo architecto quam maxime laborum
              inventore? Rem blanditiis cupiditate corrupti cum similique
              reprehenderit, porro, tempora quia voluptatum aperiam iste neque
              aspernatur, numquam fugiat dolorum a accusamus nisi id. Voluptas
              impedit accusamus sint earum! Molestias autem fugit velit. Illum
              eius perferendis esse quasi, velit ipsa repellendus sapiente quos
              dolore. Debitis ex dignissimos id, accusantium unde velit dolore
              commodi quidem sequi cupiditate nulla harum tempore quae aperiam
              vel magni labore quia, nostrum esse amet omnis in. Labore quisquam
              nemo minima at accusantium doloremque perferendis qui hic sunt
              est. Optio modi quo rem consequatur et laudantium molestias, est
              molestiae. Praesentium.
            </Body>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6 pt-8 lg:w-1/2">
            <figure className="w-full overflow-hidden">
              <Image
                src="/project/pexels-life-of-pix-14613.jpg"
                blurDataURL="/project/pexels-life-of-pix-14613-blur.jpg"
                placeholder="blur"
                width={4126}
                height={2848}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full"
                sizes="50vw"
              />
              <figcaption className="w-full bg-white py-4 text-sm">
                Deleniti consequuntur, harum laudantium quo asperiores
                necessitatibus architecto
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-6 pt-8 lg:w-1/2">
            <figure className="w-full overflow-hidden">
              <Image
                src="/project/pexels-igor-starkov-1117452.jpg"
                blurDataURL="/project/pexels-igor-starkov-1117452-blur.jpg"
                placeholder="blur"
                width={3409}
                height={2482}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full"
                sizes="50vw"
              />
              <figcaption className="w-full bg-white py-4 text-sm">
                Voluptates, eveniet. Animi ad atque molestiae tempora iusto
                dolor magnam consequuntur qui porro non
              </figcaption>
            </figure>
          </div>
        </div>
        <figure className="h-max w-full overflow-hidden pt-8">
          <Image
            src="/project/pexels-pixabay-258160.jpg"
            blurDataURL="/project/pexels-pixabay-258160-blur.jpg"
            placeholder="blur"
            width={4608}
            height={3456}
            alt="pexels-aleksandar-pasaric-1758672.jpg"
            className="h-auto w-full"
            sizes="50vw"
          />
          <figcaption className="w-full bg-white py-4 text-sm">
            Ipsum maiores possimus repudiandae aperiam modi laudantium qui
            aspernatur suscipit doloremque
          </figcaption>
        </figure>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6 pt-8 lg:w-1/2">
            <Body indent>
              Vero libero sapiente modi maxime, ab neque error iste!
              Exercitationem, natus id. Nesciunt labore earum quasi atque.
              Eveniet, laborum delectus possimus, ut optio suscipit mollitia
              dicta quis deleniti consectetur nostrum assumenda nulla adipisci,
              amet fugiat vel non magni doloremque ad enim expedita commodi. Ab
              amet recusandae harum fugit? Alias sint possimus eligendi quas
              quam beatae esse reiciendis illo suscipit ratione? Id, ratione
              odit expedita hic vero reiciendis iusto iste aliquid eum quos
              itaque sint harum impedit eligendi, quisquam quas tempore
              doloribus illo, veniam voluptate sapiente quaerat? Officia?
            </Body>
            <Body>
              Dolorem ipsam repudiandae delectus, vero excepturi possimus
              voluptas temporibus omnis odit reprehenderit cumque, ex, quam
              facere magni explicabo. Consectetur voluptatum fuga aut similique
              dolor consequatur, doloremque cum quam iure ea numquam nulla quis
              at totam aliquam aperiam commodi molestias blanditiis quod iusto
              autem culpa incidunt. Unde esse sunt fuga doloribus cumque numquam
              impedit assumenda natus, odio voluptatem quia ducimus adipisci rem
              harum, tempore veritatis excepturi porro nisi voluptate
              reiciendis, qui consequatur laborum at beatae. Hic ullam corrupti
              tempore! Fugit, sit. Doloremque eaque fugit quo necessitatibus
              quasi, porro ab, consectetur quas perferendis placeat cumque quae
              explicabo eius saepe officia consequuntur tempore, asperiores
              reiciendis eum quibusdam fuga nobis magnam ipsam. Quos porro
              aliquid fuga fugiat, suscipit repellendus animi incidunt, quisquam
              perspiciatis optio voluptatum quae.
            </Body>
            <Body>
              Alias, officiis porro consectetur totam ab incidunt cum voluptatem
              repudiandae harum blanditiis corrupti praesentium eum saepe quia
              dignissimos nihil. Veritatis minus reprehenderit nulla impedit
              numquam odit inventore vero, repellendus assumenda ad laboriosam
              atque eos, officiis perferendis. Fugiat ab architecto
              necessitatibus et voluptatem.
            </Body>
          </div>
          <div className="flex flex-col gap-6 pt-8 lg:w-1/2">
            <figure className="h-full w-full overflow-hidden">
              <Image
                src="/project/pexels-pixabay-210158.jpg"
                blurDataURL="/project/pexels-pixabay-210158-blur.jpg"
                placeholder="blur"
                width={5776}
                height={3826}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full object-cover"
                sizes="50vw"
              />
              <figcaption className="w-full bg-white py-4 text-sm">
                Libero maxime ab eaque aliquid quam quis
              </figcaption>
            </figure>
          </div>
        </div>
        <figure className="h-max w-full overflow-hidden pt-8">
          <Image
            src="/project/pexels-photo-1633970.jpeg"
            blurDataURL="/project/pexels-photo-1633970-blur.jpeg"
            placeholder="blur"
            width={5797}
            height={3724}
            alt="pexels-aleksandar-pasaric-1758672.jpg"
            className="h-auto w-full"
            sizes="50vw"
          />
          <figcaption className="w-full bg-white py-4 text-sm">
            Quaerat saepe iusto molestiae officia, praesentium, dignissimos
            similique laborum reprehenderit, natus odit voluptatibus
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

export default Page;
