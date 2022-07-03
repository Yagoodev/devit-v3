import { OutlineButton } from "../OutlineButton";
import { DefaultButton } from "../DefaultButton";

import Macbook from "../../assets/macbook.svg";

export function PlatformContainer() {
  return (
    <section>
      <div>
        <h1>Plataforma de aprendizado</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat
          sunt nostrud amet.
        </p>

        <OutlineButton>Alunos</OutlineButton>
        <DefaultButton>Empresas</DefaultButton>
      </div>

      <img src={Macbook} alt="macbook" />
    </section>
  );
}