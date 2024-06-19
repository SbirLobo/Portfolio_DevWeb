import Intro from "../components/presentation/Intro";

const Presentation = () => {
  return (
    <div className="lg:ml-[175px] my-40 md:my-20 flexV">
      <p className="mb-4 px-4 text-center text-xl">
        Bonjour et merci d&#39;être ici avec moi,
      </p>
      <Intro />
      <div className="flex flex-col sm:flex-row justify-between items-center w-full pb-8">
        <img
          className="w-44 p-4 rounded-full border-2"
          src="https://github.com/SbirLobo/Portfolio_DevWeb/assets/108263661/a60db72b-ac36-40c9-a353-8e339ff88041"
          alt="photo sbirlobo"
        />
        <div className="flexV">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/user-attachments/files/15904952/CV_s.birolleau_devWeb_alt2.pdf"
          >
            <img
              src="https://github.com/SbirLobo/Portfolio_DevWeb/assets/108263661/e639dda9-e073-4038-aa8f-ed2cf92ce478"
              alt="logo pdf document"
            />
          </a>
          <p className="px-2 italic text-sm">mon CV</p>
        </div>
      </div>
      <p className="mb-2">Ah, j&#39;oubliais... J&#39;adore l&#39;algo !</p>
      <img
        src="https://www.codewars.com/users/sbir51/badges/large"
        alt="badge code wars"
      />
      <p className="pb-8 px-2 italic text-sm">inscrit en mars 2023.</p>
    </div>
  );
};

export default Presentation;
