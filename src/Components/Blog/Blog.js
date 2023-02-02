import React from "react";
import { Table } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
<h1>Difference between authorization and authentication</h1>
      <Table striped className="table my-5" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Authentication</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              In the authentication process, the identity of users are checked
              for providing the access to the system.
            </td>
            <td>
              While in authorization process, a the person’s or user’s
              authorities are checked for accessing the resources.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              In the authentication process, users or persons are verified.
            </td>
            <td>While in this process, users or persons are validated.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>It is done before the authorization process.</td>
            <td>
              While this process is done after the authentication process.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>It needs usually the user’s login details.</td>
            <td>While it needs the user’s privilege or security levels.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Generally, transmit information through an ID Token.</td>
            <td>Generally, transmit information through an Access Token.</td>
          </tr>

          <tr>
            <td>6</td>
            <td>
              Authentication determines whether the person is user or not.
            </td>
            <td>While it determines What permission does the user have?</td>
          </tr>
        </tbody>
      </Table>

      <ul>
      <h2> Why are we using firebase ? </h2>

        <li>Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</li>
        <li>Firebase Database: used to store users data like chat messages, users details and other metadata</li>
        <li>Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.</li>
        <li>Firebase Cloud Messaging: used to send notification</li>
        <li>Firebase Remote Config: used to perform A/B testing on the go
</li>
      </ul>
      <ul>
      <h2>What other options do you have to implement authentication ?</h2>

        <li>Auth0</li>
        <li>MongoDB</li>
        <li>Passport</li>
        <li>Okta</li>
        <li>Parse</li>
        <li>Back4App</li>
        <li>Aws Amplify</li>
        <li>Supabase</li>
        <li>nHost</li>
        <li>KUZZLE</li>
      </ul>
      <h2> What other services does firebase provide other than authentication ?</h2>
      <ul>
        <li>Cloud Firestore</li>
        <li>Cloud Functions.</li>
        <li>Hosting</li>
        <li>Cloud Storage.</li>
        <li>Google Analytics.</li>
        <li>Predictions.</li>
        <li>Cloud Messaging.</li>
        <li>Dynamic Links</li>
        <li>Remote Config</li>

      </ul>
    </div>
  );
};

export default Blog;
