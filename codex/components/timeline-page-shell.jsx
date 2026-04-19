"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Phone, Video } from "lucide-react";
import { useAppState } from "@/components/app-state-provider";
import { formatFriendlyDate } from "@/lib/utils";

const filterIcons = {
  all: Phone,
  call: Phone,
  text: MessageCircle,
  video: Video,
};

const typeIconMap = {
  call: Phone,
  text: MessageCircle,
  video: Video,
};

const filters = ["all", "call", "text", "video"];

export function TimelinePageShell() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { timelineEntries } = useAppState();

  const visibleEntries = useMemo(() => {
    const sortedEntries = [...timelineEntries].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (activeFilter === "all") {
      return sortedEntries;
    }

    return sortedEntries.filter((entry) => entry.type === activeFilter);
  }, [activeFilter, timelineEntries]);

  return (
    <div className="page-stack">
      <section className="page-header">
        <p className="eyebrow">Timeline</p>
        <h1>Every touch-point in one place</h1>
      </section>

      <div className="filter-row">
        {filters.map((filter) => {
          const Icon = filterIcons[filter];
          return (
            <button
              key={filter}
              type="button"
              className={`filter-chip ${activeFilter === filter ? "is-active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              <Icon size={16} />
              <span>{filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
            </button>
          );
        })}
      </div>

      <section className="timeline-list">
        {visibleEntries.map((entry) => {
          const Icon = typeIconMap[entry.type];
          return (
            <article key={entry.id} className="timeline-card">
              <div className={`timeline-icon timeline-${entry.type}`}>
                <Icon size={18} />
              </div>

              <div className="timeline-copy">
                <strong>{entry.title}</strong>
                <span>{formatFriendlyDate(entry.date)}</span>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
