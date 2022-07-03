import PerfilImg from "../../assets/statistics-img.png";

export function StatisticsItem() {
  return (
    <div className="sc-container">
      <i>
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
        ullamco cillum dolor. Voluptate exercitation incididunt aliquip
        deserunt reprehenderit elit laborum. Nulla Lorem mollit
        cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
        Voluptate exercitation incididunt aliquip
        deserunt reprehenderit elit laborum.  Nulla Lorem mollit
        cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
        Voluptate exercitation incididunt aliquip
      </i>

      <img src={PerfilImg} alt="Perfil imagem" />
      <h2>Ariane Rodrigues</h2>
      <span>Analista de dados Jr.</span>
    </div>
  );
}