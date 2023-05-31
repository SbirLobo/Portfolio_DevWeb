import Skills from "../components/skills";

const Home = () => {
  return (
    <div className="lg:ml-[175px] my-40 md:my-20 flex flex-col w-3/4 sm:w-2/4">
      <h2 className="font-bold text-3xl border-b-2 border-b-tertiary mb-8">
        Recherche d'alternance
      </h2>
      <div className="flex flex-row justify-between">
        <a
          className=""
          href="https://www.wildcodeschool.com/fr-FR"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="mb-8"
            src="/logo/logo_wcs.png"
            alt="logo wild code school"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/s%C3%A9bastien-birolleau/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/logo/logo_linkedin.png" alt="logo linkedin" />
        </a>
      </div>
      <h1 className="font-playfair text-2xl font-bold mb-8">
        Sébastien Birolleau
      </h1>
      <p className="mb-8">
        Actuellement en{" "}
        <a
          href="https://f.hubspotusercontent10.net/hubfs/2902314/Growth/SYLLABUS/REMOTE/FR%20-%20DEV%20REMOTE.pdf?utm_campaign=Web+Developer+FT+Syllabus&utm_medium=email&_hsmi=213216587&_hsenc=p2ANqtz-_ewy0bGYvF_3Shrd0_lVofRiiItGxeOuzNhmpysv0ugnWrqfV5rMRS_8CQKhSD8atxxAPLq5zeOobFXlikSgy7zttA6g-6RkaDfboaCv3g7GBn5Zw&utm_content=213216587&utm_source=hs_automation"
          rel="noreferrer"
          target="_blank"
          className="text-tertiary underline"
        >
          formation Développeur Web
        </a>{" "}
        jusqu'en juillet 2023 (diplôme en novembre), je suis à la recherche
        d'une alternance pour septembre 2023.
      </p>
      <p className="text-left">L'alternance pourra porter au choix sur :</p>
      <ul className="list-disc ml-4">
        <li>
          <a
            href="https://2902314.fs1.hubspotusercontent-na1.net/hubfs/2902314/PROGRAMME%20de%20formation%20D%C3%A9veloppeur%20web%20Javascript%20-%20septembre%202023%20(2).pdf?utm_medium=email&_hsmi=256828468&_hsenc=p2ANqtz-_My4Mr8EdH78wX3sWe645xUqkqXQW41L2md55uzMhihI2AxeG1V4zUgnBJg8UYylCEV8hG5UVh3dJhrB7LV6GRzVDcA5ccJ9EOPuU6DxhafMtTzL8&utm_content=256828468&utm_source=hs_email"
            rel="noreferrer"
            target="_blank"
            className="text-tertiary underline"
          >
            JS/REACT
          </a>
        </li>
        <li>
          <a
            href="https://2902314.fs1.hubspotusercontent-na1.net/hubfs/2902314/PROGRAMME%20de%20formation%20D%C3%A9veloppeur%20web%20Java_%20Angular%20-%20septembre%202023%20(1).pdf?utm_medium=email&_hsmi=256828468&_hsenc=p2ANqtz-8hCtpb8owDz5gkzWHZieKz1DUyt0LDLkffES1xasF5PNnOeuBS2AaEFCbZHZjCqxKfyuBlbpyZoqoxFs_KCAcp9qlGAz4ERgbjfhMkd44t9-vyuxU&utm_content=256828468&utm_source=hs_email"
            rel="noreferrer"
            target="_blank"
            className="text-tertiary underline"
          >
            JAVA/ANGULAR
          </a>
        </li>
      </ul>
      <p className="mb-8 font-bold">... et c'est VOUS qui choisissez !</p>
      <p>Le language que vous utilisez n'est pas dans mes comptétences? </p>
      <p className="mb-8">
        Je peux apprendre avant le début de l'alternance, c'est justement ce que
        l'on nous enseigne à la Wild Code School !
      </p>
      <ul className="flex flex-row justify-center flex-wrap">
        {Skills.map((skill) => (
          <li key={skill.id} className="flexV p-2">
            <img src={skill.img} alt={`logo ${skill.title}`} />
            <p>{skill.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;