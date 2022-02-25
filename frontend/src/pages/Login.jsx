import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";

function RegisterPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { name, email, password } = formData;

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

    const userData = {
      email, password
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Fragment>
      <section className="heading">
        <h1>
          <FaUser /> Login
        </h1>
        <p>Please enter</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange} autoComplete="password" />
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