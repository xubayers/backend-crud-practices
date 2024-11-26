import { useLoaderData } from "react-router-dom";

function Phone() {
  const phone = useLoaderData();
  const updateHandler = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.updatedName.value;
    const price = form.newPrice.value;

    const phone = { name, price };
    const body = JSON.stringify(phone);
  };

  return (
    <div>
      <p> {phone.name} </p>
      <p>{phone.id}</p>
      <p>{phone.price}</p>
      <br />
      <br />
      <br />
      <br />
      <div>
        <form className="simple-form" onSubmit={updateHandler}>
          <h2>Ubdate Data</h2>
          <div className="form-group">
            <label htmlFor="updatedName">New Phone Name:</label>
            <input
              type="text"
              id="updatedName"
              name="updatedName"
              placeholder="Enter new phone name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPrice">newPrice:</label>
            <input
              type="number"
              id="newPrice"
              name="newPrice"
              placeholder="Enter newPrice"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Phone;
