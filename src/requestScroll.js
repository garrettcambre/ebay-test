import React, { Component } from 'react';
import {firebase}  from './index';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

let doot

class RequestScroll extends Component{
  constructor(props){
    super(props);
    this.state={

    }
        doot=this
  }

componentWillMount( ){



}


















  render() {
    return (
      <ul>
        {this.props.recentRequests.map(function(request, index) {
          return <ContentItem request={request} key={index} />
        })}
      </ul>
    );
  }
}

const ContentItem = ({ request }) => (

      <Card>
        <CardBody>
          <CardTitle>
            {request.name}
          </CardTitle>
          <CardText>
          requested
           {" " +request.requestHours+" "}
           hours(s) on {request.requestDate}
        
           <br/>
           Email:{" " +request.email}

          </CardText>
        </CardBody>
      </Card>

)






export default RequestScroll;
