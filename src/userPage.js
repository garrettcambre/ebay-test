import React, { Component } from 'react';
import NavClass from './navbar';
import RequestButton from './requestButton';
import {firebase}  from './index';
import { Card, Progress, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


var doot;

class UserPage extends Component{
  constructor(props){
    super(props);
    this.state={
      requestDate:'',
      myRequests:[],
      requestDropdownValue:'',
    }
    doot=this;
  }

componentWillMount(){
  if(this.props.isUserLoggedIn){
  const myRequestsRef = firebase.database().ref('users/'+ this.props.frbsUid+'/requestsHistory/').limitToLast(3)
     myRequestsRef.on('value', function(snapshot) {
       doot.setState({
         myRequests:snapshot.val(), //this needs Object.values() to be accessed
       })
       return snapshot.val()
     })
   }else{
     return null;
   }
};

render(){
  return(
    <div>
         <NavClass/>
         <br/>
         <h1> Hello, {this.props.usersName}</h1>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <h3>your account balance is: ${this.props.accountBalance}</h3>
         <h4> your maximum account balance is ${this.props.maxBalance}</h4>
         <div>
           <div className="text-center">
           <RequestButton
                newRequest={this.props.newRequest}
                requestModal={this.props.requestModal}
                requestToggle={this.props.requestToggle}
                requestDateChange={this.props.requestDateChange}
                requestDate={this.props.requestDate}
                handleRequestDropdown={this.props.handleRequestDropdown}
                requestSubmit={this.props.requestSubmit}
                getPaddedDate={this.props.getPaddedDate}
                today={doot.props.today}
                handleRequestWindow={this.props.handleRequestWindow}
                />
             <br/>
             <br/>
             <br/>
            {parseFloat(this.props.accountBalance)} of {parseFloat(this.props.maxBalance)}
            <button onClick={this.props.decrementMaxBalance}>-</button>
            <button onClick={this.props.incrementMaxBalance}>+</button>
            </div>
            <br/>
           <Progress value={this.props.accountBalance} max={this.props.maxBalance} />
         </div>
         <ul>
           {this.state.myRequests.map(function(request, index) {
             return <MyContentItem request={request} key={index} />
           })}
         </ul>
    </div>

  );

}
}
const MyContentItem = ({ request }) => (

      <Card>
        <CardBody>
          <CardTitle>
            {request.name}
          </CardTitle>
          <CardText>
          you requested
           {" " +request.requestHours+" "}
           hours(s) for {request.requestDate}



          </CardText>
        </CardBody>
      </Card>
    )


export default UserPage;
