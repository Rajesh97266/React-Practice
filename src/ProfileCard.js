function ProfileCard({ title, handle , imageSrc , alt}) {
  // const title = props.title;
  // const handle = props.handle;
  // const {title , handle} = props;
  // console.log(title,handle);
  return (
    <div>
      <img src={imageSrc} alt={alt}/>
      <div>This is {title}</div>
      <div>This is {handle}</div>
      
    </div>
  );
}

export default ProfileCard;
