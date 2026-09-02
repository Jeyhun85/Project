const myObj = {"People":[
    {
        "Id": "1",
        "FirstName": "Benjamin",
        "LastName": "Finkel",
        "Email": "ben.finkel@cbtnuggets.com",
        "Active": true
    },
    {
        "Id": "2",
        "FirstName": ["Jane", "Jack"],
        "LastName": "Doe",
        "Email": "jane.doe@cbtnuggets.com",
        "Active": false
    },
    {
        "Id": "3",
        "Firstname": "Pat",
        "Lastname": "Smith",
        "Email": "pat.smith@cbtnuggets.com",
        "Active": true
    }
]};

console.log(myObj.People[1].FirstName[0]);