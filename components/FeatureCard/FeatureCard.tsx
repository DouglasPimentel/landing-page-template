import Image from "next/image";
import styles from "./styles.module.scss";

type FeatureCardProps = {
  image: { urlImage: string; alt: string };
  title: string;
  text: string;
};

export default function FeatureCard({ image, title, text }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <Image src={image.urlImage} alt={image.alt} width={64} height={64} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
