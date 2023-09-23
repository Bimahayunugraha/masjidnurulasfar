export default function ContactMail(props) {
    return (
        <div>
            <h2>Hey, It`s me {props.name}</h2>
            <br />
            <strong>User details: </strong>
            <br />
            <strong>Name: </strong>
            {props.name} <br />
            <strong>Email: </strong>
            {props.email} <br />
            <strong>Phone: </strong>
            {props.phone} <br />
            <strong>Subject: </strong>
            {props.subject} <br />
            <strong>Message: </strong>
            {props.user_query} <br /> <br />
            Thank you
        </div>
    );
}
