const Pfp = ({ src }) => {
  return (
    <div>
      {/* if user.pfp exists */}
      {src ? (
        <img src={src} className={`w-full rounded-full`} />
      ) : (
        <img src={"/default-pfp.jpg"} className={`w-full rounded-full`} />
      )}
    </div>
  );
};

export default Pfp;
