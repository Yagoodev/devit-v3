import Carousel from "react-elastic-carousel";

import { StatisticsItem } from "../StatisticsItem";

import LogoDefault from "../../assets/logo-devit-default.svg";

export function StatisticsContainer() {
  return (
    <div >
      <section >
        <div >
          <h1 >98.56%</h1>
          <img src={LogoDefault} alt="Devit" />
          <p >
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt aliquip
            deserunt reprehenderit elit laborum. Nulla Lorem mollit
            cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
            Voluptate exercitation incididunt aliquip
            deserunt reprehenderit elit laborum.
          </p>
        </div>

        <Carousel
          itemsToShow={1}
          showArrows={false}
        >
          <StatisticsItem />
          <StatisticsItem />
          <StatisticsItem />
        </Carousel>
      </section>
    </div>
  );
}