


|Partition       | Technology                    
|----------------|-------------------------------|
|Ui/Ux Design    |`'I Used Figma to design components'`         
|Front End       |`"React with some React libraries"`    
|Back End        |`Firebase API`




## MOVZELA Diagrams

In this part you will see a simple diagram of the components of the project 

```mermaid
sequenceDiagram
Firebase Auth  ->> Check User Exist: Go to Route Process
Check User Exist  ->> React Protected Route : Route to Home
React Protected Route -->>Home: Swipe to ./ 
Home--x Movie Api: Fetch Data With Axios
Movie Api-x Home: Get Response From Api
Movie Api-x MovieComponent: Get one Movie From Api with token and id
Home--> MovieRoute: On Click Get One Movie With ID
MovieRoute->MovieComponent: Show The Movie
```

And this will produce a flow chart:

```mermaid
graph LR
A((React)) -- Api --> B((Firebase))
B --> e((firebase Event Listener))
B --> s((firebase Store))
B --> k((firebase Auth))
D{{mian project}}
A -- Api --> w{{Axios}}
A --Lib--> l{{React-route}}
A --Api--> o{{React-paginate}}
A --Lib--> p{{React-toastify}}
A --Hook--> f{{Context-api}}
A --Api--> q{{Web-vitals}}
q --> D
l --> D
f --> D
o --> D
p --> D
w --> D
e --> D
k --> D
s --> D


```
