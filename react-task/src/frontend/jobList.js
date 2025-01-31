import {useEffect , useState} from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("https://localhost/backend/fetch_jobs.php")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);
    return (
        <div>
            <h2> Job Listings</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.descritiopn}</p>
                        <P>LOWEST BID: {job.lowest_bit || "No bits yet"}</P>
                        <button onClick={() => window.location.href = '/job/${job.id}'}>View & Bid</button>
                    </li>
                ))}
            </ul>
        </div>
    );
                
};

export defult JobList;
                     

                    

                   