import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class CheckOut extends Component {
  state = {
    invalidForm: true,
    completed: false,
    formData: {
      buyerName: '',
      buyerLastName: '',
      emailAddress: '',
      ccNumber: '',
      expiryDate: '',
      securityCode: '',
    },
  };


  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ completed: true })
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <h3 style={{ fontStyle: 'italic' }}>CheckOut</h3>

        <form className="form-group-b" ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Card Holder Name</label>
            <input
              className="form-control"
              name="buyerName"
              value={this.state.formData.buyerName}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Credit / Debit </label>
            <input
              className="form-control"
              name="ccNumber"
              value={this.state.formData.ccNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              className="form-control"
              name="expiryDate"
              value={this.state.formData.expiryDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label> CVC </label>
            <input
              className="form-control"
              name="securityCode"
              onChange={this.handleChange}
              required
              value={this.state.formData.securityCode}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
              style={{ fontSize: '15px', color: '#007BFF' }}
            >
              PURCHASE
          </button>
            <Link to="/">CANCEL</Link>
          </div>
        </form>

        {this.state.completed && <Redirect to={{ pathname: '/success', state: { car: this.props.location.state.car } }} />}
      </>
    );
  }
}

export default CheckOut;
