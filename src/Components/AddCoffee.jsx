import React from "react";
import Swal from 'sweetalert2'
const AddCoffee = () => {


    const handleAddCoffee = event =>{
        event.preventDefault();
        const form= event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const categoryDetails = form.categoryDetails.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity, supplier,category,categoryDetails, taste, photo }
        console.log(newCoffee );
        fetch('http://localhost:5000/coffee',{
          method: "POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success',
              text: 'User added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="coffee name"
                className="input input-bordered w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="available quantity"
                className="input input-bordered w-full"
                name="quantity"
              />
            </label>
          </div>
        </div>
        {/* supplier and taste row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="supplier name"
                className="input input-bordered w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="taste"
                className="input input-bordered w-full"
                name="taste"
              />
            </label>
          </div>
        </div>
        {/* category and details */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="category"
                className="input input-bordered w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category Details"
                className="input input-bordered w-full"
                name="categoryDetails"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo url"
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
