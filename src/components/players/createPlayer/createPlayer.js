import classes from "./createPlayer.module.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import Modal from "../../UI/modal/modal";

const CreatePlayer = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // const onSubmitHandler = () => {
  //   const info = {
  //     name: this.props.name,
  //     surname: this.props.surname,
  //     email: this.props.email,
  //     tel: this.props.tel,
  //   };

  //   this.props.sendInfo(info);
  //   this.props.openModal();
  // };

  const onModalClos = () => {
    this.props.closeModal();
  };

  return (
    <div className={classes.Container}>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Prenom"
          onChange={(event) => props.inputChange(event)}
          ref={register({
            required: {
              value: true,
              message: "This is required",
            },
            pattern: {
              value: /(^[A-Z][a-zà-öø-ÿ]+) ?-?([A-Z][a-zà-öø-ÿ]+)? ?-?([A-Z][a-zà-öø-ÿ]+)?$/,
              message: "Invalid format!",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br></br>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Nom"
          onChange={(event) => props.inputChange(event)}
          ref={register({
            required: {
              value: true,
              message: "This is required",
            },
            pattern: {
              value: /(^[A-Z][a-zà-öø-ÿ]+) ?-?([A-Z][a-zà-öø-ÿ]+)? ?-?([A-Z][a-zà-öø-ÿ]+)?$/,
              message: "Invalid format!",
            },
          })}
        />
        {errors.surname && <p>{errors.surname.message}</p>}
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(event) => props.inputChange(event)}
          ref={register({
            required: {
              value: true,
              message: "This is required",
            },
            pattern: {
              value: /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br></br>
        <input
          type="text"
          id="tel"
          name="tel"
          placeholder="Numéro de téléphone"
          onChange={(event) => props.inputChange(event)}
          ref={register({
            required: {
              value: true,
              message: "This is required",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Numbers only",
            },
          })}
        />
        {errors.tel && <p>{errors.tel.message}</p>}
        <br></br>
        <button
          type="submit"
          // onClick={handleSubmit(onSubmit)}
          className={classes.Button}
        >
          Submit
        </button>
      </form>
      <Modal
      // show={this.props.modal}
      // // close={this.onModalClose}
      // messageId={"playerAvailability"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.newPlayer.name,
    surname: state.newPlayer.surname,
    email: state.newPlayer.email,
    tel: state.newPlayer.tel,
    modal: state.modal.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: (ident) => dispatch(actionCreators.setPlayerInfo(ident)),
    sendInfo: (info) => dispatch(actionCreators.sendPlayerInfo(info)),
    closeModal: () => dispatch(actionCreators.closeModal()),
    openModal: () => dispatch(actionCreators.openModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer);
