import Skills from "../components/skills";
import Part0 from "../components/home/Part0";
import Part1 from "../components/home/Part1";
import Part2 from "../components/home/Part2";
import Part3 from "../components/home/Part3";

const Home = () => {
  return (
    <div className="lg:ml-[175px] my-40 md:my-20 flex flex-col w-3/4 sm:w-2/4">
      <Part0 />
      <Part1 />
      <Part2 />
      <Part3 />
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
