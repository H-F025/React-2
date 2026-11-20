import "./index.css";
import EmployeesCard from "./Employees/EmployeesCard.tsx";

type Employees = {
  id: number;
  name: string;
  post: string;
  emailAddress: string;
  img: string;
};

function App() {
  const profileCard: Employees[] = [
    { id: 1, name: "モンキー・D・ルフィ", post: "キャプテン", emailAddress: "luffy@mugiwara.com", img: "/images/onepiece01_luffy.png" },
    { id: 2, name: "ロロノア・ゾロ", post: "副キャプテン", emailAddress: "zoro@mugiwara.com", img: "/images/onepiece02_zoro_bandana.png" },
    { id: 3, name: "ナミ", post: "航海士", emailAddress: "nami@mugiwara.com", img: "/images/onepiece03_nami.png" },
    { id: 4, name: "ウソップ", post: "船大工", emailAddress: "sogeking@mugiwara.com", img: "/images/onepiece04_usopp_sogeking.png" },
    { id: 5, name: "トニートニー・チョッパー", post: "医師", emailAddress: "chopper@mugiwara.com", img: "/images/onepiece06_chopper2.png" },
    { id: 6, name: "サンジ", post: "料理人", emailAddress: "sanji@mugiwara.com", img: "/images/onepiece05_sanji.png" },
    { id: 7, name: "ニコ・ロビン", post: "考古学者", emailAddress: "robin@mugiwara.com", img: "/images/onepiece07_robin.png" },
  ];

  return (
    <div className="app-container">
      <h1 className="title">Employees</h1>
      <div className="grid-container">
        {profileCard.map((member) => (
          <EmployeesCard
            key={member.id}
            name={member.name}
            post={member.post}
            emailAddress={member.emailAddress}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
