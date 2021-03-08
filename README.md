A simple ToDo list web app.
Implemented using MERN Stack ,CSS framework used - Bootstrap .
Has 3 routes - GET ,POST ,DELETE

A user can see all the tasks ,delete them or create one by clicking on the add task button and entering the following details :-
1. Name - Name of the Task ,
2. Description - Some Details about the Task ,
3. CreatedAt - Date-Time on which the task needs to be created ,
4. Duration - Time(in minutes) to delete the Task after it has been created .
for eg - A task in created on 1 jan 2021 at 4:00 pm with Duration 30 mins ,then the task will automatically get deleted on 1 jan 2021 at 4:30 pm .

Some Features of the app :-
1. Automatic Deletion - This is achieved by creating a TTL index on a field that holds values of BSON date type and specify a 'expires' value (in seconds) .The Document will expire on the specified date after number of seconds assigned to expires property .In our case I created a RemoveAfter field with type BSON Date and specified 'expires' as 0 .So the document will get expire after the RemoveAfter specified Date value .
2. Awsome Animations 
3. Simple and Beautiful Design
4. Super Easy to Use 
5. And Much More 

Live Url - https://frozen-oasis-69701.herokuapp.com/
Thats it Folks Please Check it out .