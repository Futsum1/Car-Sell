import React, {Component} from 'react';
import {Link } from 'react-router-dom';

class AddCarPage extends Component {
 state = {
   invalidForm: true,
   formData: {
     carMake: '',
     carModel: '',
     color: '',
     year: '0000',
     odometer: '',
     photo: '',
     price: '',
     user: this.props.user._id
   }
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleAddCar(this.state.formData);
 };

 handleChange = e => {
   const formData = {
    ...this.state.formData,
     [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 render() {
   return (
     <>
       <h3>Add Car</h3>
       <form 
       ref={this.formRef} 
       autoComplete="off" 
       onSubmit={this.handleSubmit}
       >
         <div className="form-group">
           <label> Car Make (required)</label>
           <input
             className="form-control"
             name="carMake"
             value={this.state.formData.carMake}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label> Car Model (required)</label>
           <input
             className="form-control"
             name="carModel"
             value={this.state.formData.carModel}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label> Car Color </label>
           <input
             className="form-control"
             name="color"
             value={this.state.formData.color}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label> Car Year </label>
           <input
             className="form-control"
             name="year"
             value={this.state.formData.year}
             onChange={this.handleChange}
           />
         </div>

         <div className="form-group">
           <label> Car Odometer </label>
           <input
             className="form-control"
             name="odometer"
             value={this.state.formData.odometer}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label> photo </label>
           <input
             className="form-control"
             name="photo"
             value={this.state.formData.photo}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label> Price </label>
           <input
             className="form-control"
             name="price"
             value={this.state.formData.price}
             onChange={this.handleChange}
           />
         </div>
         <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
         Add Car
         </button>
         <Link to='/'>CANCEL</Link>
       </form>
     </>
   );
 }
}
export default AddCarPage;