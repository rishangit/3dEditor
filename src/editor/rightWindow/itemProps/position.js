const PropPosition = ({ position, onChange }) => {
  const onElenetChange = (inx, value) => {
    //position:[0,0,0],
    debugger
    position[inx] = parseInt(value);
    onChange({ position});
  };

  return (
    <div>
      <div>x</div>
      <input
        type="text"
        value={position[0]}
        name="0"
        onChange={e => onElenetChange(0, e.target.value)}
      />
      <div>y</div>
      <input
        type="text"
        value={position[1]}
        name="1"
        onChange={e => onElenetChange(1, e.target.value)}
      />
      <div>z</div>
      <input
        type="text"
        value={position[2]}
        name="2"
        onChange={e => onElenetChange(2, e.target.value)}
      />
    </div>
  );
};

export default PropPosition;
