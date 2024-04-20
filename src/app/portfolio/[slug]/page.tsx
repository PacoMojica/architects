import Body from "@/components/Body";
import GridContainer from "@/components/GridContainer";
import GridItem from "@/components/GridItem";
import Title from "@/components/Title";
import { GRID_CATEGORIES, PROJECTS } from "@/utils/constants";

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
}

export const generateStaticParams = async () => {
  const paths = GRID_CATEGORIES.slice(1).map((slug) => ({ slug }));
  return paths;
};

const getProjects = async ({ slug }: Params) => {
  const projects = PROJECTS.filter(({ categories }) =>
    categories.includes(slug),
  );

  return projects;
};

async function Page({ params }: PageProps) {
  const { slug } = params;
  const projects = await getProjects(params);

  return (
    <main>
      <section className="w-full px-12">
        <div className="my-8 flex w-full flex-col items-center justify-center gap-4">
          <Title>{slug}</Title>
          <Body className="my-2 w-11/12" indent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            esse perferendis consequuntur inventore quia non quasi, aut
            exercitationem et dolorem doloribus tenetur mollitia blanditiis
            impedit maiores, corporis debitis, ab dolor autem ad ex molestias
            optio? Quo vero reiciendis reprehenderit suscipit atque dolorum sed
            minus aspernatur amet repellat cumque pariatur minima quas sequi,
            dolore exercitationem odio quis laudantium impedit eveniet totam
            saepe. Nisi harum nobis quibusdam, fugiat blanditiis molestias.
            Asperiores ullam, deleniti, nulla tempore vero blanditiis cumque ab
            voluptate sed praesentium quas earum ut!
          </Body>
          <Body className="my-2 w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            laboriosam reprehenderit provident animi quis esse ut reiciendis
            maxime placeat sed rem, minima iste voluptatibus voluptas!
            Doloremque minima distinctio laudantium ipsam esse reiciendis ad,
            quisquam omnis eos dolorem, magnam eius eveniet, assumenda
            consequuntur tempora itaque. Dolorem qui eum, sunt, placeat commodi
            odit necessitatibus iusto quasi beatae, nihil deserunt totam nobis
            molestiae harum officiis culpa eos quo minus voluptates dicta
            temporibus similique nostrum ipsa. Qui porro nulla nobis, doloremque
            soluta excepturi placeat sapiente repellendus sit, quisquam impedit,
            quasi quibusdam. Tempora voluptate eaque a provident cumque minus,
            nam optio? Voluptas ipsa, distinctio nemo error vero consequuntur
            earum sit in. Culpa, vero optio magnam veritatis, iusto quo autem
            unde obcaecati commodi deserunt eos. Praesentium ipsum aspernatur
            cum sequi.
          </Body>
        </div>
        <GridContainer>
          {projects.map((project, i) => (
            <GridItem key={`grid-item-${project.name}-${i}`} {...project} />
          ))}
        </GridContainer>
      </section>
    </main>
  );
}

export default Page;
