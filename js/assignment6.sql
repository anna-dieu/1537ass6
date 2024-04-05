CREATE DATABASE assignment6;
USE assignment6;

-- Create the A01275485_user table
CREATE TABLE A01275485_user (
  ID int NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email_address VARCHAR(100),
  password VARCHAR(100),
  PRIMARY KEY (ID)
);

-- Create the A01275485_user_timeline table
CREATE TABLE A01275485_user_timeline (
  ID int NOT NULL AUTO_INCREMENT,
  user_id INT,
  date_post DATE,
  post_text TEXT,
  time_post TIME,
  views INT,
  FOREIGN KEY (user_id) REFERENCES A01275485_user(ID)
);


-- Insert sample data into the A01275485_user table
INSERT INTO A01275485_user (user_name, first_name, last_name, email_address, password)
VALUES 
    ('nana', 'Anna', 'Dao', 'anna.dao16@gmail.com', 'ilikepython123'),
    ('zhanghao', 'Hao', 'Zhang', 'zhanghao@example.com', 'violin123'),
    ('heidi', 'Heidi', 'Ho-Man', 'heidi@example.com', 'heidi123'),
    ('suzy', 'Susan', 'Ts', 'suzy@example.com', 'suzy123'),
    ('cyndy', 'Cyndy', 'Ph', 'cyndy@example.com', 'cyndy123'),
    ('jenny', 'Jenny', 'Ch', 'Jenny@example.com', 'jenny123');

-- Insert sample data into the A01275485_user_timeline table
INSERT INTO A01275485_user_timeline (user_id, date_post, post_text, time_post, views)
VALUES 
    (1, '2024-03-20', 'Today, I went hiking with my friends! The weather was beautiful. ', '12:30:00', 12),
    (1, '2024-03-23', 'Currently working on my WEBDEV assignment ', '15:45:00', 20),
    (1, '2024-03-24', 'Currently working on my Java assignment', '15:45:00', 20),
    (1, '2024-03-25', 'Currently studying for my java exam.', '15:45:00', 20),
    (2, '2024-03-20', 'I finished my violin recital, I will be performing at a wedding!', '09:20:00', 7118),
    (2, '2024-03-22', 'I have a concert tonight so I have to fly to the city.', '14:10:00', 9200),
    (2, '2024-03-23', 'Concert is over, time to relax.', '14:10:00', 9200),
    (3, '2024-03-21', 'I just arrived in Hong Kong and got a nice warm bowl of soup!', '17:00:00', 550),
    (3, '2024-03-23', 'Currently shopping around Honkg Kong, I found good deals!', '11:55:00', 430),
    (4, '2024-03-22', 'Drowning in my workload, excited for the weekend.', '10:40:00', 67),
    (4, '2024-03-23', 'My room mate went away for a trip, time to cuddle the cats.', '13:20:00', 72),
    (5, '2024-03-23', 'Drowning in my assignments, excited for finals to be over.', '13:20:00', 72),    
    (5, '2024-03-24', 'I want to eat some hotpot...', '09:30:00', 85),
    (6, '2024-02-20', 'I am so tired, I wanna order some takeout instead of cooking.', '18:00:00', 42),
    (6, '2024-03-05', 'No work today, I wonder what my friends are up to.', '12:00:00', 38);
