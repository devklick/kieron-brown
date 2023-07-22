import CircularImage from "../../components/CircularImage";
import ProfileLabel from "../../components/ProfileLabel";

import "./About.scss";

interface AboutProps {}

// eslint-disable-next-line no-empty-pattern
function About({}: AboutProps) {
  return (
    <div className="page-about">
      <CircularImage />
      <div className="page-about__bio-card">
        <div className="page-about__bio-card__name">
          <span className="page-about__bio-card__name-text">Kieron Brown</span>
        </div>
        <div className="page-about__bio-card__profiles">
          <ProfileLabel profile="linkedIn" />
          <ProfileLabel profile="github" />
          <ProfileLabel profile="stackOverflow" />
        </div>
        <div className="page-about__bio-card__description">
          <div className="page-about__bio-card__description-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ut metus eu lectus bibendum placerat. Mauris eget faucibus justo.
              Sed laoreet enim dolor, non semper leo lacinia sit amet.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed nibh odio, blandit vel dictum id,
              tempus sed ex. Etiam id pulvinar massa. Cras gravida nec quam nec
              rhoncus. Ut gravida felis nec mauris dapibus, ac congue dui
              luctus. Aliquam ligula est, interdum sed molestie sit amet,
              dignissim quis dolor. Vivamus venenatis eros vitae ligula
              imperdiet tristique. Sed vitae aliquet justo, scelerisque tempus
              lorem. Proin nec fringilla odio. Proin lacinia tempor efficitur.
              Curabitur consectetur nisi sit amet semper volutpat.
            </p>
            <p>
              Nullam fermentum dapibus dignissim. Mauris mattis nulla
              ullamcorper felis luctus tristique. Mauris vitae sapien
              pellentesque, tincidunt risus in, auctor odio. Maecenas id nunc
              nisl. Aliquam et malesuada eros, ut vehicula nisl. Suspendisse
              potenti. Aliquam gravida leo purus, nec efficitur tellus congue
              eu. Integer fringilla, sapien eget varius tristique, ante lectus
              molestie massa, at pellentesque ante odio at nulla. Duis ut
              vulputate velit. Integer faucibus quis arcu sit amet faucibus.
              Aenean a leo ornare, porttitor odio elementum, commodo sapien.
            </p>
            <p>
              Etiam aliquet eget enim a tincidunt. Integer imperdiet dictum ante
              non tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Praesent suscipit vestibulum felis, quis laoreet nibh
              sodales vel. Etiam fermentum purus in justo dapibus, eget mollis
              augue venenatis. Praesent sodales elit nisi, non porttitor eros
              pretium ut. Donec scelerisque, ipsum in cursus placerat, nulla
              velit mollis lorem, sit amet gravida sem arcu at est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
