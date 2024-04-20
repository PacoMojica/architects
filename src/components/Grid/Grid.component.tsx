"use client";

import GridContainer from "@/components/GridContainer";
import GridItem from "@/components/GridItem";
import Title from "@/components/Title";
import { GRID_CATEGORIES, PROJECTS } from "@/utils/constants";
import { MouseEventHandler, useEffect, useState } from "react";

const PAGE_SIZE = 6;

interface TabProps {
  label: string;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
}

function Tab({ label, isSelected, onClick }: TabProps) {
  const color = isSelected
    ? "bg-zinc-900 text-zinc-50"
    : "bg-zinc-400 text-white hover:bg-zinc-600";

  return (
    <li
      className={`cursor-pointer border border-transparent px-2 py-1 hover:border-zinc-900 ${color}`}
      onClick={onClick}
    >
      <span className="uppercase">{label}</span>
    </li>
  );
}

function Grid() {
  const [selected, setSelected] = useState<string>(GRID_CATEGORIES[0]);
  const [page, setPage] = useState<number>(1);
  const start = (page - 1) * PAGE_SIZE;
  const end = page * PAGE_SIZE;
  const filteredProjects = PROJECTS.filter(
    ({ categories }) =>
      selected === GRID_CATEGORIES[0] || categories.includes(selected),
  );
  const pages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const currentPage = filteredProjects.slice(start, end);

  const handleNext = () => {
    const next = page + 1 > pages ? 1 : page + 1;
    setPage(next);
  };

  const handlePrevious = () => {
    const previous = page - 1 < 1 ? pages : page - 1;
    setPage(previous);
  };

  useEffect(() => {
    setPage(1);
  }, [selected]);

  return (
    <section className="w-full">
      <Title>Projects</Title>
      <ul className="flex gap-4 py-8">
        {GRID_CATEGORIES.map((category, i) => (
          <Tab
            key={`grid-tab-${category}-${i}`}
            label={category}
            isSelected={selected === category}
            onClick={() => setSelected(category)}
          />
        ))}
      </ul>
      <GridContainer>
        {currentPage.map((project, i) => (
          <GridItem key={`grid-item-${project.name}-${i}`} {...project} />
        ))}
      </GridContainer>
      <ul className="mt-8 flex items-center justify-center gap-2">
        <li
          onClick={handlePrevious}
          className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center border border-stone-400 text-stone-400 duration-500 hover:border-zinc-900 hover:text-zinc-900"
        >
          <span>❮</span>
        </li>
        {Array.from({ length: pages }, (_, i) => i + 1).map((pageNumber) => {
          const color =
            pageNumber === page
              ? "border-zinc-900 text-white bg-zinc-900"
              : "border-stone-400 text-stone-400 hover:border-zinc-900 hover:text-zinc-900";
          return (
            <li
              key={`grid-page-${pageNumber}`}
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center border duration-500 ${color}`}
              onClick={() => setPage(pageNumber)}
            >
              <span>{pageNumber}</span>
            </li>
          );
        })}
        <li
          onClick={handleNext}
          className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center border border-stone-400 text-stone-400 duration-500 hover:border-zinc-900 hover:text-zinc-900"
        >
          <span>❯</span>
        </li>
      </ul>
    </section>
  );
}

export default Grid;
