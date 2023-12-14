
import  "./ag.css";
import React from 'react'

 function Component() {
  return (
    <>
    <div>
        <p><b>Hello dear ladies</b></p>
    </div>
    <div>
        <h2>This is components</h2>
    </div>
    <form action="#" method="post">
        <label for="username">Username:</label><br />
        <input type="text"  placeholder="username" required/><br /><br />
        <label for="password">Password</label><br />
        <input type="password"  required/><br /><br />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default Component
