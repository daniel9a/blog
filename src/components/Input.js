import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import {Form, Input } from 'reactstrap';

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      className="search" 
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      // iOS Safari doesn't blur input automatically on tap outside.
      onMouseLeave={e => e.target.blur()}
      {...rest}
    />
  </Form>
))
