import sportspace from "public/images/sportspace.png";
import matchmaker from "public/images/matchmaker.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://github.com/Prem2310/Sports_Space",
    title: "Sports_Space",
    description:
      "A platform for managing sports infrastructure that streamlines booking, scheduling, and maintenance of facilities. Integrated with RazorPay for secure online payments, it enhances reliability and user convenience.",
    thumbnail: sportspace,
    images: [sportspace],
    stack: ["React.Js", "Express", "MongoDB", "RazorPay", "Node.Js"],
    slug: "Sports_Space",
    content: (
      <div>
        <p>
          The Sports Space platform is a robust solution for sports facility
          management, designed to optimize the booking, scheduling, and
          maintenance processes. It offers an intuitive and user-friendly
          interface, allowing both users and administrators to easily interact
          with the system. Facility managers can effortlessly update the
          availability of sports spaces, making it easier for users to reserve
          spots without any confusion or double-bookings. Additionally, the
          platform includes automated scheduling features, ensuring smooth
          management of multiple events and bookings in real-time.
        </p>
        <p>
          Incorporating advanced maintenance tracking, the platform helps
          administrators stay on top of facility upkeep, ensuring that spaces
          are always ready for use. It provides detailed records of maintenance
          schedules, repairs, and equipment status, reducing downtime and
          improving overall user experience. With such features, the platform
          simplifies the daily management of sports facilities while enhancing
          efficiency and reducing administrative overhead.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/Prem2310/teamMatch-htf-4.0",
    title: "MATCHMAKER",
    description:
      "A platform designed for team matchmaking, leveraging real-time communication to connect users with similar interests in sports, gaming, and other activities. Built with Socket.IO for live interaction, this platform ensures seamless matchmaking experiences.",
    thumbnail: matchmaker, // Replace with actual thumbnail for MATCHMAKER
    images: [matchmaker], // Replace with relevant images for MATCHMAKER
    stack: ["React.Js", "Express", "MongoDB", "Socket.IO", "Node.Js"],
    slug: "MATCHMAKER",
    content: (
      <div>
        <p>
          MATCHMAKER is a dynamic platform designed to match users with similar
          interests and skills, enabling them to form teams for various
          activities such as sports and gaming. The platform provides an
          easy-to-use interface that allows users to create profiles, search for
          team members, and join teams based on their preferences. With its
          integration of Socket.IO, the platform supports real-time
          communication, ensuring a smooth and engaging matchmaking experience.
        </p>
        <p>
          The backend of MATCHMAKER is powered by Node.js and Express, providing
          a robust and scalable infrastructure for managing user profiles, team
          information, and real-time chat. MongoDB is used to store user data
          and team-related information securely. The platform offers a seamless
          user experience, allowing users to quickly find and join teams for
          their desired activities while maintaining a high level of interaction
          and engagement.
        </p>
      </div>
    ),
  },
  // {
  //   href: "https://github.com/Prem2310/Virtual_HR",
  //   title: "VIRTUAL HR",
  //   description:
  //     "A web-based platform designed to simulate HR interviews, offering interactive sessions with text-to-speech responses and real-time speech-to-text conversion. Users can download their responses in CSV format for further review and improvement.",
  //   thumbnail: matchmaker, // Replace with actual thumbnail for VIRTUAL HR
  //   // images: [matchmaker], // Replace with relevant images for VIRTUAL HR
  //   stack: ["React.Js", "Express", "MongoDB", "TailwindCSS", "Node.Js"],
  //   slug: "VIRTUAL HR",
  //   content: (
  //     <div>
  //       <p>
  //         VIRTUAL HR is an innovative platform designed to simulate HR
  //         interviews in a controlled, interactive environment. This tool helps
  //         users practice their interview responses by providing a virtual
  //         interviewer with real-time speech-to-text capabilities. The platform
  //         offers a range of questions designed to mimic common HR interview
  //         scenarios, allowing users to respond either by typing or speaking. The
  //         integration with Microsoft Cognitive Services enables text-to-speech
  //         functionality, converting user responses into audio, providing a more
  //         engaging and realistic interview experience.
  //       </p>
  //       <p>
  //         Built with React.js, Express, and Node.js, the platform offers a
  //         seamless frontend and backend interaction. MongoDB is used to store
  //         user responses, while TailwindCSS ensures a modern and responsive UI.
  //         The platform also includes a CSV download feature, allowing users to
  //         save their interview responses for further analysis and improvement.
  //         By providing a realistic and flexible interview simulation, VIRTUAL HR
  //         aims to help users enhance their interview skills in preparation for
  //         real-world HR interviews.
  //       </p>
  //     </div>
  //   ),
  // },
];
