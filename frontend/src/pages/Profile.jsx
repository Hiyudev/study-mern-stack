import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify'


function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [navigate, user])

  const deleteAccount = () => {
    if (!confirm) {
      setConfirm(true);
      return;
    } else {
      dispatch(reset());
      dispatch(deleteUser());
      navigate("/login");
      toast.success("Successfully deleted you account");
    }
  }

  return (
    <section>
      <h1>Hello, {user ? user.name : "User"} !</h1>
      <h2>Your e-mail: {user.email}</h2>

      <button className='btn' onClick={deleteAccount}>{confirm ? "Are you sure?" : "Delete account"}</button>
    </section>
  );
}

export default ProfilePage;