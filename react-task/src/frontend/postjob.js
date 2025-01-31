import { useState } from 'react';

const PostJob = () => {
    const [form, setForm] = useState({ title: "", descritiopn: "", poster_name: "", expiration: ""});

    const handleChange = (e) => setForm({...from, [e.target.name]: e.target.value });

    const handleChange = (e) => {
        e.preventDefult();
        fetch("https://localhost/backend/post_job.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form),
            }).then(() => alert("Job posted successfully"));
            
    };

    return (
        <form onSubmit={handleChange}>
            <input name="title" placeholder='Title' onChange={handleChange} required />
            <textarea name='description' placeholder='Description' onChange={handleChange} required />
            <input name='poster_name' placeholder='Your Name' onChange={handleChange} required />
            <input type='datetime-local' name='expiration' onChange={handleChange} required />
            <button type='submit'>POST Job</button>
        </form>
    );
};

export default PostJob;