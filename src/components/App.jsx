
import Feedback from "./Feedback";
import Statistics from "./Statistics";

export const App = () => {
  return (
    <>
      <div>
        <>
          <Feedback />


          <Statistics />

        </>


      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template
      </div>
    </>
  );
};
