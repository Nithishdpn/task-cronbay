
CREATE TABLE jobs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descritiopn TEXT NOT NULL,
    poster_name VARCHAR(100) NOT NULL,
    lowest_bid DECIMAL(10, 2) DEFAULT NULL,
    expiration DATETIME NOT NULL
);

CREATE TABLE bids(
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    bidder_name VARCHAR(100) Not Null,
    bid_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);