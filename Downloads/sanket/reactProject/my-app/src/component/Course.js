import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
CardSubtitle,
CardText,
CardFooter,
Button,
Container,
}from "reactstrap";
const Course=({Course})=>{
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-blod">{Course.title}</CardSubtitle>
                <CardTitle>{Course.discription}</CardTitle>
                <Container className="text-center">
                    <Button color="BLUE" style={{ marginRight: '10px' }}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                     <CardTitle tag="h5" style={{fontWeight: 'bold'}}>
        Welcome To our course
      </CardTitle>
                </Container>
            </CardBody>
        </Card>
    );  

};
export default Course;
