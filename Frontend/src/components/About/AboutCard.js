// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Name </span>
//             from <span className="purple"> Bhubaneswar, India.</span>
//             <br />
//             I am currently employed as a software developer at Juspay.
//             <br />
//             I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
//             Mesra.
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Soumyajit</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;






import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World! I am <span className="purple">Tejwani Aashish Jitendrakumar(TAJ)</span> 
            from <span className="purple">[Your City, Country]</span>.
            <br />
            I am a passionate software developer with a boundless curiosity for innovation and technology.
            <br />
            I hold a deep interest in exploring <span className="purple">Artificial Intelligence</span> and how it can shape the future. 
            <br />
            <br />
            When I’m not writing code, you’ll often find me indulging in my other passions that fuel my creativity and inspiration!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching and Creating Digital Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with Enthusiasts in the Tech World
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and Embracing the Beauty of Nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Strategy Games and Puzzles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let your passion be the fuel and your determination the engine to achieve greatness!"{" "}
          </p>
          <footer className="blockquote-footer">TAJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

