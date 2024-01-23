import Image from "next/image";
import Link from "next/link";
import React from "react";
import Reveal from "../../utils/reveal";

const LinkCardItem = ({ href, imgSrc, title }) => {
  return (
    <Reveal duration={1.5} delay={0.2} >
      <li className="artist-card-item">

        <Link href={ href }>
          <article className="artist-card">
            <Image
              src={ imgSrc }
              className="artist-image"
              alt="Artist"
              width={200}
              height={200}
            />

            <span className="artist-title">{ title }</span>
          </article>
        </Link>
      </li>
    </Reveal>
  );
}

export default LinkCardItem;
