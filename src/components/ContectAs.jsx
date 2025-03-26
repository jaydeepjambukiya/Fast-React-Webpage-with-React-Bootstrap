import React from "react";
const ContectAs = () => {
  return (
    <>
    <div className="container">
      <div className="row text-center mb-5">
        <h2>Contact Us</h2>
        <p>
          Our company offers a wide range of services to meet your needs.
          </p>
        </div>
        <div className="row">
            <div className="col">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.185358653468!2d72.53206287430396!3d23.090309513798864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833af6f39347%3A0xf1db9065daea7008!2sSilver%20Oak%20University!5e0!3m2!1sen!2sin!4v1742977064761!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
            </div>
            <div className="col">

            

      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
                checked
              />
              <label className="form-check-label" for="form2Example34">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-secondary btn-floating mx-1"
          >
            <i className="fab fa-facebook-f"></i>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-secondary btn-floating mx-1"
          >
            <i className="fab fa-google"></i>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-secondary btn-floating mx-1"
          >
            <i className="fab fa-twitter"></i>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-secondary btn-floating mx-1"
          >
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </>
  );
};
export default ContectAs;
