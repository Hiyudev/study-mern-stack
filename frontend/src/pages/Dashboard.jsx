import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice'

function DashboardPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading } = useSelector((state) => state.goal);

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }

    dispatch(getGoals());

    return () => {
      reset();
    }
  }, [user, navigate, dispatch])

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <section className='heading'>
      <h1>Welcome {user ? user.name : "User"}</h1>
      <p>Goals dashboard</p>

      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((g) =>
              <GoalItem key={g._id} goal={g} />
            )}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </section>
  );
}

export default DashboardPage;