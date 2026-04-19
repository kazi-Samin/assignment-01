import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-shell">
      <p className="eyebrow">404 page</p>
      <h1>This friendship route does not exist.</h1>
      <p>Try heading back to the dashboard and opening a valid friend card, timeline, or stats page.</p>
      <Link href="/" className="primary-button">
        Return home
      </Link>
    </section>
  );
}
