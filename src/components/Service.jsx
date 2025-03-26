import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Service = () => {
    
    return (
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/92269080/photo/journey.jpg?s=1024x1024&w=is&k=20&c=-weed1C2UQUUDdh3cFpwvBHoo9n78CHCs2yGIm40x_E=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    )

}