"use client";
import Image from "next/image";
import Link from "next/link"
import Reveal from "../../utils/reveal";

export default function ErrorPage() {
  return (
    <Reveal duration={1.5} delay={0.2} y={100}>
      <section className="not-found-page">
        <div className="not-found-page-container">
          <Image
            src="/assets/svg/404-error.svg"
            alt="Error page"
            width={180}
            height={180}
          />

          <h1 className="not-found-title">Page not found</h1>
          <h2 className="not-found-description">
            Return to
              <Link href="/">
                <span className="not-found-link-home">Home</span>
              </Link>
          </h2>
        </div>
      </section>
    </Reveal>
  );
}
