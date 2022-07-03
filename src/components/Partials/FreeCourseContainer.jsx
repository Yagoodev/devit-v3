import Carousel from "react-elastic-carousel";

import { OutlineButton } from "../OutlineButton";
import { FreeCourseItem } from "../FreeCourseItem";

export function FreeCourseContainer() {
  return (
    <div>
      <section>
        <div>
          <h1>
            <span>Cursos</span>
            <span>Gratuitos</span>
          </h1>

          <p>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>

          <OutlineButton>Crie sua conta</OutlineButton>
        </div>

        <Carousel
          itemsToShow={1}
          showArrows={false}
        >
          <FreeCourseItem />
          <FreeCourseItem />
          <FreeCourseItem />
        </Carousel>
      </section>
    </div>
  );
}