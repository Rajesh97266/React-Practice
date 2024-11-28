function ProfileCard(props){
  return (
    <div>
      <div>This is {props.title}</div>
      <div>This is {props.handle}</div>
    </div>
  );
}

export default ProfileCard