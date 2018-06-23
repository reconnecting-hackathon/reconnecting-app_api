INSERT INTO user(first_name,last_name, image_url , email)
VALUES 
('Justin', 'Rodriguez','https://randomuser.me/api/portraits/men/5.jpg', 'justin@gmail.com'):

INSERT INTO contacts(first_name,last_name, image_url , email, phone, prefered_contact_method, frequency, user_id)
VALUES 
('Montana', 'Ali','https://randomuser.me/api/portraits/women/69.jpg', 'montana@gmail.com','212-770-9320','Phone','Every Week', 1),
('Sally', 'Liao','https://randomuser.me/api/portraits/women/2.jpg', 'sally@gmail.com','212-880-8888','Text','Every Two Weeks', 1),
('John', 'Graham','https://randomuser.me/api/portraits/men/1.jpg', 'sally@gmail.com','212-880-8888','Text','Every Two Weeks', 1):

INSERT INTO activities(activity_name)
VALUES
('Basketball')
('Shopping')
('Hiking');

INSERT INTO actions(action_complete, contacts_id)
VALUES
(0, 1)
(0,2)
(0,3);
