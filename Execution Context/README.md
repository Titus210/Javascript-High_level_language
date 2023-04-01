## Execution Context
This is a container or a box that stores variables and which our code are executed and evaluated.<br/>
It contains: 
- variable object <br/>
- Scope Chain
- this variable
#### Global execution context
This is code that is not in a function <br/>
It is normally the browser `window` object


### Creation Phase
- Creation og Variable Object(VO)
- Creation of scope chain
- Determine value of the this variable
  
### Execution Phase
The code of function that generated current execution context is ran line by line


## Variables Object
- The argument object is created, containing all the arguments passed to the function
- Code is scanned for __function declaration__, for each function a property is created in VO __pointing to the function__
- Code is scanned for __variable declaration__, for each variable a property is created in VO and set to __undefined__