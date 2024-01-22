import { AiFillLinkedin } from 'react-icons/ai';
import { TbSquareLetterD } from "react-icons/tb";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <main>
        <section className='rrss'>
          <a
            href="https://github.com/KevinVanDerSchans/deezer-player-react"
            target="_blank"
            aria-label="GitHub Link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/company/deezer"
            target="_blank"
            aria-label="LinkedIn Link"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.deezer.com/en"
            target="_blank"
            aria-label="Deezer website Link"
          >
            <TbSquareLetterD />
          </a>
        </section>

        <section className="company">
          <address>Deezer © 2024</address>
        </section>
      </main>
    </footer>
  )
}


export default Footer;
