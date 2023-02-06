import featImg from "../assets/img-main.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red Tech conference attendees on a laptop"
      />

      <h1>{title}</h1>
      <p>
                Red Tech is the leading source of secure, fully customizable
                technology and business solutions.We cater to those who need scalable
                results that are sustainable
                for their company and the planet.With the
                ever - evolving technology landscape, we want to be your go - to source
                for
                business technology.
      </p>
    </div>
  );
}
