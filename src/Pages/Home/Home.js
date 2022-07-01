import React from 'react';
import Footer from '../Shared/Footer';
import Form from '../ToDo/Form';

const Home = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">To-Do</h2>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;