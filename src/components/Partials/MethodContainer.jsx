import { MethodItem } from "../MethodItem";

import MethodIMG from "../../assets/method.png";

export function MethodContainer() {
  return (
    <section className="method-container">
      <h1 className="method-title">Nossa metodologia</h1>

      <img src={MethodIMG} alt="Nossa metodologia" />

      <ul>
        <MethodItem bulletColor="#00D6ED" title="Aprender" />
        <MethodItem bulletColor="#00AAFF" title="Treinar" />
        <MethodItem bulletColor="#0C70F1" title="Executar" />
        <MethodItem bulletColor="#303030" title="Mentoria" />
      </ul>
    </section>
  );
}