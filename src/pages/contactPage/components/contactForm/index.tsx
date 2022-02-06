import React, { ReactElement } from 'react';

const ContactForm = (): ReactElement => {
    return (
        <form>
            <div>
                <label>Name</label>
                <input />
            </div>
            <div>
                <label>Email</label>
                <input />
            </div>
            <div>
                <label>Subject</label>
                <input />
            </div>
            <div>
                <label>Message</label>
                <textarea />
            </div>
        </form>
    );
};

export default ContactForm;
