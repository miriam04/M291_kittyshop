<template>
    <div class="contact">
        <h1>Contact</h1>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86694.15781251494!2d8.466791448418036!3d47.232381710407054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa8c3e9d17fc5%3A0xd4d48bc55da582fc!2sBildungszentrum%20Z%C3%BCrichsee%20BZZ!5e0!3m2!1sde!2sch!4v1656104529122!5m2!1sde!2sch"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Send us a message!</h2>
        <form @submit="sendForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" name="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import validate from '../utils/validate';
export default {
    methods: {
        sendForm(e) {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            const errorMessage = validate(name, email, message);

            if (errorMessage) {
                alert(errorMessage);
                return;
            }

            fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            }).then((data) => {
                if (data.status === 200) {
                    alert('Message sent!');
                } else {
                    alert('Error sending message!');
                }
            });
        },
    },
};
</script>
