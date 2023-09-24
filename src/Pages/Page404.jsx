import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="lg:ml-[175px] my-40 md:my-20 flex flex-col items-center w-3/4 sm:w-2/4">
      <p className="text-xl py-8">Navré, cette page n&rsquo;existe pas</p>
      <button onClick={goBack} type="button" className="contactButton w-fit">
        Retour
      </button>
    </div>
  );
}
