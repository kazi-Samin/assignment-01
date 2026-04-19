"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useAppState } from "@/components/app-state-provider";

export function StatsPageShell() {
  const { analytics, timelineEntries } = useAppState();

  return (
    <div className="page-stack">
      <section className="page-header">
        <p className="eyebrow">Friendship analytics</p>
        <h1>See how you actually show up</h1>
      </section>

      <div className="stats-layout">
        <article className="chart-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Interaction split</p>
              <h2>Call / Text / Video</h2>
            </div>
          </div>

          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie data={analytics} dataKey="value" nameKey="name" innerRadius={74} outerRadius={112} paddingAngle={4}>
                  {analytics.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="chart-card legend-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Overview</p>
              <h2>Totals from your timeline</h2>
            </div>
          </div>

          <div className="legend-stack">
            {analytics.map((entry) => (
              <div key={entry.name} className="legend-row">
                <div className="legend-label">
                  <span className="legend-dot" style={{ backgroundColor: entry.color }} />
                  <span>{entry.name}</span>
                </div>
                <strong>{entry.value}</strong>
              </div>
            ))}
            <div className="legend-total">
              <span>Total interactions</span>
              <strong>{timelineEntries.length}</strong>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
