import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Contact extends Component {
  render() {
    return (
      <div>
        <Form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Your Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="name@name.com" />
          </FormGroup>
          <FormGroup>
            <Label for="message">Text Area</Label>
            <Input type="textarea" name="message" id="message" placeholder="Your Message" />
          </FormGroup>
          <Button size="lg">Send</Button>
        </Form>
      </div>
    )
  }
}

export default Contact
