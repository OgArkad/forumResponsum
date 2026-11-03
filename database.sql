CREATE TABLE messages (
  Author varchar(25),
  DateOfCreation varchar(15),
  DataInside varchar(1024)
); 
alter table messages enable row level security;
insert into messages
  (Author, DateOfCreation, DataInside)
values
  (
    'Max',
    '2026.11.23 - 23:12:43',
    'Hello, this is a comment'
  );

CREATE TABLE news (
  Title varchar(25),
  DateOfCreation varchar(15),
  DataInside varchar(1024)
); 
alter table messages enable row level security;
insert into messages
  (Title, DateOfCreation, DataInside)
values
  (
    'Big News',
    '2026.23.23 - 03:15:43',
    'Big news!'
  );