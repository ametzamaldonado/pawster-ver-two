import Form from 'react-bootstrap/Form';

export const textInput = ({ id, value, label }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId={id} >
                <Form.Label>{label}</Form.Label>
                <Form.Control type="text" placeholder="Normal text" value={value}/>
            </Form.Group>
        </>
    );
}

export const textAreaInput = ({ id, value, label }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId={id} >
                <Form.Label>{label}</Form.Label>
                <Form.Control as="textarea" rows={3} value={value}/>
            </Form.Group>
        </>
    );
}

export const phoneNumberInput = ({ id, value, label }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId={id}>
                <Form.Label>{label}</Form.Label>
                <Form.Control plaintext readOnly defaultValue={value} />
            </Form.Group>
        </>
    )
}

export const textDefault = ({ id, value, label }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId={id}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={value} />
            </Form.Group>
        </>
    )
}