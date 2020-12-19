import { Card, Form, Button } from 'react-bootstrap'
import style from './SubscribeCard.module.css'

const SubscribeFormCard = () => {
    return (
        <Card className={`${style.blog_card} text-center`}>
            <Card.Body>
                <Card.Title className={`${style.title} `}>
                    Subscribe for latest interviews and articles
                </Card.Title>
                <div className={style.sub_form}>
                    <Form inline className="d-flex justify-content-center">
                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                            Your email
                        </Form.Label>
                        <Form.Control
                            className="mb-2 mr-sm-2"
                            id="inlineFormInputName2"
                            placeholder="your@email.com"
                        />

                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Form>
                    <Form.Text className="text-muted small">
                        Unsubscribe any time!
                    </Form.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SubscribeFormCard
