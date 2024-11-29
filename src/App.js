import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png"
import CortonaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard
        title="Alexa"
        handle="@alexa99"
        imageSrc={AlexaImage}
        alt="alexa"
      />
      <ProfileCard
        title="Cortana"
        handle="@cotana32"
        imageSrc={CortonaImage}
        alt="cortana"
      />
      <ProfileCard
        title="Siri"
        handle="@siri01"
        imageSrc={SiriImage}
        alt="siri"
      />
    </div>
  );
}

export default App;
