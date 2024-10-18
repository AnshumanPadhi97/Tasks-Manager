CREATE TABLE Tasks(
Id int primary key identity(1,1),
TaskName nvarchar(50) not null,
TaskDetails nvarchar(100)
)
