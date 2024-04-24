import Body from "@/components/Body";
import Compare from "@/components/Compare";
import Title from "@/components/Title";
import { bluredDataURLs, TEAM } from "@/utils/constants";
import Image from "next/image";

function Page() {
  return (
    <main>
      <section className="relative h-screen w-screen">
        <Image
          src="/project/pexels-tirachard-kumtanom-347141.jpg"
          blurDataURL={bluredDataURLs["/project/pexels-tirachard-kumtanom-347141-blur.jpg"]}
          placeholder="blur"
          alt="about us"
          sizes="50vw"
          fill
          className="h-full object-cover"
        />
        <h1 className="absolute bottom-36 left-20 text-6xl text-zinc-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          About Us
        </h1>
      </section>
      <section className="px-12 pt-20">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6 py-8 lg:w-1/2">
            <span className="font-mono text-4xl font-black leading-tight tracking-tight">
              The need you place for the want you life.
            </span>
          </div>
          <div className="flex flex-col gap-4 py-8 lg:w-1/2">
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
        <Title className="py-8 lg:py-20">From Sketch To Reality</Title>
        <Compare />
        <Title className="pt-12">Design Philosophy</Title>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex w-full flex-col gap-6 py-8 lg:w-1/2">
            <div className="h-full w-full">
              <Image
                src="/project/pexels-binyamin-mellish-186077.jpg"
                blurDataURL={bluredDataURLs["/project/pexels-binyamin-mellish-186077-blur.jpg"]}
                placeholder="blur"
                width={3352}
                height={2286}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full object-cover lg:h-full lg:w-auto"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8 lg:w-1/2">
            <Body>
              Eum vero aperiam commodi ullam cupiditate possimus vel voluptatem
              ipsum velit labore consectetur libero, illo harum ratione
              accusamus, voluptate in! Magni rerum numquam, neque accusamus
              eaque amet sed? Dignissimos dicta voluptatem, perferendis
              laboriosam ullam nemo non similique nam et ex, libero veritatis
              quam, excepturi tenetur? Sint necessitatibus vitae deserunt,
              dolores praesentium dolorum iste eaque a! Dolor ea expedita
              veniam, perspiciatis minima facere voluptate quod enim eos
              aliquid.
            </Body>
            <Body>
              Assumenda dolore quod obcaecati corrupti reprehenderit nam
              temporibus, veniam tempora magni ab asperiores aperiam recusandae?
              Est porro, alias autem provident delectus accusantium voluptatem?
            </Body>
            <Body>
              Rem, illo odit aut eius totam repellat temporibus tempora mollitia
              voluptates beatae corporis sunt dolores rerum optio fugit in
              quibusdam cupiditate est consectetur nesciunt ipsam perferendis
              quis iusto. Optio eius quam quo sit? Sint culpa ut consequuntur
              vitae eligendi error laboriosam animi excepturi labore praesentium
              voluptatibus maiores dicta itaque non officia cumque saepe rerum
              voluptate minima dolorem tenetur, tempora hic, consequatur
              asperiores. Ab aspernatur dolor voluptatibus ut deleniti quae quas
              vero ipsa accusamus ipsam nulla culpa cumque recusandae sit,
              officiis repellendus id nisi consequuntur quaerat libero rerum
              officia labore hic. Tempore, unde.
            </Body>
            <Body>
              Perspiciatis iste perferendis recusandae, id voluptatem aut earum
              numquam tempora voluptate dolore harum velit quae blanditiis
              aliquam vel odit sed enim quaerat non corporis accusamus.
            </Body>
            <Body>
              Cupiditate reiciendis vitae dolorum deserunt, obcaecati mollitia
              voluptate sunt harum optio ad ullam alias suscipit repudiandae
              dignissimos quasi dolor minima ratione totam! Quam accusamus
              distinctio non sapiente. Iste quibusdam error et id consectetur
              harum, atque dolore soluta exercitationem, eos, aut illo. Eos quo
              exercitationem similique officia nulla, quaerat assumenda!
            </Body>
          </div>
        </div>
        <Title className="pt-20">Design for the Environment</Title>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 py-8 lg:w-1/2">
            <Body>
              Dicta blanditiis nobis cum unde culpa dolor magni facere totam
              expedita nostrum? Impedit, ut. Reiciendis in, animi tempora,
              beatae, porro consequuntur provident dolorum similique voluptatem
              tenetur nam eveniet amet laudantium tempore placeat! Repellendus,
              maiores aspernatur! Nostrum laborum numquam rerum sint magnam
              quisquam. Nihil, asperiores?
            </Body>
            <Body>
              Magnam atque veritatis quae cupiditate odio culpa temporibus!
              Perspiciatis obcaecati voluptas quis sunt aut corporis aliquid
              architecto assumenda, exercitationem quaerat iusto est ducimus sed
              distinctio nobis tempora sit nam?
            </Body>
            <Body>
              Fugiat expedita et, culpa quia ratione reprehenderit ipsam
              doloribus mollitia ea id hic deleniti! Sed soluta et ea
              necessitatibus doloremque harum libero? Tenetur ipsa, quidem
              repudiandae error suscipit quasi recusandae reprehenderit magni
              praesentium iste cupiditate incidunt quam mollitia consequuntur
              voluptate et dignissimos. Vel error nemo totam vitae mollitia
              nihil id quisquam sint maxime maiores necessitatibus commodi quasi
              voluptatem, optio similique! Ducimus distinctio tempore tenetur
              ratione?
            </Body>
            <Body>
              Perspiciatis iste perferendis recusandae, id voluptatem aut earum
              numquam tempora voluptate dolore harum velit quae blanditiis
              aliquam vel odit sed enim quaerat non corporis accusamus.
            </Body>
          </div>
          <div className="flex flex-col gap-6 py-8 lg:w-1/2">
            <div className="h-full w-full">
              <Image
                src="/project/pexels-expect-best-323772.jpg"
                blurDataURL={bluredDataURLs["/project/pexels-expect-best-323772-blur.jpg"]}
                placeholder="blur"
                width={6000}
                height={4000}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full object-cover lg:h-full lg:w-auto"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
        <Title className="pt-20">Design for Health & Wellbeing</Title>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6 py-8 lg:w-1/2">
            <div className="h-full w-full">
              <Image
                src="/project/pexels-pixabay-276724.jpg"
                blurDataURL={bluredDataURLs["/project/pexels-pixabay-276724-blur.jpg"]}
                placeholder="blur"
                width={1920}
                height={1080}
                alt="pexels-aleksandar-pasaric-1758672.jpg"
                className="h-auto w-full object-cover lg:h-full lg:w-auto"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8 lg:w-1/2">
            <Body>
              Similique tenetur quidem magni et tempore, molestias doloremque.
              Fuga molestiae autem, officia mollitia labore animi consequuntur
              eos fugit vero similique laboriosam suscipit qui, dolores,
              quisquam a! Ex quasi, mollitia nostrum dolor fugiat laboriosam
              laudantium perspiciatis, sequi quas unde eius velit aut enim dicta
              soluta temporibus vel est beatae voluptas ratione. Ullam
              consequatur inventore velit quaerat beatae.
            </Body>
            <Body>
              Atque aspernatur ipsum dolorem quod porro accusantium, voluptas
              quaerat beatae, perferendis ullam, qui iure neque consectetur
              voluptatum vel facere repellendus doloremque fugit aliquid
              perspiciatis sequi labore tenetur eveniet. Quos hic dolorum quas!
            </Body>
            <Body>
              Perspiciatis doloremque expedita ratione, beatae, quidem
              voluptates officiis odio impedit consequuntur tenetur quod unde
              laboriosam dolorum vel veniam nobis, aliquam minima eveniet magni
              ducimus. Dicta nisi rerum, aperiam natus provident, sequi a nemo
              ipsam laudantium fuga nam doloribus facere ex dolore suscipit
              ratione hic, deserunt nostrum animi delectus.
            </Body>
            <Body>
              Ad totam et deserunt autem quod dolore nesciunt est, ipsam sequi!
              Sunt debitis incidunt totam, veritatis ut architecto, praesentium
              enim soluta amet voluptatibus ullam qui, cupiditate vero est!
              Error accusantium fuga eum sit possimus voluptate ducimus amet
              qui, nisi voluptatibus odit magni, ea eveniet consequuntur?
              Deserunt ratione suscipit nihil neque beatae vitae ex fugit
              possimus molestias autem!
            </Body>
          </div>
        </div>
      </section>
      <section className="px-12 pt-20">
        <Title>Team</Title>
        <ul className="flex flex-wrap items-center justify-center gap-2 py-20">
          {TEAM.map(({ cover, coverHeight, coverWidth, name }, i) => (
            <li
              className="group relative flex h-full w-[49%] items-end justify-start overflow-hidden duration-700 after:block after:pb-[100%] after:content-[''] hover:bg-zinc-900/35 lg:w-[32%]"
              key={`team-${i}`}
            >
              <Image
                src={cover}
                blurDataURL={bluredDataURLs[cover.replace(".", "-blur.")]}
                placeholder="blur"
                alt={`cover-${name}`}
                className="absolute -z-10 h-full w-full object-cover brightness-90 duration-500 group-hover:scale-105 group-hover:brightness-100"
                width={coverWidth}
                height={coverHeight}
                sizes="33vw"
              />
              <span className="w-full bg-zinc-800/60 px-4 py-2 text-zinc-100 duration-500 group-hover:bg-zinc-800 group-hover:py-3">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Page;
