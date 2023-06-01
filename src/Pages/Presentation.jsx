const Presentation = () => {
  return (
    <div className="lg:ml-[175px] my-40 md:my-20 flexV">
      <p className="mb-4 px-4 text-center text-xl">
        Bonjour et merci d'être ici avec moi,
      </p>
      <p className="px-4 max-sm:px-9 mb-8">
        je vais tâcher d'être bref...
        <br className="mb-2" />
        - Je suis travailleur, investi, curieux et volontaire.
        <br />
        - J'aime le travail en équipe et je suis à l'écoute de mes
        collaborateurs.
        <br />
        - J'ai le souci de la cohésion et de la cohérence.
        <br />
        - J'ai à coeur de satisfaire mon entourage.
        <br />- Je suis prêt à m'investir pleinement auprès de VOUS.
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full pb-8">
        <img
          className="w-44 p-4"
          src="https://github.com/SbirLobo/Portfolio_DevWeb/assets/108263661/858c3a75-130c-4d7e-9ec8-6449936e3d12"
          alt="photo sbirlobo"
        />
        <div className="flexV">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/SbirLobo/Portfolio_DevWeb/files/11611856/CV_DevWeb.pdf"
          >
            <img
              src="https://github.com/SbirLobo/Portfolio_DevWeb/assets/108263661/e639dda9-e073-4038-aa8f-ed2cf92ce478"
              alt="logo pdf document"
            />
          </a>
          <p className="px-2 italic text-sm">mon CV</p>
        </div>
      </div>
      <p className="mb-2">Ah, j'oubliais... J'adore l'algo !</p>
      <img
        src="https://www.codewars.com/users/sbir51/badges/large"
        alt="badge code wars"
      />
      <p className="pb-8 px-2 italic text-sm">inscrit en mars 2023.</p>
    </div>
  );
};

export default Presentation;
