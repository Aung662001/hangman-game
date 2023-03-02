const HEAD = (
  <div
    key={1}
    style={{
      width: "50px",
      height: "50px",
      border: "10px solid black",
      borderRadius: "50%",
      position: "absolute",
      right: "90px",
      top: "99px",
    }}
  />
);
const BODY = (
  <div
    key={2}
    style={{
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      position: "absolute",
      right: "120px",
      top: "168px",
    }}
  />
);
const RIGHT_ARM = (
  <div
    key={3}
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      right: "115px",
      top: "168px",
      rotate: "35deg",
    }}
  />
);
const LEFT_ARM = (
  <div
    key={4}
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      right: "35px",
      top: "168px",
      rotate: "-35deg",
    }}
  />
);
const RIGHT_FOOT = (
  <div
    key={5}
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      right: "115px",
      top: "288px",
      rotate: "-35deg",
    }}
  />
);
const LEFT_FOOT = (
  <div
    key={6}
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      right: "35px",
      top: "288px",
      rotate: "35deg",
    }}
  />
);
const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_FOOT, RIGHT_FOOT];
type HangmanDrawingProps = {
  numberOfguess: number;
};
//wrong time will be numberOfguess
export default function Hangmandrawing({ numberOfguess }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfguess)}
      <div
        className="horizontalUperLine"
        style={{
          width: "180px",
          height: "10px",
          backgroundColor: "black",
          margin: "0 120px",
        }}
      />

      <div
        className="verticalHook"
        style={{
          width: "10px",
          height: "90px",
          backgroundColor: "black",
          position: "absolute",
          margin: "0 290px",
        }}
      />

      <div
        className="upsideDownLine"
        style={{
          width: "10px",
          height: "400px",
          backgroundColor: "black",
          margin: "0 120px",
        }}
      />

      <div
        className="bottomLine"
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}
