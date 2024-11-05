function Message() {

const name = 'Zuki';
    if (name)
        return <h1>Hello {name}!</h1>;
    return <h1>Goodbye World!</h1>
}

export default Message;