import { useContext } from "react";

import Nome from "../Nome";

import { UserContext } from "../../contexts/user";

function Alunos() {
  const { alunos } = useContext(UserContext);
  const { qtdAlunos } = useContext(UserContext);

  return (
    <div>
      <h1>
        Component alunos: {alunos} e a quantidade da escola é: {qtdAlunos}{" "}
      </h1>
      <Nome />
    </div>
  );
}

export default Alunos;
