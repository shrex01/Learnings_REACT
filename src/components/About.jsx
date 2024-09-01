import React from 'react'
import User from './User'
import UserClass from './UserClass'

export const About = () => {
  return (
    <div>
      <h2>About</h2>
      <User
        name={"shreyas U"}
        location={"Bengaluru"}
        contact={"@not_shrex.irl"}
      />

      <UserClass
        name={"shreyas U"}
        location={"Bengaluru"}
        contact={"@not_shrex.irl"}
      />
    </div>
  )
}

