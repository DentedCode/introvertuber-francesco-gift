import { Form, Button } from 'react-bootstrap'

const SubscribeFormCard = ({ handleOnchange }) => {
  return (
    <div className="">
      <Form>
        <Form.Control placeholder="Search ..." onChange={handleOnchange} />
      </Form>
    </div>
  )
}

export default SubscribeFormCard
