import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";

function RegisterPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: ""
  })

  const { name, email, password1, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isSuccess, isError, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name,
        email,
        password: password1
      };

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Fragment>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" onChange={onChange} autoComplete="username" />

          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} autoComplete="email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password1" name="password1" value={password1} placeholder="Enter your password" onChange={onChange} autoComplete="new-password" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password2" name="password2" value={password2} placeholder="Confirm your password" onChange={onChange} autoComplete="new-password" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </Fragment>
  );
}

export default RegisterPage;