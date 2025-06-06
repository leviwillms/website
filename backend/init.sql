CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
);

INSERT INTO posts (title, body) VALUES
('Hello World', 'This is the first post on my retro site!');
