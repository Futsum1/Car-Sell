import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditCarPage extends Component {
 state = {
   invalidForm: false,
   formData: this.props.location.state.car
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleUpdateCar(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };
 
 render() {
   return (
     <>
       <h1>Edit Car</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Car Make (required)</label>
           <input
             className="form-control"
             name="carMake"
             value={this.state.formData.carMake}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label>Car Model (required)</label>
           <input
             className="form-control"
             name="carModel"
             value={this.state.formData.carModel}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label>Car Color</label>
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

         <button
           type="submit"
           className="btn btn-xs"
           disabled={this.state.invalidForm}
         >
           Save Car
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
       </form>
     </>
   );
 }
}
export default EditCarPage;