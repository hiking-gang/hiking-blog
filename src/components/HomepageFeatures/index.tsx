import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Hiking",
    Svg: require("@site/static/img/hiking.svg").default,
    description: (
      <>
        Read stories about hikes, mainly in Austria. There will be stories about
        small hikes happening on a day-trip or about hiking-tours lasting for a
        week.
      </>
    ),
  },
  {
    title: "Sailing",
    Svg: require("@site/static/img/sailing.svg").default,
    description: (
      <>
        Have you ever been on a boat weighing around 9 tons and could move it
        just by using wind?
      </>
    ),
  },
  {
    title: "Climbing",
    Svg: require("@site/static/img/climbing.svg").default,
    description: (
      <>
        Climbing in any context, indoor, outdoor, on the rocks, on ice,
        somewhere in the mountains or somewhere on the swabian alb.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
