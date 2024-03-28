const Contact = ({ contact: { id, name, number } }) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button>Delite</button>
    </>
  );
};

export default Contact;
