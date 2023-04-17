function ClassList({ classes }) {
  return (
    <div>
      <h1>List of classes</h1>
      {classes.map(classlist => {
        return (
            <div> <h1>{classlist.id} {classlist.title}</h1> </div>
        )
      })}
    </div>
  );
}

export default ClassList;

export async function getServerSideProps() {
  const response = await fetch(" http://localhost:3004/classes");
  const data = await response.json();

  return {
    props: {
      classes: data,
    },
  };
}
