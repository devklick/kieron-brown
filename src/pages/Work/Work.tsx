import { useState } from "react";

import jobs from "./jobs";
import JobCard from "../../components/JobCard";
import DropDownList from "../../components/DropDownList";

import "./Work.scss";

const SortDirectionKeys = {
  asc: 1,
  desc: 2,
} as const;

type SortDirectionKey = keyof typeof SortDirectionKeys;

type SortDirection = "Most recent last" | "Most recent first";

const SortDirections = {
  asc: "Most recent last",
  desc: "Most recent first",
} satisfies Record<SortDirectionKey, SortDirection>;

function isSortDirectionKey(value: unknown): value is SortDirectionKey {
  return Object.keys(SortDirectionKeys).includes(value as string);
}

function getSortedJobs(sort: SortDirectionKey) {
  return jobs.sort((a, b) =>
    sort === "asc"
      ? a.from.getTime() - b.from.getTime()
      : b.from.getTime() - a.from.getTime()
  );
}

interface WorkProps {}

// eslint-disable-next-line no-empty-pattern
function Work({}: WorkProps) {
  const [sort, setSort] = useState<SortDirectionKey>("desc");

  function onSortChanged(newSort: string) {
    if (isSortDirectionKey(newSort)) {
      setSort(newSort);
    }
  }

  return (
    <div className="page-work">
      <DropDownList<SortDirectionKey>
        className="page-work__order-by-list"
        onChanged={onSortChanged}
        options={[
          { id: "desc", text: SortDirections["desc"], selected: true },
          { id: "asc", text: SortDirections["asc"] },
        ]}
      />
      <div className="page-work__job-cards">
        {getSortedJobs(sort).map(
          ({ company, description, from, title, to, tech }, i) => (
            <JobCard
              key={i}
              company={company}
              description={description}
              from={from}
              title={title}
              to={to}
              tech={tech}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Work;
