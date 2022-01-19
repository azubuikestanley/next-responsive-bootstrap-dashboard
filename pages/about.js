import Link from "next/link"; 

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {coders: data}
  }
};

const About = ({ coders }) => {
  return (
    <>
      <div>
        hi there
      </div>
      {coders.map(coder => (
          <Link href={'/coders/' + coder.id} key={coder.id}>
            <a>
              <h3>{ coder.name }</h3>
            </a>
          </Link>
        ))}
    </>
  );
}

export default About;