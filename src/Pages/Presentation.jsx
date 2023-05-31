const Presentation = () => {
  return (
    <div className="lg:ml-[175px] my-40 md:my-20 flexV">
      <p className="mb-4 px-4 text-center text-xl">
        Bonjour et merci d'être ici avec moi,
      </p>
      <p className="px-4 max-sm:px-9 mb-8">
        je vais tâcher d'être bref...
        <br className="mb-2" />
        - Je suis travailleur, investit, curieux et volontaire.
        <br />
        - J'aime le travail en équipe, je suis à l'écoute de mes collaborateurs.
        <br />
        - J'ai le souci de la cohésion et de la cohérence.
        <br />
        - J'ai à coeur de satisfaire mon entourage.
        <br />- Je suis prêt à m'investir pleinement auprès de VOUS.
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full pb-8">
        <img className="w-44 p-4" src="/logo/photo.png" alt="photo sbirlobo" />
        <div className="flexV">
          <a rel="noreferrer" target="_blank" href="/CV_DevWeb.pdf">
            <img src="/logo/logo_pdf.png" alt="logo pdf document" />
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
