import { Link, useLoaderData } from "react-router-dom";

function Phones() {
  const phones = useLoaderData();

  const deleteHandler = (id) => {
    (async function () {
      try {
        const response = await fetch(`http://localhost:4000/phones/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.log(err?.message || "error occur in client side");
      }
    })();
  };
  return (
    <div>
      <h2>All data overhere</h2>
      {phones?.map((phone) => {
        return (
          <li key={phone._id}>
            Prod-Name: {phone.name} <br />
            Prod-Price: {phone.price}$ <br />
            <Link to={`phones/${phone._id}`}>Veiw details</Link> &nbsp;{" "}
            <button onClick={() => deleteHandler(phone._id)}>Delete</button>
            <br />
            <br />
          </li>
        );
      })}
    </div>
  );
}

export default Phones;
