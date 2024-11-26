function AddNew() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.phoneName?.value?.trim();
    const price = form.price?.value?.trim();

    if (!name || !price) {
      console.error("Invalid input: Name and price are required");
      return;
    }

    const phone = { name, price };

    (async function () {
      try {
        const response = await fetch("http://localhost:4000/phones", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(phone),
        });
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.log(err?.message || "error occur in client side");
      }
    })();
  };

  return (
    <div className="form-container">
      <form className="simple-form" onSubmit={handlerSubmit}>
        <h2>Product Form</h2>
        <div className="form-group">
          <label htmlFor="phoneName">Phone Name:</label>
          <input
            type="text"
            id="phoneName"
            name="phoneName"
            placeholder="Enter phone name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNew;
