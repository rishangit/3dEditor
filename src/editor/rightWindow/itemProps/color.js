const PropColor = ({color, onChange}) => {

  const onElenetChange = (value)=>{
    onChange({color:value})
  }
  
  return (
    <div>
      <div>Color</div>
      <input type="text" value={color} onChange={(e)=>onElenetChange(e.target.value)} />
    </div>
  );
};

export default PropColor;
