export default function validate(name, email, message) {
    if (name === '') {
        return 'Name is required';
    }
    if (email === '') {
        return 'Email is required';
    }
    if (email !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email address';
    }
    if (message === '') {
        return 'Message is required';
    }
    if (message.length < 10) {
        return 'Message must be at least 10 characters';
    }
    if (message.length > 500) {
        return 'Message must be less than 500 characters';
    }
    return '';
}
