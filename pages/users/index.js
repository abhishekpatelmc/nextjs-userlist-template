import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data }, // will be passed to the page component as props
  };
};

const Ninjas = ({ ninjas }) => {
  // props.ninjas is destructured to ninjas
  return (
    <div>
      <h1>All Users</h1>
      {ninjas.map(
        // map through the ninjas array and display each ninja
        (ninja) => (
          <Link href={"/users/" + ninja.id} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        )
      )}
    </div>
  );
};

export default Ninjas;
