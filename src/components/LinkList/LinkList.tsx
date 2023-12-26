const LinkList = (): React.ReactElement => {
  return (
    <div className="list">
      <ul>
        <li>
          <a
            className="list__cv"
            href="/Resume Camino Losada.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take a look at my cv
            <img alt="cv icon" src="/cv.svg" />
          </a>
        </li>

        <li>
          <a
            className="list__mail"
            href="mailto:camino.losada.alonso@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me an email
            <img alt="email icon" src="/mail.svg" />
          </a>
        </li>
        <li>
          <a
            className="list__linkedin"
            href="https://www.linkedin.com/in/caminolosadadeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about me
            <img alt="linkedin icon" src="/linkedin.svg" />
          </a>
        </li>
        <li>
          <a
            className="list__github"
            href="https://github.com/caminolosada"
            target="_blank"
            rel="noopener noreferrer"
          >
            How do I code?
            <img alt="github icon" src="/github.svg" />
          </a>
        </li>
        <li>
          <a
            className="list__goodreads"
            href="https://www.goodreads.com/caminolosada"
            target="_blank"
            rel="noopener noreferrer"
          >
            When I&apos;m not coding
            <img alt="goodreads icon" src="/goodreads.svg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
