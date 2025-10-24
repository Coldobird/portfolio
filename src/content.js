import './content.css';

export default function Content({ selected }) {
  switch (selected) {
    case "home":
      return (
        <content-container>
          <content-container2>
            <p>Hey there! I'm Thomas.</p>
            <p>I'm a front-end developer focused on building web applications. <br /> At work, I specialize in using pure JavaScript, while React fuels my personal projects.</p>
            <p>When I’m not coding, I enjoy camping, balancing my tech life with nature.</p>
            <p>Feel free to contact me at <a>LinkedIn</a>, <a>Email</a> or <a>Smoke Signal</a>.</p>
            <p>Check out my <a>Resumé</a>.</p>
          </content-container2>
        </content-container>
      );
    case "exp:jux":
      return (
        <content-container>
          <content-container2>

            <h2>Front-End Developer & Designer @ Jux House<br />
              Jan 2020 - Present<br />
              JavaScript, HTML, CSS, Node.js<br />
              ---------------------------------------------------------------------------
            </h2>

            <text-container>
              <p>
                I’ve been part of a small team at Jux House since 2020, building tools that make code easier to see and understand.<br />
                Most of my time goes into BELA, our web app for visualizing code architecture. I design and develop its interface, keeping things simple and clear so users can focus on the logic, not the layout.<br />
              </p>
              <img-container>
                <img src="/placeholder.png" alt="Screenshot of BELA in action — google maps for your code" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>Screenshot of BELA in action</img-caption>
              </img-container>
            </text-container>

            <new-section />

            <text-container>
              <p>
                Sometimes, I jump into other projects like landing pages and internal tools, experimenting with ideas and improving small details that make the experience smoother.
              </p>
              <img-container>
                <img src="/placeholder.png" alt="Screenshot of BELA in action — google maps for your code" style={{ width: '100%', borderRadius: '8px' }} />
                <img-caption>Screenshot of BELA in action</img-caption>
              </img-container>
            </text-container>
          </content-container2>
        </content-container>
      );
    case "proj:bela-app":
      return (
        <content-container>
          <content-container2>
            <h2>BELA — Web app for code visualization</h2>
            <p>Short description, stack, links, screenshots, etc.</p>
          </content-container2>
        </content-container>
      );
    case "proj:bela-landing":
      return (
        <content-container>
          <content-container2>
            <h2>BELA — Landing page</h2>
            <p>Notes about the marketing site, animations, lighthouse scores…</p>
          </content-container2>
        </content-container>
      );
    case "proj:scout-check":
      return (
        <content-container>
          <content-container2>
            <h2>Scout Membership Check (Personal)</h2>
            <p>What it does, why you built it, tech used…</p>
          </content-container2>
        </content-container>
      );
    case "skills":
      return (
        <content-container>
          <content-container2>
            <h2>Skills & Tools</h2>
            <p>HTML, CSS, JS, React, Git, Figma, Illustrator, Photoshop…</p>
          </content-container2>
        </content-container>
      );
    default:
      return <content-container />;
  }
}
