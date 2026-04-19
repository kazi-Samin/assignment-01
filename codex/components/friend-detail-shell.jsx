"use client";

import Image from "next/image";
import Link from "next/link";
import { Archive, CalendarRange, Clock3, Mail, MessageCircle, Pencil, Phone, Trash2, Video } from "lucide-react";
import { StatusPill } from "@/components/status-pill";
import { useAppState } from "@/components/app-state-provider";
import { formatDetailDate } from "@/lib/utils";

const actionButtons = [
  { icon: Clock3, label: "Snooze 2 Weeks" },
  { icon: Archive, label: "Archive" },
  { icon: Trash2, label: "Delete" },
];

const quickActions = [
  { type: "call", label: "Call", icon: Phone },
  { type: "text", label: "Text", icon: MessageCircle },
  { type: "video", label: "Video", icon: Video },
];

export function FriendDetailShell({ friend }) {
  const { addTimelineEntry } = useAppState();

  return (
    <div className="detail-layout">
      <aside className="detail-sidebar">
        <Link href="/" className="back-link">
          Back to Home
        </Link>

        <article className="detail-info-card">
          <div className="detail-avatar">
            <Image src={friend.picture} alt={friend.name} fill sizes="320px" />
          </div>

          <div className="detail-head">
            <StatusPill status={friend.status} />
            <h1>{friend.name}</h1>
            <p>{friend.bio}</p>
          </div>

          <div className="tag-row">
            {friend.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="detail-meta">
            <span>
              <Mail size={16} />
              {friend.email}
            </span>
            <span>
              <CalendarRange size={16} />
              Next due: {formatDetailDate(friend.next_due_date)}
            </span>
          </div>

          <div className="detail-actions">
            {actionButtons.map((button) => {
              const Icon = button.icon;
              return (
                <button key={button.label} type="button" className="ghost-button">
                  <Icon size={16} />
                  <span>{button.label}</span>
                </button>
              );
            })}
          </div>
        </article>
      </aside>

      <section className="detail-content">
        <div className="stats-mini-grid">
          <article className="mini-card">
            <span>Days Since Contact</span>
            <strong>{friend.days_since_contact}</strong>
          </article>
          <article className="mini-card">
            <span>Goal</span>
            <strong>{friend.goal} days</strong>
          </article>
          <article className="mini-card">
            <span>Next Due Date</span>
            <strong>{formatDetailDate(friend.next_due_date)}</strong>
          </article>
        </div>

        <article className="section-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Relationship goal</p>
              <h2>Current contact rhythm</h2>
            </div>
            <button type="button" className="icon-button">
              <Pencil size={16} />
              <span>Edit</span>
            </button>
          </div>
          <p className="goal-copy">
            Stay in touch with {friend.name.split(" ")[0]} every {friend.goal} days so the friendship feels active instead of reactive.
          </p>
        </article>

        <article className="section-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Quick check-in</p>
              <h2>Log an interaction instantly</h2>
            </div>
          </div>

          <div className="quick-action-grid">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.type}
                  type="button"
                  className="quick-action-button"
                  onClick={() => addTimelineEntry(friend, action.type)}
                >
                  <Icon size={18} />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
